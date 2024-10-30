import Form from "./Form";
import Header from "./Header";
import NoteList from "./NoteList";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="max-w-7xl grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] h-screen mx-auto">
      <Header />
      <Sidebar />
      <main className="border-collapse flex flex-col items-center p-4 col-span-2 md:col-span-1 overflow-auto">
        <Form />
        <NoteList />
      </main>
    </div>
  );
}
