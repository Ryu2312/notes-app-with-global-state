import Pallete from "./Pallete";

export default function Form() {
  return (
    <form className="relative m-4 p-4 rounded-xl grid grid-cols-[auto_1fr_auto] grid-[auto_1fr_auto] min-w-44 max-w-lg mx-auto bg-white">
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="row-span-1 col-span-3 outline-none"
      />
      <textarea
        name="body"
        id=""
        placeholder="Your note..."
        className="resize-none row-span-1 col-span-3 outline-none"
      />

      <Pallete />
      <label htmlFor="pin" className="absolute right-3 top-3">
        <input
          type="checkbox"
          id="pin"
          name="important"
          className="peer hidden"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="fill-none peer-checked:fill-neutral-400 stroke-neutral-400 hover:stroke-gray-700 stroke-2"
        >
          <path d="M12 17v5" />
          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
        </svg>
      </label>
      <button className="font-semibold hover:text-gray-500 p-1 col-start-3">
        Keep it!
      </button>
    </form>
  );
}
