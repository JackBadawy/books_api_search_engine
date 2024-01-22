import { useState, useContext } from "react";
import { NavLink, Navigate, Link } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import * as styles from "../../styles.scss";

const SearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchString,
    setSearchString,
    updateSearchTerm,
    setUpdateSearchTerm,
    bookListReady,
    setBookListReady,
  } = useContext(SearchContext);

  return (
    <div className="search__bar__container">
      <input
        type="text"
        className="search__bar"
        placeholder="Search Here"
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
      />
      <Link
        onClick={() => {
          setUpdateSearchTerm(!updateSearchTerm);
          setBookListReady(false);
        }}
        to={"/search"}
        className="search__btn"
      >
        <img src="src\img\searchIcon.png" alt="" height="18px" />
      </Link>
    </div>
  );
};

export default SearchBar;
