export const getRandomChar = (chars: string): string => {
  const arr = new Uint32Array(1)
  const fairRange = Math.floor(2 ** 32 / chars.length) * chars.length
  
  do {
    crypto.getRandomValues(arr)
  } while (arr[0] >= fairRange)
  
  return chars[arr[0]  % chars.length]
}


