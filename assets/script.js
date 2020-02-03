const bookCard = document.querySelector('article');
const bookGrid = document.querySelector('#book-grid');
const newBookButton = document.querySelector('#add-new-book');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title}, ${author}, ${pages}, ${read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderLibrary(newBook);
}

function renderLibrary(book) {
    let clone = bookCard.cloneNode(true);
    clone.setAttribute('data-index', myLibrary.length)
    clone.querySelector('h3').innerHTML = book.title;
    clone.querySelector('h5').innerHTML = book.author;
    bookGrid.appendChild(clone);
}

addBookToLibrary('Catch-22', 'Joseph Heller', 340, 'Read');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 210, 'Read');
addBookToLibrary('Animal Farm', 'George Orwell', 180, 'Read');


const displayForm = (() => {
    console.log('sfd');
    const addNewButton = document.querySelector('#add-new-book');
    const bookForm = document.querySelector('.form-container');
    const close = document.querySelector('.form-container .close-button');
    bookForm.style.display = 'none';

    const toggleVisibility = () => {
        bookForm.style.display = bookForm.style.display === 'none' ? '' : 'none';
    }

    addNewButton.addEventListener('click', toggleVisibility);
    close.addEventListener('click', toggleVisibility);
})();