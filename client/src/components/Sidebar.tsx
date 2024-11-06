export default function Sidebar({
  setPage,
  page,
}: {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  page: string;
}) {
  return (
    <nav className="w-44 py-4 hidden lg:block">
      <ul>
        <li
          onClick={() => {
            setPage("Notes");
          }}
          className={`flex gap-3 items-center hover:bg-neutral-300 rounded-lg py-2 px-4 mb-1 ${
            page === "Notes" ? "bg-neutral-300" : ""
          }`}
        >
          <span>{"{  }"}</span>
          <span className="pt-0.5">Notes</span>
        </li>
        <li
          onClick={() => {
            setPage("Trash");
          }}
          className={`flex gap-3 items-center hover:bg-neutral-300 rounded-lg py-2 px-4 mb-1 ${
            page === "Trash" ? "bg-neutral-300" : ""
          }`}
        >
          <img src="trash.svg" alt="" />
          <span className="pb-0.5">Trash</span>
        </li>
      </ul>
    </nav>
  );
}
