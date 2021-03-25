function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
    shelf.unshift(book);
    return shelf;
  } else {
    return shelf;
  }
}

function unshelfBook(book, shelf) {
  if (shelf.includes(book.title)) {
    shelf.slice([i], 1);
    return shelf;
  } else {
    return shelf;
  }
}



module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
