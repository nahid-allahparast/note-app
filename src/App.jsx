import AddNewNote from "./component/AddNewNote";
import "./App.css";
import NoteBody from "./component/NoteBody";
const App = () => {
  return (
    <div className="main">
      <div className="header">
        <h1>My Notes</h1>
      </div>
      <div className="app-body">
        <AddNewNote />
        <NoteBody/>
        
      </div>
    </div>
  );
};

export default App;
