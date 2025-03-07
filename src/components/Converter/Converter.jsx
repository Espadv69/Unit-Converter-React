import { useState } from 'react'
import './Converter.css'

const Converter = () => {
  const [inputValue, setInputValue] = useState('')
  const [frommUnit, setFromUnit] = useState('meters')
  const [toUnit, setToUnit] = useState('kilometers')
  const [result, setResult] = useState('')
  // toDo: Add error state
}

export default Converter
