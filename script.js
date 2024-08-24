function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, already read is ${isRead}`;
    }
}

theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
theHobbit.info();