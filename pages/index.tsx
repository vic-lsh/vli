import Head from "next/head";
import Image from "next/image";
import React from "react";
import { LinkToNewTab } from "../components/link-new-tab";
import { NavBar } from "../components/nav-bar";
import { NavTab } from "../components/nav-tab";

const GH_URL = "https://www.github.com/vic-shihang-li";

const EMAIL_ADDR = "shli [at] cs [dot] uw [dot] edu";

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

const SectionHeader: React.FC = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-blue-800 dark:text-dark-accent">
      {children}
    </h2>
  );
};

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
    </div>
  );
};

const TitleArea = () => (
  <span className="mx-10 my-2 flex flex-col md:flex-row md:items-center">
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
      <p>
        {`Hello there! I'm Vic, a first-year Computer Science Ph.D. student at
        University of Washington. `}

        {`I am a part of the `}
        <UrlLink href="https://syslab.cs.washington.edu/">
          UW Computer Systems Lab
        </UrlLink>
        {`, advised by `}
        <UrlLink href="https://homes.cs.washington.edu/~simpeter/">
          Simon Peter
        </UrlLink>
        {`. `}
        {`Before UW, I've had the pleasure of working with `}
        <UrlLink href="https://cs.brown.edu/people/malte/">
          Malte Schwarzkopf
        </UrlLink>
        {` and `}
        <UrlLink href="http://www.abelay.me/">Adam Belay</UrlLink>
        {` as a member of the `}
        <UrlLink href="https://etos.cs.brown.edu">ETOS group</UrlLink>
        {` at Brown.`}
      </p>
      <p>
        <span>
          {`These days, I'm thinking about how to design high-performing
          systems to best serve emerging datacenter computing trends. `}
        </span>
        <span>
          {`My latest work focuses on improving datacenter resource utilization
          with HW/SW co-design, resource disaggregation, and smart scheduling.`}
        </span>
        {/*
        <span>
          {`In my spare time, I enjoy taking photos, snowboarding, and a
          healthy amount of metaprogramming :)`}
        </span>
        */}
      </p>
      <p>
        {`I studied Finance and CS as an undergraduate at NYU Stern School of Business,
        with a focus on high-performance quantitative trading.`}
      </p>
    </div>
  );
};

const Publications = () => {
  return (
    <div>
      <SectionHeader>Publications</SectionHeader>
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

const Teaching = () => {
  return (
    <div>
      <SectionHeader>Teaching</SectionHeader>
      <div className="py-3">
        <p>
          {`I find teaching to a deeply rewarding experience. I have TAed for the following courses:`}
        </p>
        <ul className="list-disc list-outside ml-3 py-2">
          <li>CSCI 0300: Fundamentals of Computer Systems @ Brown</li>
          <li>CSCI 1760: Multiprocessor Synchronization @ Brown</li>
          <li>STAT-GB.2308.10: Stochastic Processes @ NYU</li>
        </ul>
      </div>
    </div>
  );
};

const Fun = () => {
  return (
    <div>
      <SectionHeader>Fun</SectionHeader>
      <div className="py-3">
        <p>
          {`In my spare time, I enjoy taking pictures, snowboarding, and a healthy amount of metaprogramming :)`}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shihang (Vic) Li</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Shihang (Vic) Li, a curious student figuring out his path in Computer Science."
        ></meta>
      </Head>

      <main className="h-screen x-5 max-w-5xl m-auto">
        <NavBar>
          {FEATURE_FLAGS.enable_blogs && (
            <NavTab href="/blogs">
              <span data-cy="blogs-link">Blogs</span>
            </NavTab>
          )}
        </NavBar>

        <div className="px-5 md:pt-0 flex flex-col md:justify-center items-center">
          <TitleArea />
          <div className="max-w-2xl flex flex-col gap-8">
            <PersonalIntroArea />
            <Publications />
            <Teaching />
            <Fun />
          </div>
        </div>
        <div className="py-8">
          {/* hacky way to add padding at the bottom */}
        </div>
      </main>
    </div>
  );
}
