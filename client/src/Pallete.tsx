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
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        className="hover:fill-gray-950"
      >
        <path
          d="M7.18216 0.177016C3.68755 0.859058 0.871467 3.66809 0.182388 7.15213C-1.11842 13.7264 4.81258 18.6273 9.28104 17.9347C10.7295 17.7097 11.4397 16.0152 10.7752 14.7108C9.96309 13.1147 11.1233 11.2514 12.9163 11.2514H15.7183C16.9769 11.2514 17.9965 10.2108 18 8.95567C17.9824 3.41496 12.9409 -0.944486 7.18216 0.177016ZM3.37465 11.2514C2.75237 11.2514 2.24962 10.7487 2.24962 10.1264C2.24962 9.50412 2.75237 9.00138 3.37465 9.00138C3.99693 9.00138 4.49968 9.50412 4.49968 10.1264C4.49968 10.7487 3.99693 11.2514 3.37465 11.2514ZM4.49968 6.75134C3.8774 6.75134 3.37465 6.2486 3.37465 5.62632C3.37465 5.00405 3.8774 4.5013 4.49968 4.5013C5.12196 4.5013 5.6247 5.00405 5.6247 5.62632C5.6247 6.2486 5.12196 6.75134 4.49968 6.75134ZM8.99979 4.5013C8.37751 4.5013 7.87476 3.99856 7.87476 3.37629C7.87476 2.75401 8.37751 2.25127 8.99979 2.25127C9.62207 2.25127 10.1248 2.75401 10.1248 3.37629C10.1248 3.99856 9.62207 4.5013 8.99979 4.5013ZM13.4999 6.75134C12.8776 6.75134 12.3749 6.2486 12.3749 5.62632C12.3749 5.00405 12.8776 4.5013 13.4999 4.5013C14.1222 4.5013 14.6249 5.00405 14.6249 5.62632C14.6249 6.2486 14.1222 6.75134 13.4999 6.75134Z"
          fill="#999B9E"
          className="hover:fill-gray-600"
        />
      </svg>
      <input id="colors" type="checkbox" className="peer hidden" />
      <fieldset className="absolute -top-[3.6rem] -left-14 hidden shadow-md rounded-lg p-1 w-[7.5rem] bg-white peer-checked:grid grid-cols-5 gap-1">
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
