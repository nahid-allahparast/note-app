import { createContext, useContext, useReducer } from "react";

const NoteContext = createContext(null);
const NoteDispatchContext = createContext(null);

const noteReducer = (notes, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE": {
      return [...notes, payload];
    }
    case "DELETE_NOTE": {
      return notes.filter((item) => item.id !== payload);
    }
    case "COMPLETED_NOTE": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      throw new Error("Unknown action " + type);
  }
};

export const NoteProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, []);
  return (
    <NoteContext.Provider value={notes}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);
export const useNotesDispatch = () => useContext(NoteDispatchContext);
