import { useState, useEffect } from 'react'
import { convertLength, convertWeight } from '../../utils/convert'

import './Converter.css'

const UNITS = {
  length: ['cm', 'm', 'km', 'in', 'ft', 'yd', 'mi'],
  weight: ['g', 'kg', 'lb', 'oz'],
}

const Converter = () => {
  const [inputValue, setInputValue] = useState('')
  const [conversionType, setConversionType] = useState('length')
  const [fromUnit, setFromUnit] = useState(UNITS.length[0])
  const [toUnit, setToUnit] = useState(UNITS.length[1])
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setFromUnit(UNITS[conversionType][0])
    setToUnit(UNITS[conversionType][1])
  }, [conversionType])

  const handleConvert = () => {
    if (!inputValue || isNaN(inputValue)) {
      setResult('')
      setError('Please enter a valid number')
      return
    }

    const convertFunction =
      conversionType === 'length' ? convertLength : convertWeight

    const convertedValue = convertFunction(
      parseFloat(inputValue),
      fromUnit,
      toUnit,
    )

    setError('')
    setResult(convertedValue.toFixed(2))
  }

  return (
    <section className="converter">
      <div className="convers">
        <select
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />

      <div className="selects">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {UNITS[conversionType].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <span>to</span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {UNITS[conversionType].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>

      {error && (
        <p style={{ color: 'red', textAlign: 'center', fontSize: '16px' }}>
          {error}
        </p>
      )}

      {result && <p>Result: {result}</p>}
    </section>
  )
}

export default Converter
