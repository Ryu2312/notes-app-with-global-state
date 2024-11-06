import { createContext, useContext } from "react";

export interface Value {
  id: number;
  title: string;
  body: string;
  color: string;
  importnt: boolean;
  deleted: boolean;
  userid?: number | string;
}

export interface State {
  colors: string[];
  notes: Value[];
}

export type Update = Partial<Value>;

export interface NoteContextType {
  state: State;
  addNote: (note: Value) => void;
  updateNote: (note: Value) => void;
  deleteNote: (id: number) => void;
}

export const MyContext = createContext<NoteContextType | undefined>(undefined);

export const useNotes = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};
