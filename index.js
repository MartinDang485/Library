const myLibrary = [];

//Constructor for book object
function book(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
};

//Add book to array
const addBookToLibrary = (Title, Author, Page) => {
    let newBook = new book(Title, Author, Page);
    myLibrary.push(newBook);
    displayBooks();
};

//displays books
const displayBooks = () => {
    let display = document.getElementById('display');
    display.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        //Creates new element to display book
        let bookElement = document.createElement('div');
        bookElement.textContent = `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author}, Pages: ${myLibrary[i].page}`;
        display.appendChild(bookElement);
        bookElement.setAttribute("id", "section");

        //Delete button
        let bookDelete = document.createElement('button');
        bookElement.appendChild(bookDelete);
        bookDelete.setAttribute('id', "delete");
        bookDelete.innerText = 'Delete';
        bookDelete.addEventListener('click', () => {
            myLibrary.splice(myLibrary[i],1);
            display.removeChild(bookElement);
            display.removeChild(bookDelete);
        });
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


    