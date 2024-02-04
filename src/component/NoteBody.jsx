import NoteList from "./NoteList";

const NoteBody = ({ notes }) => {
  return (
    <div className="note-body">
      <div className="note-Header"></div>
      <NoteList notes={notes} />
    </div>
  );
};

export default NoteBody;
