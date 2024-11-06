import { ReactNode, Reducer, useReducer } from "react";
import { MyContext, State, Value } from "./NotesContext";

const initialState = {
  colors: [
    "bg-white border",
    "bg-red-300",
    "bg-orange-300",
    "bg-yellow-300",
    "bg-lime-300",
    "bg-teal-300",
    "bg-cyan-100",
    "bg-indigo-300",
    "bg-violet-300",
    "bg-pink-300",
  ],
  notes: [
    {
      id: 1,
      title: "soy goku",
      body: "quiero dormir",
      color: "bg-red-300",
      importnt: false,
      deleted: false,
    },
  ],
};

export type NoteAction =
  | { type: "ADD_NOTE"; payload: Value }
  | { type: "EDIT_NOTE"; payload: Value }
  | { type: "DELETE_NOTE"; payload: number };

const reducer: Reducer<State, NoteAction> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, payload] };

    case "EDIT_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? payload : note
        ),
      };

    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload),
      };

    default:
      return state;
  }
};

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNote = (newNote: Value) => {
    dispatch({ type: "ADD_NOTE", payload: newNote });
  };

  const updateNote = (updatedNote: Value) => {
    dispatch({ type: "EDIT_NOTE", payload: updatedNote });
  };

  const deleteNote = (noteId: number) => {
    dispatch({ type: "DELETE_NOTE", payload: noteId });
  };

  return (
    <MyContext.Provider value={{ state, addNote, updateNote, deleteNote }}>
      {children}
    </MyContext.Provider>
  );
};
