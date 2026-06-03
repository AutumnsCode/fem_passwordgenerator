
const CheckCard = ({label, checked, onChange, description}: CheckCardType) => {
  return (
    <li>
      <label
        htmlFor={`include-${label}`}
        className="flex items-center gap-6 cursor-pointer"
      >
        <input
          type="checkbox"
          name={`include-${label}`}
          id={`include-${label}`}
          onChange={() => onChange()}
          className="appearance-none size-5 border-2 border-gray-200 transition-all duration-300 checked:bg-green-200 checked:border-green-200 checked:bg-center checked:bg-no-repeat cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 hover:border-green-200 peer"
          checked={checked}
        />
        <p
          className="capitalize text-gray-200 peer-focus:text-green-200 peer-hover:text-green-200"
        >
          Include {description}
        </p>

      </label>
    </li>
  )
}

export default CheckCard