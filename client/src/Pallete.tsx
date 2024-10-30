export default function Pallete() {
  const colors = [
    "white",
    "red-200",
    "orange-200",
    "yellow-200",
    "lime-200",
    "teal-200",
    "cyan-200",
    "indigo-200",
    "violet-200",
    "pink-200",
  ];
  return (
    <label htmlFor="colors" className="relative p-1">
      <img src="pallete.svg" alt="" className="hover:opacity-40" />
      <input id="colors" type="checkbox" className="peer hidden" />
      <fieldset className="absolute -top-[3.6rem] -left-12 hidden shadow-md rounded-lg p-1 w-[7.5rem] bg-white peer-checked:grid grid-cols-5 gap-1">
        {colors.map((color) => (
          <div key={color}>
            <input
              type="radio"
              id={color}
              name="color-note"
              value={color}
              className="peer hidden"
              defaultChecked={color === "white"}
              required
            />
            <label
              htmlFor={color}
              className={`box-border h-5 w-5 block transform hover:scale-[1.2] peer-checked:border peer-checked:border-gray-500 bg-${color} ${
                color === "white" ? "border" : ""
              } rounded-full`}
            ></label>
          </div>
        ))}
      </fieldset>
    </label>
  );
}
