function createLibrary(name) {
  var library = {
      name: name,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: [],
      },
  }
  return library;
}

function addBook(library, title) {
  if (title.genre === 'fantasy') {
    library.shelves.fantasy.push(title);
  } else if (title.genre === 'fiction') {
    library.shelves.fiction.push(title);
  } else {
    library.shelves.nonFiction.push(title);
  }
}

function checkoutBook(library, title, genre) {
  console.table(library.shelves.fiction)
  if (genre === 'fiction') {
    for(var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title === title) {
        //unshelfBook.....
      }
    }
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
