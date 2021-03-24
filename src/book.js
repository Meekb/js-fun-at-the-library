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
  var pageCount = bookTitle.length * 20;
  return pageCount;
}

function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  console.log(book);
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
