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
  for (var i = 0; i < library.shelves[genre].length; i++) {
    console.log('yep');
    if (library.shelves[genre][i].title === title) {
      library.shelves[genre].splice([i], 1);
      return `You have now checked out ${title} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
