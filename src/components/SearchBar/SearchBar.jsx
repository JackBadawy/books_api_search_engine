import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import * as styles from "../../styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const {
    searchString,
    setSearchString,
    updateSearchTerm,
    setUpdateSearchTerm,
    setBookListReady,
  } = useContext(SearchContext);

  const navigate = useNavigate();

  const handleSearch = () => {
    setUpdateSearchTerm(!updateSearchTerm);
    setBookListReady(false);
    navigate("/search");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search__bar__container">
      <input
        type="text"
        className="search__bar"
        placeholder="Search Here"
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <div onClick={handleSearch} className="search__btn">
        <FontAwesomeIcon icon={faSearch} className="search__btn__icon" />
      </div>
    </div>
  );
};

export default SearchBar;
