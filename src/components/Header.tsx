"use client";

import { Flex, ToggleButton } from "@/once-ui/components";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { display, routes } from "@/app/resources";
import { useEffect, useState, useTransition } from "react";

import { i18n } from "@/app/resources/config";
import { renderContent } from "@/app/resources";
import { routing } from "@/i18n/routing";
import styles from "@/components/Header.module.scss";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname() ?? "";
  const params = useParams();

  function handleLanguageChange(locale: string) {
    const nextLocale = locale as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  const t = useTranslations();
  const { person, home, about, blog, genai, fullstack } = renderContent(t);

  return (
    <Flex
      style={{ height: "fit-content" }}
      className={styles.position}
      as="header"
      zIndex={9}
      fillWidth
      padding="8"
      justifyContent="center"
    >
      <Flex
        hide="s"
        paddingLeft="12"
        fillWidth
        alignItems="center"
        textVariant="body-default-s"
      >
        {display.location && <>{person.location}</>}
      </Flex>
      <Flex
        background="surface"
        border="neutral-medium"
        borderStyle="solid-1"
        radius="m-4"
        shadow="l"
        padding="4"
        justifyContent="center"
      >
        <Flex gap="4" textVariant="body-default-s">
          {routes["/"] && (
            <ToggleButton
              prefixIcon="home"
              href={`/${params?.locale}`}
              selected={pathname === "/"}
            >
              <Flex paddingX="2" hide="s">
                {home.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/about"] && (
            <ToggleButton
              prefixIcon="person"
              href={`/${params?.locale}/about`}
              selected={pathname === "/about"}
            >
              <Flex paddingX="2" hide="s">
                {about.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/genai"] && (
            <ToggleButton
              prefixIcon="grid"
              href={`/${params?.locale}/genai`}
              selected={pathname.startsWith("/genai")}
            >
              <Flex paddingX="2" hide="s">
                {genai.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/blog"] && (
            <ToggleButton
              prefixIcon="book"
              href={`/${params?.locale}/blog`}
              selected={pathname.startsWith("/blog")}
            >
              <Flex paddingX="2" hide="s">
                {blog.label}
              </Flex>
            </ToggleButton>
          )}
          {routes["/fullstack"] && (
            <ToggleButton
              prefixIcon="code"
              href={`/${params?.locale}/fullstack`}
              selected={pathname.startsWith("/fullstack")}
            >
              <Flex paddingX="2" hide="s">
                {fullstack.label}
              </Flex>
            </ToggleButton>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
