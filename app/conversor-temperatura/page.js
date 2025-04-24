'use client'

import { useState } from 'react'

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  const handleCelsiusChange = (e) => {
    const value = e.target.value
    setCelsius(value)
    if (value === '') {
      setFahrenheit('')
    } else {
      setFahrenheit(((parseFloat(value) * 9/5) + 32).toFixed(2))
    }
  }

  const handleFahrenheitChange = (e) => {
    const value = e.target.value
    setFahrenheit(value)
    if (value === '') {
      setCelsius('')
    } else {
      setCelsius(((parseFloat(value) - 32) * 5/9).toFixed(2))
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Conversor de Temperatura</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="celsius">
              Celsius (°C)
            </label>
            <input
              type="number"
              id="celsius"
              value={celsius}
              onChange={handleCelsiusChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Digite a temperatura em Celsius"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fahrenheit">
              Fahrenheit (°F)
            </label>
            <input
              type="number"
              id="fahrenheit"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Digite a temperatura em Fahrenheit"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 