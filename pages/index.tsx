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

const NameHeader: React.FC = ({ children }) => {
  return (
    <h1 className="text-center text-4xl md:text-5xl lg:text-7xl text-blue-800 dark:text-dark-accent font-serif">
      {children}
    </h1>
  );
};

const ProfilePic = () => (
  <div
    className="relative border-black border-solid border-4"
    style={{ width: "200px", height: "200px" }}
  >
    <Image
      src="/profile.jpg"
      alt="Vic's profile picture."
      width="200px"
      height="200px"
    />
  </div>
);

const ContactInfo = () => {
  return (
    <div className="m-2 gap-1 flex flex-col justify-center items-start">
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

const TitleArea = () => (
  <span className="m-10 flex flex-col md:flex-row md:items-center">
    <span className="m-10">
      <ProfilePic />
    </span>
    <span className="flex flex-col items-center md:items-start gap-2 md:gap-6">
      <NameHeader>Shihang (Vic) Li</NameHeader>
      <ContactInfo />
    </span>
  </span>
);

const PersonalIntroArea = () => {
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <p className="text-justify">
        {`
  Hello there! I'm Vic, a second-year Master's Computer Science student at Brown.
`}
        {`I'm currently part of Professor `}
        <UrlLink href="https://cs.brown.edu/people/malte/">
          Malte Schwarzkopf
        </UrlLink>
        {`'s `}
        <UrlLink href="https://etos.cs.brown.edu">ETOS group</UrlLink>.
      </p>
      <p className="text-justify">
        {`I'm interested in making it easier to build distributed systems that are safe and fast.`}
      </p>
      <p className="text-justify">
        {`In my spare time, I enjoy hiking, snowboarding, and a healthy amount of metaprogramming :)`}
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vic Li</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Shihang (Vic) Li, a curious student figuring out his path in Computer Science."
        ></meta>
      </Head>

      <main className="h-screen md:py-20 px-5 max-w-5xl m-auto">
        <NavBar>
          {FEATURE_FLAGS.enable_blogs && (
            <NavTab href="/blogs">
              <span data-cy="blogs-link">Blogs</span>
            </NavTab>
          )}
        </NavBar>

        <div className="md:pt-0 flex flex-col md:justify-center items-center">
          <TitleArea />
          <PersonalIntroArea />
        </div>
      </main>
    </div>
  );
}
