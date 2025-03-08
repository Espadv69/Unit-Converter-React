import { useState } from 'react'
import { convertLength } from '../../utils/convert'

import './Converter.css'

const Converter = () => {
  const [inputValue, setInputValue] = useState('')
  const [frommUnit, setFromUnit] = useState('cm')
  const [toUnit, setToUnit] = useState('m')
  const [result, setResult] = useState('')
  // toDo: Add error state

  const handleConvert = () => {
    // toDo: Add logic to convert the input value from one unit to another
    console.log('Converting...')
  }

  return (
    <section className="converter-section">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />

      <div className="selects">
        <select value={frommUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
          <option value="feet">Feet</option>
          <option value="inches">Inches</option>
        </select>

        <span>to</span>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
          <option value="feet">Feet</option>
          <option value="inches">Inches</option>
        </select>
      </div>
      {result && <p>Result: {result}</p>}
    </section>
  )
}

export default Converter
