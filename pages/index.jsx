import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

/* Estructura de la exportacion de una ruta */
export default function Home() {
  return (
    <MainLayout>
      <h1>Index Page</h1>
      <h1 className="title">
        Ir a <Link href="/about">
          <a >About!</a>
        </Link>
      </h1>
      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/index.jsx</code>
      </p>
    </MainLayout >
  )
}
