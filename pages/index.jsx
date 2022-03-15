import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Nicolas RM</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <main className={styles.main}>
      <h1>About Page</h1>
        <h1 className={styles.title}>
          Ir a <Link href="/about">
            <a >About!</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.jsx</code>
        </p>

      </main>
    </div>
  )
}
