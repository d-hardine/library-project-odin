let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    /*this.info = function () {
        return `${title} by ${author}, ${pages} pages, already read is ${isRead}`;
    }*/
}

let libraryBook = document.querySelector('.library');

function renderBookToLibrary() {
    libraryBook.textContent = '';
    for(let i=0;i < myLibrary.length; i++) {
        let book = myLibrary[i];
        //create book container
        let bookCollection = document.createElement('div');
        bookCollection.classList.add('book-collection');
        libraryBook.appendChild(bookCollection);

        //create book header
        let bookCollectionHeader = document.createElement('div');
        bookCollectionHeader.classList.add('book-collection-header');
        bookCollection.appendChild(bookCollectionHeader);

        //fill the book header
        let title = document.createElement('div');
        title.classList.add('title');
        bookCollectionHeader.appendChild(title);
        title.textContent = 'Title: '

        let bookCollectionTitle = document.createElement('span');
        bookCollectionTitle.classList.add('title');
        bookCollectionTitle.textContent = book.title;
        bookCollectionHeader.appendChild(bookCollectionTitle);

        //create book body
        let bookCollectionBody = document.createElement('div');
        bookCollectionBody.classList.add('book-collection-Body');
        bookCollection.appendChild(bookCollectionBody);

        //fill the book body
        let author = document.createElement('div');
        author.classList.add('author');
        bookCollectionBody.appendChild(author);
        author.textContent = 'Author: '

        let bookCollectionAuthor = document.createElement('span');
        bookCollectionAuthor.classList.add('author');
        bookCollectionAuthor.textContent = book.author;
        bookCollectionBody.appendChild(bookCollectionAuthor);

        let pages = document.createElement('div');
        pages.classList.add('pages');
        bookCollectionBody.appendChild(pages);
        pages.textContent = 'Pages: '

        let bookCollectionPages = document.createElement('span');
        bookCollectionPages.classList.add('pages');
        bookCollectionPages.textContent = book.pages;
        bookCollectionBody.appendChild(bookCollectionPages);

        let read = document.createElement('div');
        read.classList.add('read');
        bookCollectionBody.appendChild(read);
        read.textContent = 'Read: '

        let bookCollectionRead = document.createElement('div');
        bookCollectionRead.classList.add('read');
        bookCollectionRead.textContent = book.isRead;
        bookCollectionBody.appendChild(bookCollectionRead);
        
        //create book button container
        let bookBtn = document.createElement('button');
        bookBtn.classList.add('book-btn-container');
        bookCollection.appendChild(bookBtn);

        //create the book buttons
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete Book';
        deleteButton.onclick = function() {
            deleteBook(i)
        };
        bookBtn.appendChild(deleteButton);

        let isReadButton = document.createElement('button');
        isReadButton.classList.add('is-read-button');
        isReadButton.textContent = 'Book Done Read?';
        isReadButton.onclick = function() {
            isReadBook(i);
        }
        bookBtn.appendChild(isReadButton);
    }
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    renderBookToLibrary();
}

function isReadBook(index) {
    if(myLibrary[index].isRead === true) {
        console.log(myLibrary[index].isRead)
        myLibrary[index].isRead = false;
        console.log(myLibrary[index].isRead)
        renderBookToLibrary();
        }
    else if(myLibrary[index].isRead === false) {
        console.log(myLibrary[index].isRead)
        myLibrary[index].isRead = true;
        console.log(myLibrary[index].isRead)
        renderBookToLibrary();
    }
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let isRead = document.querySelector('#isRead').checked;
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    renderBookToLibrary();
}

let newBookBtn = document.querySelector('.new-book-btn');
let newBookForm = document.querySelector('.new-book-form');
let hideFormButton = document.querySelector('.hide-form-btn');

newBookBtn.addEventListener('click', function() {
    newBookForm.style.display = 'block';
});

hideFormButton.addEventListener('click', function() {
    newBookForm.style.display = 'none';
})

newBookForm.addEventListener('submit', function() {
    event.preventDefault();
    addBookToLibrary();
})