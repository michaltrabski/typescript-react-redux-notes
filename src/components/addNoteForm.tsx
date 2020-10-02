import React, { useState } from "react";

interface NewNoteFormProps {
  addNote(note: string): void;
}

export const AddNoteForm: React.FC<NewNoteFormProps> = ({ addNote }) => {
  const [note, setNote] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (note) {
      addNote(note);
      setNote("");
    } else {
      console.log("Please write your note!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="note"
        placeholder="Type your new note here..."
        value={note}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNote(e.target.value)
        }
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default AddNoteForm;
