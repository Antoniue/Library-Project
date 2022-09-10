function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(myLibrary,book)
{
    myLibrary.push(book);
    bookCounter++;
}



let bookCounter = 0;
let myLibrary = [];
addBookToLibrary(myLibrary, new Book('test','test', 105, true))
console.log(myLibrary);