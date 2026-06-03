"use client"
import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import copyIcon from '@/app/assets/images/icon-copy.svg'

const OutputCard = ({ value }: { value: OutputType }) => {
  const [isCopied, setIsCopied] = useState(false)
  // Stored so we can cancel the reset if the component unmounts before the timer
  // fires (avoids update-after-unmount warning) and to prevent timer stacking on
  // rapid clicks.
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const handleCopy = async () => {
    if (!value) return

    await navigator.clipboard.writeText(value)
    setIsCopied(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <section className="p-4 sm:px-8 bg-gray-800 flex justify-between items-center gap-2">
      <input
        type='text'
        id='output'
        name='output'
        placeholder='P4$5W0rD!'
        className='w-full bg-transparent text-gray-200 placeholder:text-gray-700 text-3xl/10.5 font-bold outline-none'
        value={value ?? ''}
        readOnly
        aria-label={`Generated password: ${value}`}
      />
      <button
        type="button"
        className="flex gap-4 items-center cursor-pointer text-green-200 disabled:text-gray-700 disabled:cursor-none group"
        onClick={handleCopy}
        disabled={!value}
      >
        {/* hidden/block rather than conditional render avoids layout shift on the icon */}
        <span
          className={`uppercase font-bold sm:text-lg/6 ${isCopied ? "block" : "hidden"}`}
        >
          Copied
        </span>
        <Icon
          src={copyIcon.src}
          alt="Copy to clipboard"
          className="w-5.25 h-6 max-sm:w-4.5 max-sm:h-5 bg-green-200 group-hover:bg-white group-active:bg-green-300 group-disabled:bg-gray-600" />
      </button>
    </section>
  )
}

export default OutputCard