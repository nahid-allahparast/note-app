import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";

const NoteBody = ({ sortBy }) => {
  return (
    <div className="note-body">
      <NoteStatus />
      <NoteList sortBy={sortBy} />
    </div>
  );
};

export default NoteBody;
