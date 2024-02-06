import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";

const NoteBody = ({ notes, onDelete, onCompleted }) => {
  return (
    <div className="note-body">
      <NoteStatus notes={notes} />
      <NoteList notes={notes} onDelete={onDelete} onCompleted={onCompleted} />
    </div>
  );
};

export default NoteBody;
