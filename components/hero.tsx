import { ContactInfo } from "../data/contact";
import Image from "next/legacy/image";
import { LinkToNewTab } from "./ui/link-new-tab";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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

const ProfilePic: React.FC<{
  src: string | StaticImport;
  alt: string;
}> = ({ src, alt }) => (
  <div
    className="relative border-black border-solid border-4"
    // hack: remove unwanted white space below profile picture
    style={{ height: "208px", width: "208px" }}
  >
    <Image src={src} alt={alt} width="200" height="200" placeholder="blur" />
  </div>
);

const ContactInfo: React.FC<{ contact: ContactInfo }> = ({ contact }) => {
  return (
    <div className="m-2 gap-1 flex flex-col justify-center items-start">
      <LinkToNewTab href={`https://www.github.com/${contact.githubUsername}`}>
        <ContactInfoContainer>
          <Image
            src="/github-logo.svg"
            alt="Github Logo"
            width="16"
            height="20"
            className="dark:invert-90"
          />
          <span className="underline font-mono text-sm">
            {contact.githubUsername}
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
        <span className="underline font-mono text-sm">{contact.email}</span>
      </ContactInfoContainer>
    </div>
  );
};

export const HeroArea: React.FC<{ contact: ContactInfo }> = ({ contact }) => (
  <span className="mx-10 my-2 flex flex-col md:flex-row md:items-center">
    <span className="m-10 flex justify-center">
      <ProfilePic
        src={contact.profilePic}
        alt={`${contact.titleName}'s profile picture.`}
      />
    </span>
    <span className="flex flex-col items-center md:items-start gap-2 md:gap-6">
      <NameHeader>{contact.titleName}</NameHeader>
      <ContactInfo contact={contact} />
    </span>
  </span>
);
