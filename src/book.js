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
  if (bookTitle.includes('The')) {
    var pageCount = bookTitle.length * 20;
    return pageCount
  } else {
    pageCount = createTitle(bookTitle).length * 20;
    return pagecount;
  }
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
  book.pageCount = book.pageCount * 0.75;
    return book.pageCount;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
