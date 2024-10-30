import Form from "./Form";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div className="max-w-7xl grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] h-screen mx-auto bg-slate-50 ">
      <Header />
      <Sidebar />
      <main className="border h-full p-4 col-span-2 md:col-span-1">
        <Form />
      </main>
    </div>
  );
}
