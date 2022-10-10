import React from "react";

import { MdSearch } from "react-icons/md";

import style from "./assets/css/Search.module.css";

const Search = ({ searhQuery, handleSearchNote }) => {
  return (
    <div className={style.search}>
      <MdSearch className="search-icons" size={"1.3em"} />
      <input
        type="search"
        placeholder="Type to search..."
        value={searhQuery}
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
};

export default Search;
