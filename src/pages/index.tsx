import * as React from 'react';

import Head from 'next/head';

import lib from '@erkobridee/my-ghp-lib';
import math from '@erkobridee/my-ghp-lib/math';

import styles from 'styles/Home.module.css';

export const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>use my-ghp-lib</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Use <a href="https://github.com/erkobridee/my-ghp-lib">my-ghp-lib</a>!
      </h1>

      <p className={styles.description}>
        library name: <code className={styles.code}>{lib.libraryName}</code>
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>lib.math.add &rarr;</h3>
          <p>
            1 + 2 + 3 =
            <code className={styles.code}>{lib.math.add(1, 2, 3)}</code>
          </p>
        </div>

        <div className={styles.card}>
          <h3>lib.math.subtract &rarr;</h3>
          <p>
            6 - 1 =
            <code className={styles.code}>{lib.math.subtract(6, 1)}</code>
          </p>
        </div>

        <div className={styles.card}>
          <h3>math.add &rarr;</h3>
          <p>
            7 + 9 + 7 = <code className={styles.code}>{math.add(7, 9, 7)}</code>
          </p>
        </div>

        <div className={styles.card}>
          <h3>math.subtract &rarr;</h3>
          <p>
            123 - 56 =
            <code className={styles.code}>{math.subtract(123, 56)}</code>
          </p>
        </div>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
);

export default Home;
