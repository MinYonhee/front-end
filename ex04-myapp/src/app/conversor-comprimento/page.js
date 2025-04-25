'use client'

import { useState } from 'react'

export default function ConversorComprimento() {
  const [meters, setMeters] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')

  const handleMetersChange = (e) => {
    const value = e.target.value
    setMeters(value)
    if (value === '') {
      setFeet('')
      setInches('')
    } else {
      const totalInches = parseFloat(value) * 39.3701
      const feetValue = Math.floor(totalInches / 12)
      const inchesValue = (totalInches % 12).toFixed(2)
      setFeet(feetValue.toString())
      setInches(inchesValue)
    }
  }

  const handleFeetChange = (e) => {
    const value = e.target.value
    setFeet(value)
    if (value === '') {
      setMeters('')
      setInches('')
    } else {
      const totalInches = parseFloat(value) * 12 + (parseFloat(inches) || 0)
      const metersValue = (totalInches * 0.0254).toFixed(2)
      setMeters(metersValue)
    }
  }

  const handleInchesChange = (e) => {
    const value = e.target.value
    setInches(value)
    if (value === '') {
      setMeters('')
    } else {
      const totalInches = (parseFloat(feet) || 0) * 12 + parseFloat(value)
      const metersValue = (totalInches * 0.0254).toFixed(2)
      setMeters(metersValue)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Conversor de Comprimento</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="meters">
              Metros (m)
            </label>
            <input
              type="number"
              id="meters"
              value={meters}
              onChange={handleMetersChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Digite o valor em metros"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feet">
              Pés (ft)
            </label>
            <input
              type="number"
              id="feet"
              value={feet}
              onChange={handleFeetChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Digite o valor em pés"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inches">
              Polegadas (in)
            </label>
            <input
              type="number"
              id="inches"
              value={inches}
              onChange={handleInchesChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Digite o valor em polegadas"
            />
          </div>
        </div>
      </div>
    </div>
  )
}