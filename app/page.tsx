import Image from "next/legacy/image";
import React from "react";
import { LinkToNewTab } from "../components/ui/link-new-tab";
import { NavBar } from "../components/ui/nav-bar";
import { NavTab } from "../components/ui/nav-tab";
import { PUBLICATIONS } from "../data/pubs";

import { Publications } from "../components/publications";
import { Intro } from "../components/intro";
import { Fun } from "../components/fun";
import { Teaching } from "../components/teaching";

import { TEACHING } from "../data/teaching";
import { CONTACT } from "../data/contact";

const FEATURE_FLAGS = {
  enable_blogs: false,
};

const ContactInfoContainer: React.FC = ({ children }) => (
  <span className="flex items-center justify-center gap-2">{children}</span>
);

const NameHeader: React.FC = ({ children }) => {
  return (
    <h1 className="text-center text-4xl md:text-5xl lg:text-7xl text-blue-800 dark:text-dark-accent font-bold lg:font-normal font-serif">
      {children}
    </h1>
  );
};

const ProfilePic = () => (
  <div
    className="relative border-black border-solid border-4"
    // hack: remove unwanted white space below profile picture
    style={{ height: "208px", width: "208px" }}
  >
    <Image
      src={CONTACT.profilePic}
      alt={`${CONTACT.titleName}'s profile picture.`}
      width="200"
      height="200"
      placeholder="blur"
    />
  </div>
);

const ContactInfo = () => {
  return (
    <div className="m-2 gap-1 flex flex-col justify-center items-start">
      <LinkToNewTab href={`https://www.github.com/${CONTACT.githubUsername}`}>
        <ContactInfoContainer>
          <Image
            src="/github-logo.svg"
            alt="Github Logo"
            width="16"
            height="20"
            className="dark:invert-90"
          />
          <span className="underline font-mono text-sm">
            {CONTACT.githubUsername}
          </span>
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
        <span className="underline font-mono text-sm">{CONTACT.email}</span>
      </ContactInfoContainer>
    </div>
  );
};

const TitleArea = () => (
  <span className="mx-10 my-2 flex flex-col md:flex-row md:items-center">
    <span className="m-10 flex justify-center">
      <ProfilePic />
    </span>
    <span className="flex flex-col items-center md:items-start gap-2 md:gap-6">
      <NameHeader>{CONTACT.titleName}</NameHeader>
      <ContactInfo />
    </span>
  </span>
);

export default function Home() {
  return (
    <main className="h-screen x-5 max-w-5xl m-auto">
      <NavBar>
        {FEATURE_FLAGS.enable_blogs && (
          <NavTab href="/blogs">
            <span data-cy="blogs-link">Blogs</span>
          </NavTab>
        )}
      </NavBar>

      <div className="px-5 pb-8 md:pt-0 flex flex-col gap-2 md:justify-center items-center text-gray-700 dark:text-gray-300">
        <TitleArea />
        <div className="max-w-2xl flex flex-col gap-8">
          <Intro />
          <Publications
            pubs={PUBLICATIONS}
            selfName={CONTACT.academicName ?? CONTACT.titleName}
          />
          <Teaching info={TEACHING} />
          <Fun />
        </div>
      </div>
    </main>
  );
}
