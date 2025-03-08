export const convertLength = (value, fromUnit, toUnit) => {
  const units = {
    cm: 1,
    m: 100,
    km: 100000,
    in: 2.54,
    ft: 30.48,
    yd: 91.44,
    mi: 160934
  };

  return value * units[fromUnit] / units[toUnit];
}
