declare type OutputType = string

declare type IconImage = {
  src: string
  alt: string
  className?: string
}

declare type RangeCardType = {
  length: number
  setLength: (value: number) => void
}

declare type OptionKey = "uppercase" | "lowercase" | "digits" | "symbols"

declare type CheckItemsType = {
  label: OptionKey
  description: string
}

declare type CharsType = Record<OptionKey, string>

declare type CheckCardType = {
  label: string
  description: string
  checked: boolean
  onChange: () => void
}

declare type StrengthContainerProps = {
  strength: 0 | 1 | 2 | 3 | null
}

