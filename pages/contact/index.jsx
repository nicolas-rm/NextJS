import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

/* Estructura de la exportacion de una ruta */
export default function Home() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className="title">
        Ir a <Link href="/">
          <a >Index!</a>
        </Link>
      </h1>
      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/contact/index.jsx</code>
      </p>
    </MainLayout >
  )
}