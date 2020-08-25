import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vic Li</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Vic Li</h1>

        <div className={styles.links}>
          <a
            href="https://www.github.com/vic-lee"
            style={{ padding: "2rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.logo} src="/github-logo.svg" />
          </a>
        </div>
      </main>
    </div>
  );
}
