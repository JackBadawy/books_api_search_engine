//write api call here
//"https://www.googleapis.com/books/v1/volumes?q=" //add searchterm to end

//gpt solution
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

/* const getBookList = async (searchTerm) => {
  //add an if statment to check if searchTerm contains whitespaces
  let syntaxSearchTerm;
  if (searchTerm.indexOf(" ") >= 0) {
    syntaxSearchTerm = `{${searchTerm}}`;
  } else {
    syntaxSearchTerm = searchTerm;
  }
  console.log(syntaxSearchTerm);
  const response = fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" + syntaxSearchTerm
  );
  
  let bookList;
  const data = (await response).json();

  
  console.log("data", data);
  return data;
};

export default getBookList; */

//"https://www.googleapis.com/books/v1/volumes?q=" + `{${searchTerm}}` this is what url shouold be

//write api call here
//"https://www.googleapis.com/books/v1/volumes?q=" //add searchterm to end

// const getBookList = async (searchTerm) => {
//   //add an if statment to check if searchTerm contains whitespaces
//   let syntaxSearchTerm;
//   if (searchTerm.indexOf(" ") >= 0) {
//     syntaxSearchTerm = `{${searchTerm}}`;
//   } else {
//     syntaxSearchTerm = searchTerm;
//   }
//   console.log(syntaxSearchTerm);
//   const response = fetch(
//     "https://www.googleapis.com/books/v1/volumes?q=" + syntaxSearchTerm
//   );
//   /* const data = await response.json(); */
//   /* console.log(response); */
//   let bookList;
//   const data = (await response).json();

//   /* .then((results) => {
//     console.log("results", results);
//     bookList = results.items;
//     console.log("bookList", bookList); */
//   /* return bookList; */
//   //   });
//   console.log("data", data);
//   return data;
// };

// export default getBookList;
