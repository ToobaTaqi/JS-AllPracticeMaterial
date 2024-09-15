// +++++ Object Creation and Property Access +++++

// Create an object `book` with properties `title`, `author`, and `year`.
const book = {
  title: "abc",
  author: "xyz",
  year: 2000,
};

// Access and log the `title` property of the `book` object.
console.log(`Title of Book is ${book.title}`);

// Add a new property `genre` to the `book` object.
book.genre="fairytale"

// Update the `year` property to the current year.
book.year=2024

//  Delete the `author` property from the `book` object.
delete book.author

console.log(book)