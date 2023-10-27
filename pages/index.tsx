import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { LinkToNewTab } from "../components/link-new-tab";
import { NavBar } from "../components/nav-bar";
import { NavTab } from "../components/nav-tab";
import { Publication, PUBLICATIONS } from "../data/pubs";

// image imports
import ImageBadLand1 from "../public/imgs/bl.jpeg";
import ImageSquirrel from "../public/imgs/sql.jpeg";
import ImageBison2 from "../public/imgs/bs2.jpeg";
import ImageGrandTeton from "../public/imgs/gt.jpeg";
import ImageStone from "../public/imgs/st1.jpeg";
import ImageBadLand2 from "../public/imgs/bl2.jpeg";
import ImageGreenery1 from "../public/imgs/g1.jpeg";
import ImageBike1 from "../public/imgs/b1.jpeg";
import ImageGreenery2 from "../public/imgs/g2.jpeg";

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

const PublicationEntry: React.FC<{ pub: Publication }> = ({ pub }) => {
  const selfName = "Shihang Li";

  const formattedName = pub.authors.map((name, index) =>
    name === selfName ? <strong key={index}>{name}</strong> : name,
  );
  const concatenatedAuthors = formattedName.map((name, index) => (
    <span key={index}>
      {name}
      {index === formattedName.length - 1 ? "" : ", "}
    </span>
  ));

  return (
    <>
      {pub.url ? (
        <a
          href={pub.url}
          className="font-bold underline text-blue-600 dark:text-dark-accent"
        >
          {pub.title}
        </a>
      ) : (
        <div className="font-bold">{pub.title}</div>
      )}
      <div>{concatenatedAuthors}</div>
      <div className="italic">
        {pub.venue} (<UrlLink href={pub.venueLink}>{pub.venueAbbr}</UrlLink>)
      </div>
    </>
  );
};

const Publications: React.FC<{ pubs: Publication[] }> = ({ pubs }) => {
  return (
    <div>
      <SectionHeader>Publications</SectionHeader>
      <div>
        {pubs.map((pub, index) => (
          <PublicationEntry key={index} pub={pub} />
        ))}
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

interface ImageSpec {
  src: StaticImageData;
  alt: string;
}

const ImageGrid: React.FC<{ images: ImageSpec[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-0 pb-[100%]">
          <Image
            src={image.src}
            alt={image.alt}
            title={image.alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      ))}
    </div>
  );
};

const Fun = () => {
  const roadtripImages = [
    { src: ImageBadLand1, alt: "Dusk at Badlands National Park" },
    { src: ImageSquirrel, alt: "A squirrel at Crater Lake National Park" },
    {
      src: ImageBison2,
      alt: "A bison next to a van at Badlands National Park",
    },
    { src: ImageGrandTeton, alt: "Grand Teton National Park" },
    {
      src: ImageStone,
      alt: "A hill of tavertine at Yellowstone National Park",
    },
    { src: ImageBadLand2, alt: "Dusk at Badlands National Park" },
  ];

  const mm35Images = [
    { src: ImageGreenery1, alt: "Mountain in fog at Rainier National Park" },
    { src: ImageBike1, alt: "Some bikes in New York streets" },
    { src: ImageGreenery2, alt: "A tree at Rainer National Park" },
  ];

  return (
    <div>
      <SectionHeader>Fun</SectionHeader>
      <div className="py-3">
        <p>
          In my spare time, I enjoy taking <a href="photos">pictures</a>,
          {` snowboarding, `}
          {`mildly spirited backroad driving, and a healthy dose of metaprogramming :)`}
        </p>
      </div>

      <p>
        {`Below are some images I took on my cross-country roadtrip from New York
        to Seattle. These are not shot in 1:1 ratio -- someday I'll figure out
        how to write CSS for a responsive image grid with support for various
        aspect ratios, someday...`}
      </p>
      <ImageGrid images={roadtripImages} />

      <p className="pt-2">
        {`Lately I have been shooting with prime lenses exclusively. Here're some
        35mm shots:`}
      </p>
      <ImageGrid images={mm35Images} />
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
            <Publications pubs={PUBLICATIONS} />
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
