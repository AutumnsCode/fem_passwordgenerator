export const shuffleCharacter = (arr: string[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (2 ** 32) * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}