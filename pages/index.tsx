import Head from "next/head";
import Image from "next/image";
import React from "react";
import { LinkToNewTab } from "../components/link-new-tab";
import { NavBar } from "../components/nav-bar";
import { NavTab } from "../components/nav-tab";

const GH_URL = "https://www.github.com/vic-shihang-li";

const EMAIL_ADDR = "shihang_li@cs.brown.edu";

const FEATURE_FLAGS = {
  enable_blogs: false,
};

const ContactInfoContainer: React.FC = ({ children }) => (
  <span className="flex items-center justify-center gap-2">{children}</span>
);

const UrlLink: React.FC<{ href: string }> = ({ children, href }) => (
  <a className="underline" href={href}>
    {children}
  </a>
);

const ContactInfo = () => {
  return (
    <div className="m-10 gap-2 flex flex-col justify-center items-start">
      <LinkToNewTab href={GH_URL}>
        <ContactInfoContainer>
          <Image
            src="/github-logo.svg"
            alt="Github Logo"
            width="16px"
            height="20px"
            className="dark:invert-90"
          />
          <span className="underline">vic-shihang-li</span>
        </ContactInfoContainer>
      </LinkToNewTab>

      <LinkToNewTab href={`mailto:${EMAIL_ADDR}`}>
        <ContactInfoContainer>
          <Image
            src="/mail-icon.png"
            alt="Mail Logo"
            width="16px"
            height="16px"
            className="dark:invert-90"
          />
          <span className="underline">{EMAIL_ADDR}</span>
        </ContactInfoContainer>
      </LinkToNewTab>
    </div>
  );
};

const PersonalIntro = () => {
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <p className="text-justify">
        {`
  Hi! I'm Vic, a second-year Master's Computer Science student at Brown.
`}
        I'm currently part of Professor{" "}
        <UrlLink href="https://cs.brown.edu/people/malte/">
          Malte Schwarzkopf
        </UrlLink>
        's <UrlLink href="https://etos.cs.brown.edu">ETOS group</UrlLink>
      </p>
      <p className="text-justify">
        {`I'm interested in making it easier to write safe and fast concurrent 
  programs. I also like to think about how programming language design
  influences the way we think about programming.`}
      </p>
      <p className="text-justify">
        {`In my spare time, I enjoy hiking, snowboarding, urban photography,
  and playing the piano.`}
      </p>
      <p className="text-justify">
        I enjoy programming in TypeScript and Rust, among many other languages.
      </p>
    </div>
  );
};

const NameHeader: React.FC = ({ children }) => {
  return (
    <h1 className="text-center text-4xl md:text-7xl text-blue-800 dark:text-dark-accent font-serif">
      {children}
    </h1>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vic Li</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Shihang (Vic) Li, a curious student figuring out his path in Computer Science."
        ></meta>
      </Head>

      <main className="h-screen py-10 md:py-20 px-5 max-w-5xl m-auto">
        <NavBar>
          {FEATURE_FLAGS.enable_blogs && (
            <NavTab href="/blogs">
              <span data-cy="blogs-link">Blogs</span>
            </NavTab>
          )}
        </NavBar>

        <div className="py-10 md:pt-0 md:mt-32 flex flex-col md:justify-center items-center">
          <NameHeader>Shihang (Vic) Li</NameHeader>
          <ContactInfo />
          <PersonalIntro />
        </div>
      </main>
    </div>
  );
}
