// Book
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};

// UI
function UI() {};

UI.prototype.AddBookToList = function(book) {
  const list = document.getElementById("book_list");
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
};

UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const form = document.querySelector('#book_form');
  container.insertBefore(div, form);

  setTimeout(() => {
    div.remove();     
  }, 3000);
};

UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}



// Event Listener for add book
document.getElementById('book_form').addEventListener("submit", function(e) {
  
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Instantiate book

  const book = new Book(title, author, isbn);
  const ui = new UI();
  
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert('Please fill all fields', 'error');
  } else {
    ui.AddBookToList(book);
    ui.showAlert("Book Added!", "success");
    ui.clearFields();
  }
  e.preventDefault();
});

// Event Listener for delete book
document.getElementById("book_list").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book Removed!', 'success')
  e.preventDefault();  
});