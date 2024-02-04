import AddNewNote from "./component/AddNewNote";
import "./App.css";
import NoteBody from "./component/NoteBody";
import { useState } from "react";
const App = () => {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="main">
      <div className="header">
        <h1>My Notes</h1>
      </div>
      <div className="app-body">
        <AddNewNote notes={notes} onAddNote={handleAddNote} />
        <NoteBody notes={notes} />
      </div>
    </div>
  );
};

export default App;
