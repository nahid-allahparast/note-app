import { useState } from "react";
import { CiTrash } from "react-icons/ci";

const NoteList = ({ notes, onDelete, onCompleted }) => {
  return (
    
    <div className="note-list">
      {notes.map((note, index) => (
        <NoteItem
          index={index}
          note={note}
          key={note.id}
          onDelete={onDelete}
          onCompleted={onCompleted}
        />
      ))}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ index, note, onDelete, onCompleted }) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div
      className={`note-item note-item-4 ${
        note.completed && "note-item-completd"
      }`}
      //   className={`note-item ${
      //     index % 4 === 0
      //       ? "note-item-1"
      //       : index % 4 === 1
      //       ? "note-item-2"
      //       : index % 4 === 2
      //       ? "note-item-3"
      //       : "note-item-4"
      //   } ${note.completed && "note-item-completd"}`}
    >
      <div className="note-item__header">
        <div className={`title ${note.completed && "completed"}`}>
          <h4>{note.titleNote}</h4>
          <p className="desc">{note.descNote}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)} className="delete">
            <CiTrash />
          </button>

          <label htmlFor="checkbox-3">
            <input
              type="checkbox"
              id="toggle"
              name="toggle"
              onChange={onCompleted}
              checked={note.completed}
              value={note.id}
            />
          </label>
        </div>
        
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", dateOptions)}
      </div>
    </div>
  );
};
