import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import styles from '../../styles/Home.module.css';

/* Estructura de la exportacion de una ruta */
export default function Contact() {
    return (
        <div className={styles.container}>
            {/* Informacion principal de la cabecera */}
            <Head>
                <title>
                    Contact - Pages
                </title>
                <meta name="description" content="Contact Page" />
                <link rel="rel" href="/favicon.ico" />
            </Head>
            {/* Importacion del Navbar */}
            <Navbar></Navbar>
            <main className={styles.main}>

                <h1>Contact Page</h1>
                <h1 className={styles.title}>
                    Ir a <Link href="/">
                        <a >Home!</a>
                    </Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/contact/index.jsx</code>
                </p>
            </main>
        </div>
    );
}