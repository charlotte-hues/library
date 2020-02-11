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

addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 210, 'Read');
addBookToLibrary('Animal Farm', 'George Orwell', 180, 'Read');


const newBookForm = (() => {
    const addNewButton = document.querySelector('#add-new-book');
    const bookForm = document.querySelector('.form-container');
    const submitButton = document.querySelector('.form-container .submit-button');
    const close = document.querySelector('.form-container .close-button');
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
    bookForm.style.display = 'none';

    const toggleVisibility = () => {
        bookForm.style.display = bookForm.style.display === 'none' ? '' : 'none';
    }

    const submitForm = () => {
        addBookToLibrary(title.value, author.value, pages.value, read.value)
        toggleVisibility();
    }
    
    addNewButton.addEventListener('click', toggleVisibility);
    close.addEventListener('click', toggleVisibility);

    submitButton.addEventListener('click', submitForm);
    
})();