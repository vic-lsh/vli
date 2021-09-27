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

      <main>
        <h1 className="text-8xl text-blue-700">Vic Li</h1>

        <div className="m-8">
          <LinkToNewTab href={GH_URL}>
            <Image
              alt="GitHub Logo"
              src="/github-logo.svg"
              width="20px"
              height="20px"
            />
          </LinkToNewTab>
        </div>
      </main>
    </div>
  );
}
