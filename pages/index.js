import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/componenets/Header";
import Posts from "@/componenets/Posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Codez </title>
        <meta name="description" content="Blog By Shubham Vishwakarma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <Header />
        </header>
        <div className={styles.seperator}>
          <div className={styles.posts}>
            <Posts />
          </div>
          <div className={styles.data}>Data</div>
        </div>
      </main>
    </>
  );
}
