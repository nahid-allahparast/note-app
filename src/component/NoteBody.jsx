import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";

const NoteBody = ({ notes, onDelete, onCompleted, sortBy }) => {
  return (
    <div className="note-body">
      <NoteStatus notes={notes} />
      <NoteList
        notes={notes}
        onDelete={onDelete}
        onCompleted={onCompleted}
        sortBy={sortBy}
      />
    </div>
  );
};

export default NoteBody;
