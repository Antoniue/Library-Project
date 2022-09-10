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
}

function removeBookFromLibrary(bookIndex)
{
    myLibrary.splice(bookIndex,1);
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
}

let booksContainer = document.querySelector('.booksContainer');
let myLibrary = [];
addBookToLibrary(myLibrary, new Book('test','test',10,true));
addBookToLibrary(myLibrary, new Book('test','test',10,false));
addBookToLibrary(myLibrary, new Book('test','test',10,true));
addBookToLibrary(myLibrary, new Book('test','test',10,false));
drawBooks(myLibrary);

const removeBook = document.querySelectorAll('.removeBook');
const changeRead = document.querySelectorAll('.changeRead');
for(let index = 0; index < removeBook.length; index++)
{
    removeBook[index].addEventListener(
        'click',
        function()
        {
            removeBookFromLibrary(index);
        }
    );
}