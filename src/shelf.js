function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice([i], 1);
    }
  }
}

function listTitles(shelf) {
  var allTitles = '';
  for (var i = 0; i < shelf.length; i++) {
    if (i < (shelf.length - 1)) {
      allTitles += shelf[i].title + ', ';
    } else {
      allTitles += shelf[i].title;
    }
  }
  return allTitles;
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
