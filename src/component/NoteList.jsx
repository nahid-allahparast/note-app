import { useState } from "react";
import { CiTrash } from "react-icons/ci";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <NoteItem index={index} notes={notes} key={note.id} />
      ))}
      <div className="note-item note-item-1">item 1</div>
      <div className="note-item note-item-2">item 2</div>
      <div className="note-item note-item-3">item 3</div>
    </div>
  );
};

export default NoteList;

const NoteItem = ({ index }) => {
  console.log(index % 3);

  return (
    <div
      className={`note-item ${
        index % 3 === 0
          ? "note-item-1"
          : index % 3 === 1
          ? "note-item-2"
          : "note-item-3"
      }`}
    >
      <div className="note-item__content">
        <h5>test</h5>
        <p>content</p>
      </div>
      <div className="note-item__tools">
        <CiTrash />
        <div>date</div>
      </div>
    </div>
  );
};
