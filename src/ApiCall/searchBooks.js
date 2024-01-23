const getBookList = async (searchTerm) => {
  const encodedSearchTerm = encodeURIComponent(searchTerm);
  console.log(encodedSearchTerm);

  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" + encodedSearchTerm
  );

  const data = await response.json();
  console.log("data", data);

  return data;
};

export default getBookList;
