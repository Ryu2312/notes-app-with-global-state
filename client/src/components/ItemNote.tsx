import { useNotes, Value } from "../context/NotesContext";
import UseToggle from "./UseToggle";

function ItemNote({ note }: { note: Value }) {
  const {
    updateNote,
    state: { colors },
  } = useNotes();

  return (
    <div
      className={`relative w-56 h-56 grid grid-rows-[auto_1fr_auto] grid-cols-[auto_auto_1fr] gap-3 rounded-lg p-4 ${note.color}`}
    >
      <h2 className="font-semibold col-span-3">{note.title}</h2>

      <p className="col-span-3 bg">{note.importnt ? "yes" : "no"}</p>

      <button
        className="absolute right-3 top-3"
        onClick={() => {
          updateNote({ ...note, importnt: !note.importnt });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className={`stroke-neutral-500 hover:stroke-gray-700 stroke-2 ${
            note.importnt ? "fill-neutral-500" : "fill-none"
          }`}
        >
          <path d="M12 17v5" />
          <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
        </svg>
      </button>

      <UseToggle>
        {colors.map((color) => (
          <button
            type="button"
            key={color}
            onClick={() => {
              updateNote({ ...note, color });
            }}
            className={`h-5 w-5 rounded-full ${
              color === note.color
                ? color + " border border-neutral-500"
                : color
            } transform hover:scale-[117%]`}
          ></button>
        ))}
      </UseToggle>
      <button
        onClick={() => {
          updateNote({ ...note, deleted: !note.deleted });
        }}
      >
        <img
          src="trashGris.svg"
          alt="trash icon"
          className="transform hover:scale-110"
        />
      </button>
    </div>
  );
}
export default ItemNote;
