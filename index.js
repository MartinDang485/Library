const myLibrary = [];

function book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
};

const addBookToLibrary = (Title, Author, Page) => {
    let newBook = new book(Title, Author, Page);
    myLibrary.push(newBook);
    displayBooks();
};

const displayBooks = () => {
    let display = document.getElementById('display');
    display.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        let bookElement = document.createElement('div');
        bookElement.textContent = `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author}, Pages: ${myLibrary[i].page}`;
        display.appendChild(bookElement);
    };
};

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
    let Title = document.getElementById('title').value;
    let Author = document.getElementById('author').value;
    let Page = document.getElementById('page').value;
    
    
    addBookToLibrary(Title, Author, Page);
    
    //Must clear value before next entry, or else it will just delete 
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';
});


    