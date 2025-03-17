import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, LogoCloud } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
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

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" fillHeight vertical="center" paddingBottom="s">
      <Heading wrap="balance" variant="label-default-m">
          Some of the companies I already worked with
        </Heading>
      <LogoCloud
      limit={3}
      fillWidth
      logos={[
    {
      href: 'https://www.shopify.com/ca',
      target: '_blank',
      icon: false,
      size: 'xl',
      wordmarkSrc: '/images/logos/shopify-logo-white.svg'
    },
    {
      href: 'https://www.skipthedishes.com/',
      target: '_blank',
      icon: false,
      size: 'xl',
      wordmarkSrc: '/images/logos/skip-logo-white.svg'
    },
    {
      href: 'https://winnipeg.ubisoft.com/',
      target: '_blank',
      icon: false,
      size: 'xl',
      wordmarkSrc: '/images/logos/ubisoft-logo-white.svg'
    },
    {
      href: 'https://www.spud.ca/',
      target: '_blank',
      icon: false,
      size: 'xl',
      wordmarkSrc: '/images/logos/spud-logo-white.svg'
    },
    {
      href: 'https://oobj.com.br/',
      target: '_blank',
      icon: false,
      size: 'xl',
      wordmarkSrc: '/images/logos/oobj-logo-white.svg'
    },
    {
      href: 'https://www.tron.com.br/',
      target: '_blank',
      icon: false,
      size: 'xl',
      wordmarkSrc: '/images/logos/tron-logo-white.svg'
    },
  ]}
  columns="3"
  mobileColumns="1"
/>
</RevealFx>

      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
