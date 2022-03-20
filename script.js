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
    createDiv.classList.add('bookClasses');
    const libraryBook = document.getElementById('libraryBook')
    for (let i = 0; i <= myLibrary.length; i++) {
        libraryBook.appendChild(createDiv);
        const num = i;
        createDiv.setAttribute("id", `bookClass${num}`);
        if (isRead.checked == true) {
            document.getElementById(`bookClass${num}`).innerHTML = `<h4>${myLibrary[i].title}</h4> <p>${myLibrary[i].author}<p> <p>This book is <b>${myLibrary[i].pages}</b> pages</p> <p>Read: ${myLibrary[i].read}</p> <button id="readBtn" onclick="readStatus(${i})">Read</button><button id="delBtn" onclick="return this.parentNode.remove();"><i class="fa fa-times" aria-hidden="true"></i></button>`;
            const deleteBtn = document.getElementById('delBtn');
            deleteBtn.setAttribute("id", `delBtn${num}`)
        } else if (isRead.checked == false) {
            document.getElementById(`bookClass${num}`).innerHTML = `<h4>${myLibrary[i].title}</h4> <p>${myLibrary[i].author}<p> <p>This book is <b>${myLibrary[i].pages}</b> pages</p> <p>Read: ${myLibrary[i].read}</p> <button id="readBtn" onclick="readStatus(${i})">Read</button><button id="delBtn" onclick="return this.parentNode.remove();""><i class="fa fa-times" aria-hidden="true"></i></button>`;
            const deleteBtn = document.getElementById('delBtn');
            deleteBtn.setAttribute("id", `delBtn${num}`)
        }
    }
}

displayBooks(myLibrary);

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

function readStatus(i) {
    if (myLibrary[i].read) {
        myLibrary[i].read = false;
    } else {
        myLibrary[i].read = true;
    }
    displayBooks(myLibrary);
}