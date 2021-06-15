import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vinay Malankad - www.vinaymk.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! I'm Vinay M
        </h1>

        <p className={styles.description}>
          I am a JavaScript developer from Singapore.
        </p>
        <p className={styles.description}>
          Follow me on  <a className={styles.link} href='//github.com/rmdort'>Github</a>,  <a className={styles.link} href='//twitter.com/rmdort'>Twitter</a>
        </p>

        
      </main>
    </div>
  )
}
