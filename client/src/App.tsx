import Form from "./components/Form";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Notes");

  return (
    <div className="relative top-0 max-w-7xl grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] h-screen mx-auto">
      <Header />
      <Sidebar setPage={setPage} page={page} />
      <main className="flex flex-col gap-6 items-center py-6 px-8 col-span-2 lg:col-span-1 ">
        {page === "Notes" && (
          <>
            <Form />
            <NoteList title={"PINNED"} criteria={"importnt"} value={true} />
            <NoteList title={"OTHERS"} criteria={"importnt"} value={false} />
          </>
        )}
        {page === "Trash" && (
          <NoteList title={"Trash"} criteria={"deleted"} value={true} />
        )}
      </main>
    </div>
  );
}
