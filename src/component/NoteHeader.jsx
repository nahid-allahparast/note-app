import { useNotes } from "../context/NoteContext";

const NoteHeader = ({ sortBy, onSort }) => {
  // console.log(sortBy);
  const notes = useNotes();

  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort by latest</option>
        <option value="earliest">Sort by earliest</option>
        <option value="completed">Sort by completed</option>
      </select>
    </div>
  );
};

export default NoteHeader;
