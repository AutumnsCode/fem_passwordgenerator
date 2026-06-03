const getCharsetSize = (options: Record<OptionKey, boolean>): number => {
  let size = 0
  if (options.lowercase) size += 26
  if (options.uppercase) size += 26
  if (options.digits) size += 10
  if (options.symbols) size += 32

  return size
}


const calculateEntropy = (length: number, charsetSize: number): number => {
  if (charsetSize === 0 || length === 0) return 0
  return length * Math.log2(charsetSize)
}


// Thresholds follow common security guidelines: <28 bits = too weak, <50 = weak,
// <75 = medium, ≥75 = strong (approx. brute-force resistance levels).
export const calculateStrength = (options: Record<OptionKey, boolean>, passwordLength: number): 0 | 1 | 2 | 3 => {
  const cs = getCharsetSize(options)
  const bits = calculateEntropy(passwordLength, cs)

  if (bits < 28) return 0
  if (bits < 50) return 1
  if (bits < 75) return 2
  return 3
}
