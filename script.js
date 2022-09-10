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
    drawBooks(myLibrary[bookCounter-1]);
}

function drawBooks(book)
{
    let htmlTemplate = '<div class="singleBook">'
    + '<div class="bookNumber">Book #'+bookCounter+'</div>'
    + '<div class="bookContents">'
    + '<div class="bookTitle">Title: '+book.title+'</div>'
    + '<div class="bookAuthor">Author: '+book.author+'</div>'
    + '<div class="bookPages">Pages: '+book.pages+'</div>'
    + '<div class="bookRead">Read: '+book.isRead+'</div>'
    + '</div>'
    +'</div>'
    let booksContainer = document.querySelector('.booksContainer');
    booksContainer.innerHTML = booksContainer.innerHTML + htmlTemplate;
}




let bookCounter = 0;
let myLibrary = [];
