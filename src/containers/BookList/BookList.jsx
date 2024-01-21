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

  //we need to render a single card for now that displays first book as test, pass booklist data as brops to bookCard

  //old implementation
  /* <BookCard
            key={book.id}
            title={book.volumeInfo.title}
            image={book.volumeInfo.imageLinks.thumbnail}
            author={book.volumeInfo.authors.join(" & ")}
            description={book.volumeInfo.description}
          /> */

  return (
    <main className="searchCardContainer">
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
