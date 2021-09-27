import Head from "next/head";
import Image from "next/image";
import React from "react";
import { LinkToNewTab } from "../components/link-new-tab";

const GH_URL = "https://www.github.com/vic-shihang-li";

const EMAIL_ADDR = "shihang_li@cs.brown.edu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vic Li</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex flex-col h-screen py-10 px-5 md:justify-center items-center">
        <h1 className="text-center text-7xl text-blue-800 font-serif">
          Shihang (Vic) Li
        </h1>

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
      </main>
    </div>
  );
}
