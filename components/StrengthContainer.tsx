import React from 'react'
import { StrengthBar } from './StrengthBar'
import { STRENGTH_LABELS } from '@/lib/constants'

export const StrengthContainer = ({ strength }: StrengthContainerProps) => {
  const strengthName = strength !== null ? STRENGTH_LABELS[strength] : ""

  return (
    <div className="bg-gray-850 p-4 sm:px-8 flex justify-between items-center">
      <h2 className="uppercase font-bold sm:text-lg/6">strength</h2>
      <div aria-live="polite" aria-atomic="true" className="flex gap-4 items-center">
        <h3 className='uppercase font-bold text-gray-200 text-lg/6 sm:text-2xl/8'>{strengthName}</h3>
        <StrengthBar strength={strength} />
      </div>
    </div>
  )
}
