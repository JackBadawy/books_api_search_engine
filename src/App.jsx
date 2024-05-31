import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SearchPage from "./Pages/SearchPage";
import BookDetailsPage from "./Pages/BookDetailsPage";
import { SearchContext } from "./Context/SearchContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchString, setSearchString] = useState("");
  const [updateSearchTerm, setUpdateSearchTerm] = useState(false);
  const [bookList, setBookList] = useState("");
  const [bookListReady, setBookListReady] = useState(false);

  return (
    <>
      <SearchContext.Provider
        value={{
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
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/book-details" element={<BookDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </SearchContext.Provider>
    </>
  );
}

export default App;
