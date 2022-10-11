import React, { useMemo, useState } from "react";

import { nanoid } from "nanoid";

import Header from "./UI/Header/Header";
import Search from "./UI/Search/Search";
import NoteList from "./NoteList";

import "../styles/App.css";
import { useSaveNotes } from "./hooks/useSaveNotes";

import { getNotes } from "./utils/getNotes";

function App() {
  const [notes, setNotes] = useState(getNotes());

  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const filtredNotes = useMemo(() => {
    const filtred = [...notes].filter((note) =>
      note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filtred.length === 0 ? notes : filtred;
  }, [searchQuery]);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      body: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  }

  function removeNote(id) {
    const filtredNotes = [...notes].filter((note) => note.id !== id);
    setNotes(filtredNotes);
  }
  useSaveNotes(notes, setNotes);

  return (
    <div className={`app mode-${darkMode ? "light" : "dark"}`}>
      <Header themeMode={darkMode} toggleDarkMode={setDarkMode}>
        <Search searhQuery={searchQuery} handleSearchNote={setSearchQuery} />
      </Header>
      <main className="notes-container">
        <NoteList
          notes={filtredNotes}
          handleAddNote={addNote}
          handleRemoveNote={removeNote}
        />
      </main>
    </div>
  );
}

export default App;
