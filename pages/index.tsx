import Head from "next/head";
import Image from "next/image";
import { LinkToNewTab } from "../components/link-new-tab";

const GH_URL = "https://www.github.com/vic-shihang-li";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vic Li</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-7xl text-blue-700">Shihang (Vic) Li</h1>

        <div className="m-8">
          <LinkToNewTab href={GH_URL}>
            <span className="flex items-center justify-center gap-2">
              <Image
                alt="GitHub Logo"
                src="/github-logo.svg"
                width="16px"
                height="16px"
              />

              <span className="underline">vic-shihang-li</span>
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
            {" "}
            I also enjoy programming in TypeScript. A lot.
          </p>
        </div>
      </main>
    </div>
  );
}
