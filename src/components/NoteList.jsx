import React from "react";

import Note from "./Note";

import '../styles/Notes.css';
import AddNote from "./AddNote";

const NoteList = ({ notes, handleAddNote, handleRemoveNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          body={note.body}
          date={note.date}
          handleRemoveNote={handleRemoveNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
};

export default NoteList;
