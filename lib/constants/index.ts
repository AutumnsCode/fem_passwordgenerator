// Minmum Length of the Password

export const MIN = 0

// Max Length of thw Password
export const MAX = 18

export const CheckItems : CheckItemsType[] = [
  {
    label: "uppercase",
    description: "uppercase letter"
  },
  {
    label: "lowercase",
    description: "uppercase letter"
  },
  {
    label: "digits",
    description: "Numbers"
  },
  {
    label: "symbols",
    description: "symbols"
  },
]

export const CHARS: CharsType = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  digits: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{};\':"|,.<>/?`~\\',
}

export const STRENGTH_LABELS = [
  "too weak!",
  "weak",
  "medium",
  "strong"
]

export const STRENGTH_COLORS = {
  0: "var(--color-red-500)", // sehr schwach
  1: "var(--color-orange-400)", // schwach
  2: "var(--color-yellow-300)", // medium
  3: "var(--color-green-200)", // stark
}


 export const STRENGTH_BARS = {
  0: 1, // schwach    → 1 Balken
  1: 2, // mittel     → 2 Balken
  2: 3, // stark      → 3 Balken
  3: 4, // sehr stark → 4 Balken
}