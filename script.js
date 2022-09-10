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
    booksContainer.innerHTML ='';
    drawBooks(myLibrary);
}

function removeBookFromLibrary(bookIndex)
{
    myLibrary.splice(bookIndex,1);
    booksContainer.innerHTML ='';
    drawBooks(myLibrary);
}

function changeReadStatus(bookIndex)
{
    myLibrary[bookIndex].isRead = !myLibrary[bookIndex].isRead;
    booksContainer.innerHTML ='';
    drawBooks(myLibrary);
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
    + '<div class="bookNumber">Book #'+(index+1)+'</div>'
    + '<div class="bookContents">'
    + '<div class="bookTitle">Title: '+library[index].title+'</div>'
    + '<div class="bookAuthor">Author: '+library[index].author+'</div>'
    + '<div class="bookPages">Pages: '+library[index].pages+'</div>'
    + '<div class="bookRead" '+drawRead(library[index])+'>Read</div>'
    + '<div class="bookButtons">'
    + '<div class="removeBook" '+'id="1"'+'>Remove Book</div>'
    + '<div class="changeRead">Change Read</div>'
    + '</div>'
    + '</div>'
    +'</div>'
    booksContainer.innerHTML = booksContainer.innerHTML + htmlTemplate;
    }
    removeBook = document.querySelectorAll('.removeBook');
    changeRead = document.querySelectorAll('.changeRead');
    for(let index = 0; index < removeBook.length; index++)
    {
        removeBook[index].addEventListener(
            'click',
            () =>
            {
                removeBookFromLibrary(index);
            }
        );
    }
    for(let index = 0; index < changeRead.length; index++)
    {
        changeRead[index].addEventListener(
            'click',
            () =>
            {
                changeReadStatus(index);
            }
        );
    }
}
let removeBook = document.querySelectorAll('.removeBook');
let changeRead = document.querySelectorAll('.changeRead');
let booksContainer = document.querySelector('.booksContainer');
let myLibrary = [];

const submitButt = document.querySelector('.submitButt');

let book_title = document.querySelector('#book_title');
let book_author = document.querySelector('#book_author');
let book_pages = document.querySelector('#book_pages');
let readSwitch = document.querySelector('#switch');

submitButt.addEventListener(
    'click', function()
    {
        let bool;
        if(readSwitch.checked)
        bool = true;
        else
        bool = false;
        addBookToLibrary(myLibrary,new Book(book_title.value,book_author.value, book_pages.value,bool))
    }
);