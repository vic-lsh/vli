import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { LinkToNewTab } from "../components/link-new-tab";

const GH_URL = "https://www.github.com/vic-shihang-li";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vic Li</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Vic Li</h1>

        <div className={styles.links}>
          <LinkToNewTab href={GH_URL}>
            <Image
              className={styles.logo}
              alt="GitHub Logo"
              src="/github-logo.svg"
              width="30px"
              height="30px"
            />
          </LinkToNewTab>
        </div>
      </main>
    </div>
  );
}
