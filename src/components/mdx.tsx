// src/components/mdx.tsx
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";
import { SmartImage, SmartLink, Text, Flex } from "@/once-ui/components";
import { HeadingLink } from "@/components";
import { TextProps } from "@/once-ui/interfaces";
import { SmartImageProps } from "@/once-ui/components/SmartImage";
import rehypePrettyCode from "rehype-pretty-code";

type TableProps = {
  data: {
    headers: string[];
    rows: string[][];
  };
};

function Table({ data }: TableProps) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({
  alt,
  src,
  ...props
}: SmartImageProps & { src: string }) {
  if (!src) {
    console.error("SmartImage requires a valid 'src' property.");
    return null;
  }

  return (
    <SmartImage
      className="my-20"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const CustomHeading = ({ children, ...props }: TextProps) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink
        style={{
          marginTop: "var(--static-space-24)",
          marginBottom: "var(--static-space-12)",
        }}
        level={level}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `Heading${level}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "150%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function CodeBlock({
  children,
  className,
  raw,
  highlights,
  meta,
}: {
  children: ReactNode;
  className?: string;
  raw?: string;
  highlights?: number[];
  meta?: string;
}) {
  const language = className?.replace("language-", "") || "";

  return (
    <Flex
      as="pre"
      direction="column"
      fillWidth
      style={{
        position: "relative",
        margin: "var(--static-space-16) 0",
        padding: "var(--static-space-16)",
        backgroundColor: "var(--color-vscode-bg, #1e1e1e)", // VSCode-like background
        borderRadius: "var(--border-radius-m)",
        overflow: "auto",
        scrollBehavior: "smooth",
      }}
    >
      {/* Optional: Add language label */}
      {language && (
        <Text
          variant="body-default-xs"
          style={{
            position: "absolute",
            right: "var(--static-space-8)",
            top: "var(--static-space-8)",
            color: "var(--color-text-neutral-weak)",
            textTransform: "uppercase",
          }}
        >
          {language}
        </Text>
      )}
      <Text
        as="code"
        variant="body-default-m"
        style={{
          display: "block",
          width: "100%",
          whiteSpace: "pre",
          overflowX: "auto",
          tabSize: 2,
          fontFamily: "var(--font-family-mono)",
          lineHeight: "1.6",
          padding: "0.5em 0",
        }}
        data-language={language}
      >
        {children}
      </Text>
    </Flex>
  );
}

// For InlineCode component - enhanced with better styling
function InlineCode({ children }: { children: ReactNode }) {
  return (
    <Text
      as="code"
      variant="body-default-s"
      style={{
        padding: "0.2em 0.4em",
        backgroundColor: "var(--color-vscode-bg, #1e1e1e)",
        color: "var(--color-text-code, #d4d4d4)",
        borderRadius: "var(--border-radius-s)",
        fontFamily: "var(--font-family-mono)",
      }}
    >
      {children}
    </Text>
  );
}

const components = {
  p: createParagraph as any,
  h1: createHeading(1) as any,
  h2: createHeading(2) as any,
  h3: createHeading(3) as any,
  h4: createHeading(4) as any,
  h5: createHeading(5) as any,
  h6: createHeading(6) as any,
  img: createImage as any,
  a: CustomLink as any,
  Table,
  pre: CodeBlock as any,
  code: InlineCode as any,
};

// Configure rehype-pretty-code options
const rehypePrettyCodeOptions = {
  theme: "github-dark", // You can change this to any theme you prefer
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    // Add a highlighted line class
    node.properties.className = ["highlighted"];
  },
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
        ...props.options,
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
