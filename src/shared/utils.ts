
export const randomSeries = (length: number, hex: number = 36) =>
  Math.random()
    .toString(hex)
    .slice(2, 2 + length)
