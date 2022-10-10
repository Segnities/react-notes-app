import React, { useEffect, useState } from "react";

import { nanoid } from "nanoid";

import Header from "./UI/Header/Header";
import Search from "./UI/Search/Search";
import NoteList from "./NoteList";

import "../styles/App.css";
import { useSaveNotes } from "./hooks/useSaveNotes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      body: "This is my fist node!",
      date: "01.10.2022",
    },
    {
      id: nanoid(),
      body: "This is my second node!",
      date: "04.10.2022",
    },
    {
      id: nanoid(),
      body: "This is my third node!",
      date: "07.04.2022",
    },
    {
      id: nanoid(),
      body: "This is my fourth node!",
      date: "09.04.2022",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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
          notes={notes}
          handleAddNote={addNote}
          handleRemoveNote={removeNote}
        />
      </main>
    </div>
  );
}

export default App;
