// Function that takes user input and stores new book objects into an array
let myLibrary = []; // Set library to empty array

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary () {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;
    const libraryBook = new Book(title, author, pages, isRead);
    myLibrary.push(libraryBook);
    console.log(myLibrary);
    displayBooks(myLibrary);
}

function displayBooks (myLibrary) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('bookClass');
    const libraryBook = document.getElementById('libraryBook')
    for (let i = 0; i <= myLibrary.length; i++) {
        libraryBook.appendChild(createDiv);
        createDiv.setAttribute("id", `bookClass${i}`);
        if (isRead.checked == true) {
            document.getElementById(`bookClass${i}`).innerHTML = `<h4>${title.value}</h4> <p>${author.value}<p> <p>This book is <b>${pages.value}</b> pages</p> <p>This book has been read</p>`;
        } else if (isRead.checked == false) {
            document.getElementById(`bookClass${i}`).innerHTML = `<h4>${title.value}</h4> <p>${author.value}<p> <p>This book is <b>${pages.value}</b> pages</p> <p>This book has <b>not</b> been read</p>`;
        }
    }
}

function toggleAddBook () {
    const btn = document.getElementById('addButton');
    let x = document.getElementById('addBookDiv')
    const blurBooks = document.getElementById('libraryBook');
    const blurLogin = document.getElementById('login');
    btn.onclick = function () {
        if (x.style.display === 'none') {
            x.style.display = 'block';
            blurBooks.classList.add('blur');
            blurLogin.classList.add('blur');
        } else {
            x.style.display = 'none';
            blurBooks.classList.remove('blur');
            blurLogin.classList.remove('blur');
        }
    }
}