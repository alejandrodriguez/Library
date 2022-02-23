let myLibrary = [];

function Book(title, author, numOfPages, readBoolean) {
    this.title = title;
    this.author = author;
    this.pages = numOfPages;
    this.read = readBoolean;
    this.info = function() {
        const haveRead = readBoolean ? 'read' : 'not read yet'
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + haveRead;
    }
}

const bookList = document.querySelector('.booklist');
const addBtn = document.querySelector('.addbtn');
const form = document.querySelector('form');

addBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(e) {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    if (newBook.title && newBook.author && newBook.pages) {
    myLibrary.push(newBook);
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;
    modal.style.display = 'none';
    }
}

const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.openbtn');
const closeBtn = document.querySelector('.closebtn');

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('mousedown', closeModal)

function openModal() {
    modal.style.display = 'block';
}

function closeModal(e) {
    if (e.target === closeBtn || e.target === modal) {
    modal.style.display = 'none';
    }
}