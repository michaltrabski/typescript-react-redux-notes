import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddNoteForm from "./components/addNoteForm";
import { useDispatch, useSelector } from "react-redux";
import { NotesState } from "./store/store";
import { addNote } from "./store/actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const handleAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className="App">
      <header className="App-header">
        <AddNoteForm addNote={handleAddNote} />
        <ul>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
