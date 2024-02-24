import { useNotes } from "../context/NoteContext";

const NoteStatus = () => {
  //   const status = [
  //     { status: CiAlignLeft, quantity: 0 },
  //     { status: CiAlignLeft, quantity: 0 },
  //     { status: CiAlignLeft, quantity: 0 },
  //   ];
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const openNotes = allNotes - completedNotes;
  if (!allNotes)
    return <h3 className="not-note">No Note has already been added!</h3>;

  return (
    <ul className="note-status">
      <li>
        All <span className="note-status__quantity">{allNotes}</span>
      </li>
      <li>
        Completed{" "}
        <span className="note-status__quantity">{completedNotes}</span>
      </li>
      <li>
        open <span className="note-status__quantity">{openNotes}</span>
      </li>
    </ul>
  );
};

export default NoteStatus;
