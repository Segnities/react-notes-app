import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const CHARACTER_LIMIT = 200;

  function handleChangeNoteText(event) {
    setNoteText(event.target.value);
  }

  function handleSaveNote() {
    handleAddNote(noteText);
  }

  return (
    <div>
      <div className="note new-note">
        <div className="note-body"></div>
        <textarea
          rows={"8"}
          cols={"10"}
          placeholder="Type here to add new note..."
          value={noteText}
          onChange={handleChangeNoteText}
          maxLength={CHARACTER_LIMIT}
        ></textarea>
        <div className="note-footer">
          <small>{CHARACTER_LIMIT - noteText.length} remaining</small>
          <button className="save-note" onClick={handleSaveNote}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
