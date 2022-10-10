import React from "react";

import style from "./assets/css/Header.module.css";

import darkMode from "./assets/icons/dark-mode.svg"
import lightMode from "./assets/icons/light-mode.svg"


const Header = ({ themeMode, toggleDarkMode, children }) => {
  return (
    <div className={style.header}>
      <h1>Notes</h1>
      <div className={style['search-wrapper']}>
        {children}
      </div>
      <button
        onClick={() => toggleDarkMode(!themeMode)}
        className={style["save-mode"]}
      >
        <img src={themeMode ? darkMode : lightMode} alt="" />
      </button>
    </div>
  );
};

export default Header;
