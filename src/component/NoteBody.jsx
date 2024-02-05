import NoteList from "./NoteList";

const NoteBody = ({ notes, onDelete, onCompleted }) => {
  return (
    <div className="note-body">
      <div className="note-Header"></div>
      <NoteList notes={notes} onDelete={onDelete} onCompleted={onCompleted} />
    </div>
  );
};

export default NoteBody;
