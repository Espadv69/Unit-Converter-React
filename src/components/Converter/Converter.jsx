import { useState } from 'react'
import { convertLength } from '../../utils/convert'

import './Converter.css'

const Converter = () => {
  const [inputValue, setInputValue] = useState('')
  const [fromUnit, setFromUnit] = useState('cm')
  const [toUnit, setToUnit] = useState('m')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const handleConvert = () => {
    if (!inputValue || isNaN(inputValue)) {
      alert('Please enter a valid number.')
      return
    }

    const convertedValue = convertLength(
      parseFloat(inputValue),
      fromUnit,
      toUnit,
    )

    setResult(convertedValue.toFixed(2))
  }

  return (
    <section className="converter">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />

      <div className="selects">
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="cm">Centimeters (cm)</option>
          <option value="m">Meters (m)</option>
          <option value="km">Kilometers (km)</option>
          <option value="in">Inches (in)</option>
          <option value="ft">Feet (ft)</option>
          <option value="yd">Yards (yd)</option>
          <option value="mi">Miles (mi)</option>
        </select>

        <span>to</span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="cm">Centimeters (cm)</option>
          <option value="m">Meters (m)</option>
          <option value="km">Kilometers (km)</option>
          <option value="in">Inches (in)</option>
          <option value="ft">Feet (ft)</option>
          <option value="yd">Yards (yd)</option>
          <option value="mi">Miles (mi)</option>
        </select>
      </div>
        <button onClick={handleConvert}>Convert</button>
      {result && <p>Result: {result}</p>}
    </section>
  )
}

export default Converter
