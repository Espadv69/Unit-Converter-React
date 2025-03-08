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
