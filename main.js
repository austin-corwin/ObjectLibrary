

const myLibrary = [];
const saveButton = document.querySelector('.modal-save');



function book(name,author,pages,read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.sayBook= function(){
        let announce = name + ' is a book by ' + author + ' with ' + pages + ' pages and I ' + read + ' read it.';
        console.log(announce);
    };
};

let wereNone = new book('And Then There Were None','Agatha Cristie',272,'Yes');
let theHobbit = new book('The Hobbit','J.R Tolkien',304,'No');
let the92 = new book('The 92','Agatha Cristie',272,'have');
let huckleberryFinn = new book('HuckleBerry Finn','Agatha Cristie',272,'have');

function addBookToLibrary(book){
    myLibrary.push(book);
   
};



// addBookToLibrary(theHobbit);
// addBookToLibrary(wereNone);
// addBookToLibrary(the92);
// addBookToLibrary(huckleberryFinn);


function populateBook(book){
    myLibrary.forEach(function (book) {
        let bookName = book.name;
        let bookAuthor = book.author;
        let bookPages = book.pages;
        let bookReadStatus = book.read;
    
        //create a div for the new book
    
        let newBookDiv = document.createElement('div');
        let bookRow = document.querySelector('.book-row');
        bookRow.appendChild(newBookDiv);
        newBookDiv.setAttribute('class','col-12 col-md-4 p-2 rounded border book')
    
        // create a div for the book name
        let newBookNameDiv = document.createElement('div');
        newBookDiv.appendChild(newBookNameDiv);
        newBookNameDiv.setAttribute('class','book-name');
        newBookNameDiv.textContent = `Name: ${bookName}`;
        
        //create a div for the book author
        let newBookAuthorDiv = document.createElement('div');
        newBookDiv.appendChild(newBookAuthorDiv);
        newBookAuthorDiv.setAttribute('class','book-author');
        newBookAuthorDiv.textContent = `Author: ${bookAuthor}`;
    
        //create a div for the book page number
        let newBookPagesDiv = document.createElement('div');
        newBookDiv.appendChild(newBookPagesDiv);
        newBookPagesDiv.setAttribute('class','book-pages');
        newBookPagesDiv.textContent = `Pages: ${bookPages}`;
        
        //create a div to show if you've read the book
        let newBookReadStatusDiv = document.createElement('div');
        newBookDiv.appendChild(newBookReadStatusDiv);
        newBookReadStatusDiv.setAttribute('class','book-pages');
        newBookReadStatusDiv.textContent = `Have you read it? ${bookReadStatus}`;

        
    
    
        console.log(bookName);
        console.log(bookAuthor);
        console.log(bookPages);
    
    });
}







console.log(myLibrary);

// The Modal Javascript //

let bookModal = document.getElementById('bookModal')
let myInput = document.getElementById('myInput')

bookModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

// End Modal Javascript //

function saveChanges(name,author,pages,read){
    let titleValue = document.querySelector('.title-input').value;
    let authorValue = document.querySelector('.author-input').value;
    let pagesValue = document.querySelector('.pages-input').value;
    let readValue = document.querySelector('.read-input').value;
    let newBookSubmission = new book(titleValue,authorValue,pagesValue,readValue);
   addBookToLibrary(newBookSubmission);
   console.log(myLibrary);
   console.log(titleValue);
   console.log(authorValue);
   console.log(pagesValue);
   console.log(readValue);

   populateBook(newBookSubmission);

    
}

saveButton.addEventListener('click', saveChanges);








//Loop through the array and display books to the page

// myLibrary.forEach(function (book) {
//     let bookName = book.name;
//     let bookAuthor = book.author;
//     let bookPages = book.pages;
//     let bookReadStatus = book.read;

//     //create a div for the new book

//     let newBookDiv = document.createElement('div');
//     let bookRow = document.querySelector('.book-row');
//     bookRow.appendChild(newBookDiv);
//     newBookDiv.setAttribute('class','col border book')

//     // create a div for the book name
//     let newBookNameDiv = document.createElement('div');
//     newBookDiv.appendChild(newBookNameDiv);
//     newBookNameDiv.setAttribute('class','book-name');
//     newBookNameDiv.textContent = `Name: ${bookName}`;
    
//     //create a div for the book author
//     let newBookAuthorDiv = document.createElement('div');
//     newBookDiv.appendChild(newBookAuthorDiv);
//     newBookAuthorDiv.setAttribute('class','book-author');
//     newBookAuthorDiv.textContent = `Author: ${bookAuthor}`;

//     //create a div for the book page number
//     let newBookPagesDiv = document.createElement('div');
//     newBookDiv.appendChild(newBookPagesDiv);
//     newBookPagesDiv.setAttribute('class','book-pages');
//     newBookPagesDiv.textContent = `Pages: ${bookPages}`;
    
