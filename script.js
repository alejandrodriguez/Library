let myLibrary = [];

function Book(title, author, numOfPages, readBoolean) {
    this.title = title;
    this.author = author;
    this.pages = numOfPages;
    this.read = readBoolean;
    this.readText = readBoolean ? 'Read' : 'Not Read Yet';
    this.info = function() {
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.readText;
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
    if (title && author && pages) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    let newCard = document.createElement('div'); //does this have to be a global variable to be removed later?
    newCard.classList.add('card')
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = newBook.title;
    newCard.appendChild(titleDiv);
    let authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    authorDiv.textContent = newBook.author;
    newCard.appendChild(authorDiv);
    let pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pages');
    pagesDiv.textContent = newBook.pages;
    newCard.appendChild(pagesDiv);
    let readDiv = document.createElement('div');
    readDiv.classList.add('read');
    readDiv.textContent = newBook.readText;
    newCard.appendChild(readDiv);
    bookList.appendChild(newCard);
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