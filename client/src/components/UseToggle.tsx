import { ReactNode, useState } from "react";

export default function UseToggle({ children }: { children: ReactNode }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative flex items-center">
      <button
        type="button"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        <img
          src="pallete.svg"
          alt=""
          className="transform hover:scale-[115%]"
        />
      </button>
      <div
        className={`absolute p-1 w-28 rounded-lg shadow-md bg-white -top-14 -left-14 ${
          toggle ? "grid grid-cols-5 justify-items-center gap-1" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
