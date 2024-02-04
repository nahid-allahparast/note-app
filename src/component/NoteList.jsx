import { useState } from "react";
import { CiTrash } from "react-icons/ci";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <NoteItem index={index} note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ index, note }) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div
      className={`note-item ${
        index % 4 === 0
          ? "note-item-1"
          : index % 4 === 1
          ? "note-item-2"
          : index % 4 === 2
          ? "note-item-3"
          : "note-item-4"
      }`}
    >
      <div className="note-item__header">
        <div>
          <h4 className="title">{note.titleNote}</h4>
          <p className="desc">{note.descNote}</p>
        </div>
        <div className="actions">
          <button className="delete">
            <CiTrash />
          </button>

          <input type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", dateOptions)}
      </div>
    </div>
  );
};
