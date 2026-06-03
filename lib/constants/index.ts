// Minimum password length (0 means the slider starts at "no characters selected").
export const MIN = 0

// Maximum password length supported by the slider.
export const MAX = 18

// Each label must match a key in the `options` object in usePasswordGenerator
// so CheckCard can look up the checkbox state by label.
export const CheckItems : CheckItemsType[] = [
  {
    label: "uppercase",
    description: "uppercase letter"
  },
  {
    label: "lowercase",
    description: "lowercase letter"
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

// Character pools keyed by option name. Order here determines which group is
// guaranteed first when building a password in usePasswordGenerator.
export const CHARS: CharsType = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  digits: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{};\':"|,.<>/?`~\\',
}

// Index 0–3 matches the strength score returned by calculateStrength.
export const STRENGTH_LABELS = [
  "too weak!",
  "weak",
  "medium",
  "strong"
]

export const STRENGTH_COLORS = {
  0: "var(--color-red-500)",    // too weak
  1: "var(--color-orange-400)", // weak
  2: "var(--color-yellow-300)", // medium
  3: "var(--color-green-200)",  // strong
}

// Number of filled bars shown in the strength indicator for each strength level.
// Always at least 1 so the bar strip is never completely empty.
export const STRENGTH_BARS = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
}