//     //create a div to show if you've read the book
//     let newBookReadStatusDiv = document.createElement('div');
//     newBookDiv.appendChild(newBookReadStatusDiv);
//     newBookReadStatusDiv.setAttribute('class','book-pages');
//     newBookReadStatusDiv.textContent = `Have you read it? ${bookReadStatus}`;


//     console.log(bookName);
//     console.log(bookAuthor);
//     console.log(bookPages);

// });




// 2ND TRY IS BELOW //
//-----------------------------------------------------------------------------------------------------------

// let myLibrary = [];

// function book(name,author,pages,read){
//     this.name = name;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.sayBook= function(){
//         let announce = name + ' is a book by ' + author + ' with ' + pages + ' pages and I ' + read + ' read it.';
//         console.log(announce);
//     };
// };

// let wereNone = new book('And Then There Were None','Agatha Cristie',272,'Yes');
// let theHobbit = new book('The Hobbit','J.R Tolkien',304,'No');
// let the92 = new book('The 92','Agatha Cristie',272,'have');
// let huckleberryFinn = new book('HuckleBerry Finn','Agatha Cristie',272,'have');

// function addBookToLibrary(book){
//     myLibrary.forEach(function (book) {
//         let bookName = book.name;
//         let bookAuthor = book.author;
//         let bookPages = book.pages;
//         let bookReadStatus = book.read;
    
//         //create a div for the new book
    
//         let newBookDiv = document.createElement('div');
//         let bookRow = document.querySelector('.book-row');
//         bookRow.appendChild(newBookDiv);
//         newBookDiv.setAttribute('class','col border book')
    
//         // create a div for the book name
//         let newBookNameDiv = document.createElement('div');
//         newBookDiv.appendChild(newBookNameDiv);
//         newBookNameDiv.setAttribute('class','book-name');
//         newBookNameDiv.textContent = `Name: ${bookName}`;
        
//         //create a div for the book author
//         let newBookAuthorDiv = document.createElement('div');
//         newBookDiv.appendChild(newBookAuthorDiv);
//         newBookAuthorDiv.setAttribute('class','book-author');
//         newBookAuthorDiv.textContent = `Author: ${bookAuthor}`;
    
//         //create a div for the book page number
//         let newBookPagesDiv = document.createElement('div');
//         newBookDiv.appendChild(newBookPagesDiv);
//         newBookPagesDiv.setAttribute('class','book-pages');
//         newBookPagesDiv.textContent = `Pages: ${bookPages}`;
        
//         //create a div to show if you've read the book
//         let newBookReadStatusDiv = document.createElement('div');
//         newBookDiv.appendChild(newBookReadStatusDiv);
//         newBookReadStatusDiv.setAttribute('class','book-pages');
//         newBookReadStatusDiv.textContent = `Have you read it? ${bookReadStatus}`;
    
    
//         console.log(bookName);
//         console.log(bookAuthor);
//         console.log(bookPages);
    
//     });
//     myLibrary.push(book);
// };

// // addBookToLibrary(wereNone);
// addBookToLibrary(theHobbit);

// console.log(myLibrary);


//Loop through the array and insert books to the library

// myLibrary.forEach(function (book) {
//     let bookName = book.name;
//     let bookAuthor = book.author;
//     let bookPages = book.pages;
//     let bookReadStatus = book.read;

//     //create a div for the new book

//     let newBookDiv = document.createElement('div');
//     let bookRow = document.querySelector('.book-row');
//     bookRow.appendChild(newBookDiv);
//     newBookDiv.setAttribute('class','col border book')

//     // create a div for the book name
//     let newBookNameDiv = document.createElement('div');
//     newBookDiv.appendChild(newBookNameDiv);
//     newBookNameDiv.setAttribute('class','book-name');
//     newBookNameDiv.textContent = `Name: ${bookName}`;
    
//     //create a div for the book author
//     let newBookAuthorDiv = document.createElement('div');
//     newBookDiv.appendChild(newBookAuthorDiv);
//     newBookAuthorDiv.setAttribute('class','book-author');
//     newBookAuthorDiv.textContent = `Author: ${bookAuthor}`;

//     //create a div for the book page number
//     let newBookPagesDiv = document.createElement('div');
//     newBookDiv.appendChild(newBookPagesDiv);
//     newBookPagesDiv.setAttribute('class','book-pages');
//     newBookPagesDiv.textContent = `Pages: ${bookPages}`;
    
//     //create a div to show if you've read the book
//     let newBookReadStatusDiv = document.createElement('div');
//     newBookDiv.appendChild(newBookReadStatusDiv);
//     newBookReadStatusDiv.setAttribute('class','book-pages');
//     newBookReadStatusDiv.textContent = `Have you read it? ${bookReadStatus}`;


//     console.log(bookName);
//     console.log(bookAuthor);
//     console.log(bookPages);

// });




