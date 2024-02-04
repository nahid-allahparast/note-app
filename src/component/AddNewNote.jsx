import { useState } from "react";

const AddNewNote = ({ onAddNote }) => {
  const [titleNote, setTitleNote] = useState("");
  const [descNote, setDescNote] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!titleNote || !descNote) return null;
    const newNote = {
      titleNote,
      descNote,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitleNote("");
    setDescNote("");
  };
  return (
    <div className="add-new-note">
      <h3>Add new note</h3>
      <form className="note-form" onSubmit={submitHandler}>
        <input
          onChange={(e) => setTitleNote(e.target.value)}
          value={titleNote}
          type="text"
          className="text-input"
          placeholder="Title ..."
        />
        <input
          onChange={(e) => setDescNote(e.target.value)}
          value={descNote}
          type="text"
          className="text-input"
          placeholder="Description ..."
        />
        <button type="submit" className="btn btn--primary">
          Add new note
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
