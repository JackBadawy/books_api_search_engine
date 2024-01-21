import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../Context/SearchContext";
import Nav from "../containers/Nav/Nav";
import getBookList from "../ApiCall/searchBooks";
import { BookListContext } from "../Context/BookListContext";
import BookList from "../containers/BookList/BookList";

const SearchPage = () => {
  const {
    searchTerm,
    setSearchTerm,
    searchString,
    setSearchString,
    updateSearchTerm,
    setUpdateSearchTerm,
    bookList,
    setBookList,
    bookListReady,
    setBookListReady,
  } = useContext(SearchContext);

  useEffect(() => {
    setSearchTerm(searchString); //this will provide initial searchterm

    //lets try making api call here
  }, [updateSearchTerm]);

  useEffect(() => {
    getBookList(searchTerm).then((results) => {
      //may want to add loading state
      setBookList(results.items);
      setBookListReady(true);
      console.log("from book list", bookList);
      /* console.log("title: ", bookList[0].searchInfo.textSnippet); */
    });
  }, [searchTerm]);
  useEffect(() => {
    console.log("from book list", bookList);
  }, [bookList]);

  //working on the theory that getbooklist will be one step behind if in same use Effect

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
