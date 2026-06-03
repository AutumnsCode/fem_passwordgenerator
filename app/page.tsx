"use client"

import CheckCard from "@/components/CheckCard";
import Icon from "@/components/Icon";
import OutputCard from "@/components/OutputCard";
import RangeCard from "@/components/RangeCard";
import { CheckItems } from "@/lib/constants";
import { usePasswordGenerator } from "@/lib/hooks/usePasswordGenerator";
import { useEffect, useRef, useState } from "react";
import ArrowRight from "./assets/images/icon-arrow-right.svg"
import { StrengthContainer } from "@/components/StrengthContainer";

export default function Home() {
  // Inverts the button color scheme briefly to simulate a "pressed" state --
  // CSS :active alone isn't reliable for keyboard/programmatic triggers.
  const [active, setActive] = useState(false)
  // Stored so we can cancel the reset if the component unmounts before the
  // timer fires, avoiding a state-update-on-unmounted-component warning.
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { password, errorMsg, length, setLength, options, handleChange, generatePassword, strength} = usePasswordGenerator()

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const handleSubmit = () => {
    generatePassword()
    // Briefly flip the button style to give visual click feedback, then revert.
    setActive(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setActive(false), 200)
  }

  return (
    <main className="w-full mx-auto max-w-xl">
      <h1 className="text-center uppercase sm:text-2xl/8 mb-4 sm:mb-8">Password Generator</h1>

      <form className="space-y-4 sm:space-y-6">
        <OutputCard value={password} />
        <section className="p-4 sm:py-6 sm:px-8 bg-gray-800 space-y-8">
          <RangeCard length={length} setLength={setLength} />
          <ul className="space-y-4">
            {CheckItems.map(item => (
              <CheckCard
                key={item.label}
                label={item.label}
                checked={options[item.label as keyof typeof options]}
                onChange={() => handleChange(item.label)}
                description={item.description}
              />
            ))}
          </ul>
          <p className={`text-sm text-red-500 transition-opacity duration-300 ${errorMsg ? "opacity-100": "opacity-0"}`}>
            {errorMsg}
          </p>
          <div className="space-y-4 sm:space-y-6">
            <StrengthContainer strength={strength} />
            <button
              type="button"
              className={`w-full p-4 sm:py-5 flex items-center justify-center gap-4 sm:gap-6 border-2 cursor-pointer transition-all duration-300 group
                ${active
                ? "bg-gray-850 text-green-200 border-green-200"
                : "bg-green-200 text-gray-800 hover:bg-gray-850 hover:*:text-green-200 hover:border-green-200 focus-within:outline-none focus-within:border-green-200 focus-within:bg-gray-850 focus-within:text-green-200"
                }`}
              onClick={handleSubmit}
            >
              <span className="uppercase font-bold">Generate</span>
              <Icon
                src={ArrowRight.src}
                alt=""
                className={`w-3 h-2.75 transition-colors duration-300 ${active ? "bg-green-200" : "bg-gray-800 group-hover:bg-green-200 group-focus-within:bg-green-200"}`}
              />
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}
