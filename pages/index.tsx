import Head from "next/head";
import Image from "next/image";
import React from "react";
import { LinkToNewTab } from "../components/link-new-tab";
import { NavBar } from "../components/nav-bar";
import { NavTab } from "../components/nav-tab";

const GH_URL = "https://www.github.com/vic-shihang-li";

const EMAIL_ADDR = "shihang_li@brown.edu";

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
  <div className="relative border-black border-solid border-4">
    <Image
      src="/profile.jpg"
      alt="Vic's profile picture."
      width="200"
      height="200"
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
            width="16"
            height="20"
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
            width="16"
            height="16"
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
    <div className="flex flex-col gap-4">
      <p className="text-justify">
        {`Hello there! I'm Vic, a first-year Computer Science Ph.D. at
        University of Washington. `}

        {`I am a part of the `}
        <UrlLink href="https://syslab.cs.washington.edu/">
          UW Computer Systems Lab
        </UrlLink>
        {`, advised by `}
        <UrlLink href="https://homes.cs.washington.edu/~simpeter/">
          Prof. Simon Peter
        </UrlLink>
        {`. `}

        {`Before UW, I studied Finance and CS as an undergraduate at NYU, and `}
        {`worked with `}
        <UrlLink href="https://cs.brown.edu/people/malte/">
          Prof. Malte Schwarzkopf
        </UrlLink>
        {` as a Master's student in `}
        <UrlLink href="https://etos.cs.brown.edu">ETOS group</UrlLink>
        {`.`}
      </p>

      <p className="text-justify">
        <span>
          {`These days, I'm thinking about how to design high-performing
          systems to best serve emerging datacenter computing trends. `}
        </span>
        <span>
          {`In my spare time, I enjoy taking photos, snowboarding, and a
          healthy amount of metaprogramming :)`}
        </span>
      </p>

      <p className="text-justify"></p>
    </div>
  );
};

const Publications = () => {
  return (
    <div>
      <h2 className="text-2xl">Publications</h2>
      <div>
        <div className="py-3">
          <div className="font-bold">
            Unleashing True Utility Computing with Quicksand
          </div>
          <div>
            Zhenyuan Ruan, <b>Shihang Li</b>, Kaiyan Fan, Marcos K. Aguilera,
            Adam Belay, Seo Jin Park, Malte Schwarzkopf
          </div>
          <div className="italic">
            The 19th Workshop on Hot Topics in Operating Systems (
            <UrlLink href="https://sigops.org/s/conferences/hotos/2023/">
              HotOS ‘23
            </UrlLink>
            )
          </div>
        </div>
      </div>
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
          <div className="max-w-2xl flex flex-col gap-8">
            <PersonalIntroArea />
            <Publications />
          </div>
        </div>
        <div className="py-8">
          {/* hacky way to add padding at the bottom */}
        </div>
      </main>
    </div>
  );
}
