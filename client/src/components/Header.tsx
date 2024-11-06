export default function Header() {
  return (
    <header className="sticky bg-white top-0 z-10 row-span-1 col-span-2 px-4 py-2 flex items-center justify-between">
      <h1 className="font-semibold text-lg">Welcome to Notes App usuario</h1>
      <button className="px-4 py-2 font-medium text-xs bg-neutral-300 rounded-lg hover:opacity-80 hover:text-white hover:bg-gray-500">
        Logout
      </button>
    </header>
  );
}
