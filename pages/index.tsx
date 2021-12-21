import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkToNewTab } from "../components/link-new-tab";

const GH_URL = "https://www.github.com/vic-shihang-li";

const EMAIL_ADDR = "shihang_li@cs.brown.edu";

const ContactInfo = () => {
  return (
    <div className="m-10 flex flex-col justify-center items-start">
      <LinkToNewTab href={GH_URL}>
        <span className="flex items-center justify-center gap-2">
          <Image
            src="/github-logo.svg"
            alt="Github Logo"
            width="16px"
            height="16px"
          />

          <span className="underline">vic-shihang-li</span>
        </span>
      </LinkToNewTab>

      <LinkToNewTab href={`mailto:${EMAIL_ADDR}`}>
        <span className="flex items-center justify-center gap-2">
          <Image
            src="/mail-icon.png"
            alt="Mail Logo"
            width="16px"
            height="16px"
          />
          <span className="underline">{EMAIL_ADDR}</span>
        </span>
      </LinkToNewTab>
    </div>
  );
};

const PersonalIntro = () => {
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <p className="text-justify">{`
  Hi! I'm Vic, a Master's Computer Science student at Brown.
  I'm interested in making distributed systems easier to use and reason
  about. I'm also interested in how programming language design
  influences the way we think about programming.
`}</p>
      <p className="text-justify">
        {`In my spare time, I enjoy hiking, snowboarding, urban photography,
  and playing the piano.`}
      </p>
      <p className="text-justify">
        I also enjoy programming in TypeScript. A lot.
      </p>
    </div>
  );
};

const WelcomePageContainer: React.FC = ({ children }) => {
  return (
    <main className="h-screen py-20 px-5 max-w-5xl m-auto">{children}</main>
  );
};

const NameHeader: React.FC = ({ children }) => {
  return (
    <h1 className="text-center text-7xl text-blue-800 font-serif">
      {children}
    </h1>
  );
};

const NavBar: React.FC = ({ children }) => {
  return <div className="flex justify-end">{children}</div>;
};

const NavTab: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <span className="hover:bg-gray-200 transition-all px-3 py-2 rounded-md underline">
        {children}
      </span>
    </Link>
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

      <WelcomePageContainer>
        <NavBar>
          <NavTab href="/blogs">
            <span data-cy="blogs-link">Blogs</span>
          </NavTab>
        </NavBar>

        <div className="h-full pt-10 md:pt-0 flex flex-col md:justify-center items-center">
          <NameHeader>Shihang (Vic) Li</NameHeader>
          <ContactInfo />
          <PersonalIntro />
        </div>
      </WelcomePageContainer>
    </div>
  );
}
