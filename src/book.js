function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return newCharacter;
}

function saveReview(newReview, reviews) {
  if (reviews.includes(newReview)) {
    return reviews;
  } else {
    reviews.push(newReview);
    return reviews;
  }
}

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.trim().length * 20;
  return pageCount
}

function writeBook(bookTitle, character, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: character,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
  return book;
}

function editBook(book) {
  book.pageCount = (book.pageCount / 4) * 3;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
