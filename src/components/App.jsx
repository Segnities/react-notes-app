import React, { useState } from "react";

import { nanoid } from "nanoid";

import "../styles/App.css";
import Header from "./UI/Header/Header";
import Search from "./UI/Search/Search";

function App() {
  const [nodes, setNodes] = [
    {
      id: nanoid(),
      body: "This is my fist node!",
      date: "1/10/2022",
    },
    {
      id: nanoid(),
      body: "This is my second node!",
      date: "4/10/2022",
    },
    {
      id: nanoid(),
      body: "This is my third node!",
      date: "7/04/2022",
    },
    {
      id: nanoid(),
      body: "This is my fourth node!",
      date: "9/04/2022",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app mode-${darkMode ? "light" : "dark"}`}>
          <Header themeMode={darkMode} toggleDarkMode={setDarkMode}>
            <Search
              searhQuery={searchQuery}
              handleSearchNote={setSearchQuery}
            />
          </Header>
        <main>
          
        </main>
    </div>
  );
}

export default App;
