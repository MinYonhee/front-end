import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Bem-vindo ao Conversor App</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg mb-6">
          Este é um aplicativo de conversão que oferece diversas ferramentas úteis para converter diferentes tipos de unidades:
        </p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">1</span>
            <Link href="/conversor-moeda" className="text-blue-600 hover:text-blue-800">
              Conversor de Moeda
            </Link>
            <span className="ml-2 text-gray-600">- Converta entre dólar e real</span>
          </li>
          
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">2</span>
            <Link href="/conversor-temperatura" className="text-blue-600 hover:text-blue-800">
              Conversor de Temperatura
            </Link>
            <span className="ml-2 text-gray-600">- Converta entre Celsius e Fahrenheit</span>
          </li>
          
          <li className="flex items-center">
            <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">3</span>
            <Link href="/conversor-comprimento" className="text-blue-600 hover:text-blue-800">
              Conversor de Comprimento
            </Link>
            <span className="ml-2 text-gray-600">- Converta entre metros, pés e polegadas</span>
          </li>
        </ul>
        
        <p className="text-lg">
          Todas as conversões são feitas em tempo real, sem necessidade de clicar em botões. Basta digitar o valor em um dos campos e o resultado será atualizado automaticamente.
        </p>
      </div>
    </div>
  )
} 