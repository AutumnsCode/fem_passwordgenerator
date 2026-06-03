import { STRENGTH_BARS, STRENGTH_COLORS, STRENGTH_LABELS } from '@/lib/constants'
import React from 'react'

export const StrengthBar = ({ strength }: StrengthContainerProps) => {
  const name = strength !== null ? STRENGTH_LABELS[strength] : ""
  const color = strength !== null ? STRENGTH_COLORS[strength] : ""
  const filledBars = strength !== null ? STRENGTH_BARS[strength] : 0
  return (
    <ul className='flex gap-2'>
      {[0, 1, 2, 3].map(i => (
        <li
          key={`${name}-${i}`}
          className='w-2.5 h-7 border-2'
          style={{
            background: i < filledBars ? color : "transparent",
            borderColor: i < filledBars ? color : "var(--color-gray-200)"
          }}
        />
      ))}
    </ul>
  )
}
