import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddNoteForm from "./components/addNoteForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddNoteForm addNote={alert} />

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
