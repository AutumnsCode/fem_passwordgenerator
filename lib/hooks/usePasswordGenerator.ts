import { useState } from "react"
import { CHARS } from "../constants"
import { getRandomChar } from "../utils/getRandomChar"
import { shuffleCharacter } from "../utils/shuffleCharacter"
import { calculateStrength } from "../utils/passwordStrength"


export const usePasswordGenerator = () => {
  const [length, setLength] = useState(0)
  const [errorMsg, setErrorMsg] = useState("")
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState<0 | 1 | 2 | 3 | null>(null)
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    digits: true,
    symbols: false,
  })

  const handleChange = (key: keyof typeof options) => {
    setOptions(prev =>({...prev, [key]: !prev[key]}))
  }

  const generatePassword = () => {
    setErrorMsg("")
    setStrength(null)
    const enabledOptions = Object.entries(options).filter(([,enabled]) => enabled)
    
    if (length === 0) {
      setPassword("")
      setErrorMsg("The Password must be at least 1 character long.")
      return
    }

    if (Object.values(options).every(v => !v)) {
      setPassword("")
      setErrorMsg("Please select one options above")
      return
    }

    if (length < enabledOptions.length) {
      setPassword("")
      setErrorMsg(`Your password must be at least ${enabledOptions.length} characters long because you selected ${enabledOptions.length} character groups.`)
      return
    }

    const allCharacter = enabledOptions.map(([key]) => CHARS[key as OptionKey]).join("")

    // Pick one random char from each selected group so every group is guaranteed
    // to appear at least once in the final password before shuffling.
    const guranteedCharacter = enabledOptions.map(([key]) => {
      const chars = CHARS[key as OptionKey]
      return getRandomChar(chars)
    })

    // Fill the remaining slots from the combined character pool.
    const restCharacter = Array.from(
      { length: length - guranteedCharacter.length },
      () => getRandomChar(allCharacter)
    )

    const newPassword = shuffleCharacter([...guranteedCharacter, ...restCharacter]).join("")

    const newStrength = calculateStrength(options, length)
    
    setStrength(newStrength)
    
    setPassword(newPassword)
  }
  
  return {
    length,
    setLength,
    options,
    setOptions,
    handleChange,
    generatePassword,
    errorMsg,
    password,
    strength
  }
}

