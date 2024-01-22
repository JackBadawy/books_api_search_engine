import { SearchContext } from "../../Context/SearchContext";
import { useContext } from "react";
import BookCard from "../../components/BookCard/BookCard";
import missingThumbnail from "../../img/missingThumbnail.png";

const BookList = () => {
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

  return (
    <main className="search__card-container">
      {!bookListReady ? (
        <p>Loading...</p>
      ) : (
        bookListReady &&
        bookList &&
        bookList.map((book) => (
          <BookCard
            key={book.id}
            title={
              book.volumeInfo ? book.volumeInfo.title : "Title not available"
            }
            image={
              book.volumeInfo && book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : missingThumbnail
            }
            author={
              book.volumeInfo && book.volumeInfo.authors
                ? book.volumeInfo.authors.join(" & ")
                : "Author not available"
            }
            description={
              book.volumeInfo
                ? book.volumeInfo.description
                : "Description not available"
            }
          />
        ))
      )}
    </main>
  );
};

export default BookList;
