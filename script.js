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

function drawRead(book)
{
    if(book.isRead)
    return 'style="background-color: green;"';
    else
    return 'style="background-color: red;"';
}

function drawBooks(library)
{
    for(let index = 0; index < library.length; index++)
    {
    let htmlTemplate = '<div class="singleBook">'
    + '<div class="bookNumber">Book #'+bookCounter+'</div>'
    + '<div class="bookContents">'
    + '<div class="bookTitle">Title: '+library[index].title+'</div>'
    + '<div class="bookAuthor">Author: '+library[index].author+'</div>'
    + '<div class="bookPages">Pages: '+library[index].pages+'</div>'
    + '<div class="bookRead" '+drawRead(library[index])+'>Read</div>'
    + '<div class="bookButtons">'
    + '<div class="removeBook">Remove Book</div>'
    + '<div class="changeRead">Change Read</div>'
    + '</div>'
    + '</div>'
    +'</div>'
    let booksContainer = document.querySelector('.booksContainer');
    booksContainer.innerHTML = booksContainer.innerHTML + htmlTemplate;
    }
}

let bookCounter = 0;
let myLibrary = [];
// addBookToLibrary(myLibrary, new Book('test','test',10,true));
// addBookToLibrary(myLibrary, new Book('test','test',10,false));
// addBookToLibrary(myLibrary, new Book('test','test',10,true));
// addBookToLibrary(myLibrary, new Book('test','test',10,false));
// drawBooks(myLibrary);