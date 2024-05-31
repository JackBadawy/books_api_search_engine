import { useContext, useEffect } from "react";
import { SearchContext } from "../../Context/SearchContext";
import BookCard from "../../components/BookCard/BookCard";
import missingThumbnail from "../../img/missingThumbnail.png";

const BookList = () => {
  const { bookList, setBookList, bookListReady, setBookListReady } =
    useContext(SearchContext);

  useEffect(() => {
    const savedBookList = localStorage.getItem("bookList");
    if (savedBookList) {
      setBookList(JSON.parse(savedBookList));
      setBookListReady(true);
    }
  }, [setBookList, setBookListReady]);

  useEffect(() => {
    if (bookListReady) {
      localStorage.setItem("bookList", JSON.stringify(bookList));
    }
  }, [bookList, bookListReady]);

  return (
    <main className="search__card-container">
      {!bookListReady ? (
        <p>Loading...</p>
      ) : (
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
            publishedDate={
              book.volumeInfo
                ? book.volumeInfo.publishedDate
                : "Date not available"
            }
          />
        ))
      )}
    </main>
  );
};

export default BookList;
