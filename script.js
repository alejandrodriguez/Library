let myLibrary = [];

class Book {
    constructor(title, author, numOfPages, readBoolean) {
        this.title = title;
        this.author = author;
        this.pages = numOfPages;
        this.read = readBoolean;
        this.readText = readBoolean ? 'You\'ve read this book!' : 'Not Read Yet';
    }
    info() {
        let beenRead = this.read ? 'Read' : 'Not Read Yet';
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + beenRead;
    }
    changeRead() {
        this.read = !this.read;
        this.readText = this.read ? 'You\'ve read this book!' : 'Not Read Yet';
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
    let newCard = document.createElement('div'); // Book Card
    newCard.classList.add('card')
    let deleteCardBtn = document.createElement('button'); // Delete Button
    deleteCardBtn.classList.add('deletecardbtn');
    deleteCardBtn.textContent = 'X';
    deleteCardBtn.addEventListener('click', deleteBookFromLibrary);
    newCard.appendChild(deleteCardBtn);
    let titleDiv = document.createElement('div'); // Title
    titleDiv.classList.add('title');
    titleDiv.textContent = newBook.title;
    newCard.appendChild(titleDiv);
    let authorDiv = document.createElement('div'); //Author
    authorDiv.classList.add('author');
    authorDiv.textContent = newBook.author;
    newCard.appendChild(authorDiv);
    let pagesDiv = document.createElement('div');// Pages
    pagesDiv.classList.add('pages');
    pagesDiv.textContent = `${newBook.pages} pages`;
    newCard.appendChild(pagesDiv);
    let readDiv = document.createElement('div'); // Read Div
    readDiv.classList.add('read');
    readDiv.textContent = newBook.readText;
    let readBtn = document.createElement('button'); // Read Button
    readBtn.classList.add('readbtn');
    readBtn.textContent = newBook.read ? 'Mark as Unread' : 'Mark as Read';
    readBtn.addEventListener('click', changeReadStatus);
    readDiv.appendChild(readBtn);
    newCard.appendChild(readDiv);
    bookList.appendChild(newCard);
    assignData();
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

function assignData() {
    let bookCards = Array.from(document.querySelectorAll('.card'));
    let deleteCardBtns = Array.from(document.querySelectorAll('.deletecardbtn'));
    let readBtns = Array.from(document.querySelectorAll('.readbtn'))
    for (let i = 0; i < myLibrary.length; i++) {
        bookCards[i].setAttribute('data-myLibrary-index', [i]);
        deleteCardBtns[i].setAttribute('data-myLibrary-index', [i])
        readBtns[i].setAttribute('data-myLibrary-index', [i])
    }
}

function deleteBookFromLibrary(e) {
    let x = e.target.getAttribute('data-myLibrary-index'); // card and book object to be deleted
    bookList.removeChild(bookList.children[x]);
    myLibrary.splice(x, 1);
    assignData();
}

function changeReadStatus(e) {
    let x = e.target.getAttribute('data-myLibrary-index');
    let parentDiv = e.target.parentElement;
    myLibrary[x].changeRead();
    parentDiv.firstChild.nodeValue = myLibrary[x].readText;
    e.target.textContent = myLibrary[x].read ? 'Mark as Unread' : 'Mark as Read';
}