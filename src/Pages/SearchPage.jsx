import { useContext, useEffect } from "react";
import { SearchContext } from "../Context/SearchContext";
import Nav from "../containers/Nav/Nav";
import getBookList from "../ApiCall/searchBooks";
import BookList from "../containers/BookList/BookList";

const SearchPage = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchString,
    updateSearchTerm,
    bookList,
    setBookList,
    setBookListReady,
  } = useContext(SearchContext);

  useEffect(() => {
    setSearchTerm(searchString);
  }, [updateSearchTerm]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      getBookList(searchTerm).then((results) => {
        setBookList(results.items);
        setBookListReady(true);
      });
    }
  }, [searchTerm]);

  return (
    <div>
      <Nav />
      <h1>Search Page</h1>
      <p>Search term: {searchTerm}</p>

      <BookList />
    </div>
  );
};

export default SearchPage;
