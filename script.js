let myLibrary = [];

const bookList = document.querySelector('.booklist');

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
  
function addBookToLibrary(book) {
    myLibrary.push(book);
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