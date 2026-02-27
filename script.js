const myLibrary = [];
const listContainer = document.getElementById('item-list');
const bookForm = document.querySelector("#book-form");
const myDialog = document.querySelector("#my-dialog");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const closeBtn = document.querySelector("#close-btn");



function Book(title, author) {
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author) {
    let myBook = new Book(title, author);
    myLibrary.push(myBook);
}

function loopThroughLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        if (!document.getElementById(book.id)) {
            const listItem = document.createElement('li');
            const deleteButton = document.createElement("button");
            listItem.setAttribute('id', book.id);
            listItem.textContent = `${book.title} by ${book.author}`;
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                myLibrary.splice(i, 1);
                listItem.remove();
            })
            listContainer.appendChild(listItem);
            listItem.appendChild(deleteButton);
        }
    }
}


bookForm.addEventListener("submit", (e) => {
    // 1. Prevent the page from refreshing
    e.preventDefault();

    // 2. Create the new book object (assuming you have a Book constructor)
    const newBook = new Book(titleInput.value, authorInput.value);

    // 3. Add it to your array and update the UI
    myLibrary.push(newBook);
    loopThroughLibrary();

    // 4. Reset the form and close the dialog
    bookForm.reset();
    myDialog.close();
});

closeBtn.addEventListener("click", (e) => {
    bookForm.reset();
    myDialog.close();
});

deleteButton.addEventListener("click", (e) => {
    myLibrary[i]
})