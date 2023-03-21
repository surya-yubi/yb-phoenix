import MyButton from '@yubi/button-example';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Expo monorepo</title>
        <meta name="description" content="Sharing code with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MyButton
          text={'Hello'}
          onPress={() => {
            console.log('hello');
          }}
        />
      </main>
    </div>
  );
}
