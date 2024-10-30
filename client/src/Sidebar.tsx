export default function Sidebar() {
  return (
    <nav className="border w-48 py-4 hidden md:block">
      <ul>
        <li className="bg-neutral-300 rounded-e-2xl py-2 px-4">Notes</li>
        <li className=" rounded-e-2xl py-2 px-4">Trash</li>
      </ul>
    </nav>
  );
}
