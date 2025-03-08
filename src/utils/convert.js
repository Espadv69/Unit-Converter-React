export const convertLength = (value, fromUnit, toUnit) => {
  const units = {
    cm: 1,
    m: 100,
    km: 100000,
    in: 2.54,
    ft: 30.48,
    yd: 91.44,
    mi: 160934,
  }

  return (value * units[fromUnit]) / units[toUnit]
}

export const convertWeight = (value, fromUnit, toUnit) => {
  const units = {
    g: 1,
    kg: 1000,
    lb: 453.592,
    oz: 28.3495,
  }

  return (value * units[fromUnit]) / units[toUnit]
}

export const convertTemperature = (value, fromUnit, toUnit) => {
  const toCelsius = {
    C: (value) => value,
    F: (value) => (value - 32) / 1.8,
    K: (value) => value - 273.15,
  }

  const fromCelsius = {
    C: (value) => value,
    F: (value) => value * 1.8 + 32,
    K: (value) => value + 273.15,
  }

  if (!toCelsius[fromUnit] || !fromCelsius[toUnit]) {
    throw new Error('Invalid temperature unit')
  }

  return fromCelsius[toUnit](toCelsius[fromUnit](value))
}
