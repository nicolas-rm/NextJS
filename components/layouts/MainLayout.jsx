import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            {/* Informacion principal de la cabecera */}
            <Head>
                <title>Home - Nicolas RM</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Importacion del Navbar */}
            <Navbar></Navbar>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
