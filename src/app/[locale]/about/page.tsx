import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { person, about, social } = renderContent(t);
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { person, about, social } = renderContent(t);
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map(
        (experience: { company: any }) => experience.company
      ),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(
        (institution: { name: any }) => institution.name
      ),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill: { title: any }) => skill.title),
    },
  ];
  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter(
                (item: { link: string }) =>
                  item.link && !item.link.startsWith("mailto:")
              ) // Filter out empty links and email links
              .map(
                (item: { name: string; icon: string; link: string }) =>
                  item.link
              ),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Flex
          style={{ left: "0", top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          direction="column"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Flex>
      )}
      <Flex fillWidth mobileDirection="column" justifyContent="center">
        {about.avatar.display && (
          <Flex
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            direction="column"
            alignItems="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" alignItems="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map(
                  (
                    language:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined,
                    index: Key | null | undefined
                  ) => (
                    <Tag key={index} size="l">
                      {language}
                    </Tag>
                  )
                )}
              </Flex>
            )}
          </Flex>
        )}
        <Flex
          className={styles.blockAlign}
          fillWidth
          flex={9}
          maxWidth={40}
          direction="column"
        >
          <Flex
            id={about.intro.title}
            fillWidth
            minHeight="160"
            direction="column"
            justifyContent="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                  border: "1px solid var(--brand-alpha-medium)",
                  width: "fit-content",
                }}
                alpha="brand-weak"
                radius="full"
                fillWidth
                padding="4"
                gap="8"
                marginBottom="m"
                alignItems="center"
              >
                <Flex paddingLeft="12">
                  <Icon name="calendar" onBackground="brand-weak" />
                </Flex>
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="tertiary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
              >
                {social.map(
                  (item: {
                    link: string | undefined;
                    name: Key | null | undefined;
                    icon: string | undefined;
                  }) =>
                    item.link && (
                      <Button
                        key={item.name}
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name as string}
                        size="s"
                        variant="tertiary"
                      />
                    )
                )}
              </Flex>
            )}
          </Flex>

          {about.intro.display && (
            <Flex
              direction="column"
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Flex>
          )}

          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map(
                  (
                    experience: {
                      company: string;
                      role: string;
                      timeframe: string;
                      achievements: ReactElement[];
                      images: {
                        src: string;
                        alt: string;
                        width: number;
                        height: number;
                      }[];
                    },
                    index: any
                  ) => (
                    <Flex
                      key={`${experience.company}-${experience.role}-${index}`}
                      fillWidth
                      direction="column"
                    >
                      <Flex
                        fillWidth
                        justifyContent="space-between"
                        alignItems="flex-end"
                        marginBottom="4"
                      >
                        <Text
                          id={experience.company as string}
                          variant="heading-strong-l"
                        >
                          {experience.company}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text
                        variant="body-default-s"
                        onBackground="brand-weak"
                        marginBottom="m"
                      >
                        {experience.role}
                      </Text>
                      <Flex as="ul" direction="column" gap="16">
                        {experience.achievements.map(
                          (achievement: ReactElement, index: any) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${index}`}
                            >
                              {achievement}
                            </Text>
                          )
                        )}
                      </Flex>
                      {experience.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                          {experience.images.map((image, index) => (
                            <Flex
                              key={index}
                              border="neutral-medium"
                              borderStyle="solid-1"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <SmartImage
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Flex>
                  )
                )}
              </Flex>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map(
                  (
                    institution: {
                      name:
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | Promise<AwaitedReactNode>
                        | null
                        | undefined;
                      description:
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | Promise<AwaitedReactNode>
                        | null
                        | undefined;
                    },
                    index: any
                  ) => (
                    <Flex
                      key={`${institution.name}-${index}`}
                      fillWidth
                      gap="4"
                      direction="column"
                    >
                      <Text
                        id={institution.name as string}
                        variant="heading-strong-l"
                      >
                        {institution.name}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {institution.description}
                      </Text>
                    </Flex>
                  )
                )}
              </Flex>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l">
                {about.technical.skills.map(
                  (
                    skill: {
                      title:
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | Promise<AwaitedReactNode>
                        | null
                        | undefined;
                      description:
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | Promise<AwaitedReactNode>
                        | null
                        | undefined;
                      images: any[];
                    },
                    index: any
                  ) => (
                    <Flex
                      key={`${skill}-${index}`}
                      fillWidth
                      gap="4"
                      direction="column"
                    >
                      <Text variant="heading-strong-l">{skill.title}</Text>
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                      >
                        {skill.description}
                      </Text>
                      {skill.images.length > 0 && (
                        <Flex fillWidth paddingTop="m" gap="12" wrap>
                          {skill.images.map((image, index) => (
                            <Flex
                              key={index}
                              border="neutral-medium"
                              borderStyle="solid-1"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <SmartImage
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Flex>
                  )
                )}
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
