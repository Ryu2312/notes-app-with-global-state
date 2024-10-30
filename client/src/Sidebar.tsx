export default function Sidebar() {
  return (
    <nav className="w-44 py-4 hidden md:block">
      <ul>
        <li className="flex gap-3 items-center bg-neutral-300 rounded-e-2xl py-2 px-4">
          <span>{"{  }"}</span>
          <span className="pt-0.5">Notes</span>
        </li>
        <li className="flex gap-3 items-center rounded-e-2xl py-2 px-4">
          <img src="trash.svg" alt="" />
          <span className="pb-0.5">Trash</span>
        </li>
      </ul>
    </nav>
  );
}
