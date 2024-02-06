import AddNewNote from "./component/AddNewNote";
import "./App.css";
import NoteBody from "./component/NoteBody";
import { useState } from "react";
import NoteHeader from "./component/NoteHeader";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const addNoteHandler = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const deleteHandler = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
  const complitedHandler = (e) => {
    const noteId = Number(e.target.value);

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="main">
      <NoteHeader notes={notes} onSort={(e) => setSortBy(e.target.value)} />

      <div className="app-body">
        <AddNewNote notes={notes} onAddNote={addNoteHandler} />
        <NoteBody
          notes={notes}
          onDelete={deleteHandler}
          onCompleted={complitedHandler}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
};

export default App;
