const AddNewNote = () => {
  return (
    <div className="add-new-note">
      <h3>Add new note</h3>
      <form className="note-form">
        <input type="text" className="text-input" />
        <input type="text" className="text-input" />
        <button className="btn btn--primary">Add new note</button>
      </form>
    </div>
  );
};

export default AddNewNote;
