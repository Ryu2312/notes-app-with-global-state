export default function NoteList() {
  const notes = [
    "asda",
    "adasdas",
    "asdsad",
    "asda",
    "adasdas",
    "asdsad",
    "asda",
  ];
  return (
    <div className="w-full flex flex-wrap flex-grow basis-60 gap-4 justify-center">
      {notes.map((note) => (
        <div key={note} className="w-60 h-60 rounded-lg p-2">
          {note}
        </div>
      ))}
    </div>
  );
}
