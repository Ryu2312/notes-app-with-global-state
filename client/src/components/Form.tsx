import { useRef } from "react";
import { useNotes, Value } from "../context/NotesContext";
import UseToggle from "./UseToggle";

export default function Form() {
  const count = useRef(1);
  const {
    addNote,
    state: { colors },
  } = useNotes();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { importnt, ...resto } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    addNote({
      id: ++count.current,
      importnt: !!importnt,
      deleted: false,
      ...resto,
    } as Value);

    event.currentTarget.reset();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-4 rounded-xl grid grid-cols-[auto_1fr_auto] grid-[auto_1fr_auto] min-w-72 w-full max-w-lg mx-auto bg-neutral-300 text-gray-600 font-semibold"
    >
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="row-span-1 col-span-3 outline-none bg-neutral-300 placeholder:text-gray-500 placeholder:font-semibold"
      />

      <textarea
        name="body"
        placeholder="Your note..."
        className="resize-none row-span-1 col-span-3 outline-none bg-neutral-300 placeholder:text-gray-500 placeholder:font-semibold"
      />

      <UseToggle>
        {colors.map((color) => (
          <div key={color}>
            <input
              name="color"
              type="radio"
              id={color}
              value={color}
              defaultChecked={color === "bg-white border"}
              className="peer hidden"
            />
            <label
              htmlFor={color}
              className={`box-border z-20 h-5 w-5 block transform hover:scale-[1.2] peer-checked:border peer-checked:border-gray-500 ${color} rounded-full`}
            ></label>
          </div>
        ))}
      </UseToggle>

      <label className="absolute right-3 top-3">
        <input name="importnt" type="checkbox" className="peer hidden" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="fill-none peer-checked:fill-neutral-500 stroke-neutral-500 hover:stroke-gray-700 stroke-2"
        >
          <path d="M12 17v5" />
          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
        </svg>
      </label>

      <button className="font-semibold hover:text-white text-gray-600 p-1 col-start-3">
        Keep it!
      </button>
    </form>
  );
}
