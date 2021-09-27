import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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
          <a
            href={GH_URL}
            style={{ padding: "2rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              alt="GitHub Logo"
              src="/github-logo.svg"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
