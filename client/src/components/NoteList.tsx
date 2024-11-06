import { useNotes, Value } from "../context/NotesContext";
import ItemNote from "./ItemNote";

export default function NoteList({
  title,
  criteria,
  value,
}: {
  title: string;
  criteria: "importnt" | "deleted";
  value: boolean;
}) {
  const {
    state: { notes },
  } = useNotes();
  const list = notes.filter((note) => note[criteria] === value);
  return (
    <div className="flex flex-col gap-3 w-full items-center">
      <h2 className="font-bold font-sans mr-auto">{title}</h2>
      {list.length > 0 ? (
        <div className="flex flex-wrap flex-grow gap-4">
          {list.map((note: Value) => (
            <ItemNote note={note} key={note.id} />
          ))}
        </div>
      ) : (
        <span>There are no notes</span>
      )}
    </div>
  );
}
