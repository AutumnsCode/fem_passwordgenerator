import { MAX, MIN } from "@/lib/constants"

const RangeCard = ({ length, setLength }: RangeCardType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)

    const pct = ((val - MIN) / (MAX - MIN)) * 100
    e.target.style.setProperty("--fill", `${pct}%`)
    setLength(val)
  }
  return (
    <div>
      <label
        htmlFor="range"
        className="flex items-center justify-between gap-4 text-gray-200"
      >
        <h2 className="sm:text-lg/6 font-bold capitalize">Character Length</h2>
        <span className="text-2xl/8 sm:text-3xl/10.5 font-bold text-green-200">{length}</span>
      </label>
      <input 
        type="range"
        name="range"
        id="range" 
        min={MIN}
        max={MAX}
        value={length}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

export default RangeCard