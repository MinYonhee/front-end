import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Conversor App',
  description: 'Aplicativo de conversão de unidades',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Conversor App</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-200">Home</Link>
              <Link href="/sobre" className="hover:text-blue-200">Sobre</Link>
              <Link href="/conversor-moeda" className="hover:text-blue-200">Conversor de Moeda</Link>
              <Link href="/conversor-temperatura" className="hover:text-blue-200">Conversor de Temperatura</Link>
              <Link href="/conversor-comprimento" className="hover:text-blue-200">Conversor de Comprimento</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
} 