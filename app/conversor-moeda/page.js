'use client'

import { useState } from 'react'

export default function ConversorMoeda() {
  const [usd, setUsd] = useState('')
  const [brl, setBrl] = useState('')
  
  // Cotação fixa do dólar em 14/04/2025
  const dolarRate = 5.20

  const handleUsdChange = (e) => {
    const value = e.target.value
    setUsd(value)
    if (value === '') {
      setBrl('')
    } else {
      setBrl((parseFloat(value) * dolarRate).toFixed(2))
    }
  }

  const handleBrlChange = (e) => {
    const value = e.target.value
    setBrl(value)
    if (value === '') {
      setUsd('')
    } else {
      setUsd((parseFloat(value) / dolarRate).toFixed(2))
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Conversor de Moeda</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-gray-600 mb-2">Cotação do dólar: R$ {dolarRate}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usd">
              Dólar (USD)
            </label>
            <input
              type="number"
              id="usd"
              value={usd}
              onChange={handleUsdChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Digite o valor em dólar"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brl">
              Real (BRL)
            </label>
            <input
              type="number"
              id="brl"
              value={brl}
              onChange={handleBrlChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Digite o valor em real"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 