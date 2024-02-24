import AddNewNote from "./component/AddNewNote";
import "./App.css";
import NoteBody from "./component/NoteBody";
import { useState } from "react";
import NoteHeader from "./component/NoteHeader";
import { NoteProvider } from "./context/NoteContext";
// const noteReducer = (notes, { type, payload }) => {
//   switch (type) {
//     case "ADD_NOTE": {
//       return [...notes, payload];
//     }
//     case "DELETE_NOTE": {
//       return notes.filter((item) => item.id !== payload);
//     }
//     case "COMPLETED_NOTE": {
//       return notes.map((note) =>
//         note.id === payload ? { ...note, completed: !note.completed } : note
//       );
//     }
//     default:
//       throw new Error("Unknown action " + type);
//   }
// };
const App = () => {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // const addNoteHandler = (newNote) => {
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  //   dispatch({ type: "ADD_NOTE", payload: newNote });
  // };
  // const deleteHandler = (id) => {
  //   // setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  //   dispatch({ type: "DELETE_NOTE", payload: id });
  // };
  // const complitedHandler = (e) => {
  //   const noteId = Number(e.target.value);
  //   dispatch({ type: "COMPLETED_NOTE", payload: noteId });

  //   // setNotes((prevNotes) =>
  //   //   prevNotes.map((note) =>
  //   //     note.id === noteId ? { ...note, completed: !note.completed } : note
  //   //   )
  //   // );
  // };

  return (
    <NoteProvider>
      <div className="main">
        <NoteHeader onSort={(e) => setSortBy(e.target.value)} />
        <div className="app-body">
          <AddNewNote />
          <NoteBody sortBy={sortBy} />
        </div>
      </div>
    </NoteProvider>
  );
};

export default App;
