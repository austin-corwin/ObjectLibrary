// console.log(localStorage.getItem('testObject'));

function book(name = "New",author="New",pages="0",read="No"){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read; 
    this.sayName= function(){
        let announce = name + ' is a book by ' + author + ' with ' + pages + ' pages and I ' + read + ' read it.';
        console.log(announce);
    };
};



let myLibrary = [];
let pulledLibrary = localStorage.getItem('testObject')
// console.log(JSON.parse(pulledLibrary));
myLibrary = JSON.parse(pulledLibrary) || [];

for (i=0; i<myLibrary.length; i++){
    renderBookCard(myLibrary[i]);
}

console.log(myLibrary);




const saveButton = document.querySelector('.modal-save');




// let theHobbit = new book('The Hobbit','J.R Tolkien',304,'No');
// let the92 = new book('The 92','Agatha Cristie',272,'have');
// let huckleberryFinn = new book('HuckleBerry Finn','Agatha Cristie',272,'have');

  
function addBookToLibrary(book){
    myLibrary.push(book);
    renderBookCard(book);
    saveLocal();
};


function removeBook(book){
    let bookIndex = myLibrary.indexOf(book);
    // let bookIndexEnd = bookIndex + 1;
    // let realBookIndex = bookIndex + 1;
    console.log(bookIndex);
    // console.log(bookIndexEnd);
    myLibrary.splice(bookIndex,bookIndex);
}






function renderBookCard(book){

         let bookName = book.name;
        let bookAuthor = book.author;
        let bookPages = book.pages;
        let bookReadStatus = book.read;
    
        //create a div for the new book
    
        let newBookDiv = document.createElement('div');
        let bookRow = document.querySelector('.book-row');
        bookRow.appendChild(newBookDiv);
        newBookDiv.setAttribute('class','col-12 col-md-4 p-4 mb-3 mb-sm-0 rounded border book')

        // for (i=0; i<myLibrary.length; i++){
        // newBookDiv.setAttribute('data-index', i);
        // }

        //create a row div inside the book div
        let newBookDivRow = document.createElement('div');
        newBookDiv.appendChild(newBookDivRow);
        newBookDivRow.setAttribute('class','row');

        //create a col div inside the row div
        let newBookDivCol = document.createElement('div');
        newBookDivRow.appendChild(newBookDivCol);
        newBookDivCol.setAttribute('class','col m-5');


    
        // create a div for the book name
        let newBookNameDiv = document.createElement('div');
        newBookDivCol.appendChild(newBookNameDiv);
        newBookNameDiv.setAttribute('class','book-name my-1 border-bottom');
        newBookNameDiv.textContent = `${bookName}`;
        
        //create a div for the book author
        let newBookAuthorDiv = document.createElement('div');
        newBookDivCol.appendChild(newBookAuthorDiv);
        newBookAuthorDiv.setAttribute('class','book-author my-1');
        newBookAuthorDiv.textContent = `Author: ${bookAuthor}`;
    
        //create a div for the book page number
        let newBookPagesDiv = document.createElement('div');
        newBookDivCol.appendChild(newBookPagesDiv);
        newBookPagesDiv.setAttribute('class','book-pages my-1');
        newBookPagesDiv.textContent = `Pages: ${bookPages}`;
        
        //create a div to show if you've read the book
        let newBookReadStatusDiv = document.createElement('div');
        newBookDivCol.appendChild(newBookReadStatusDiv);
        newBookReadStatusDiv.setAttribute('class','book-read my-1');
        newBookReadStatusDiv.textContent = `Have you read it? ${bookReadStatus}`;

        // let readButton = document.createElement('button');
        // newBookDivCol.appendChild(readButton);
        // readButton.setAttribute('class','btn btn-secondary btn-read');
        // readButton.textContent = bookReadStatus;

        let removeButton = document.createElement('button');
        newBookDivCol.appendChild(removeButton);
        removeButton.setAttribute('class','btn btn-danger');
        removeButton.textContent = "Remove";

        removeButton.addEventListener('click',()=>{
            bookRow.removeChild(newBookDiv);
            removeBook(book);
            saveLocal();
            console.log(myLibrary);

            
        })
        
        
    
        console.log(bookName);
        console.log(bookAuthor);
        console.log(bookPages);
        console.log(bookReadStatus);

        // window.localStorage.setItem('testObject',myLibrary);

        
};





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
    // saveLocal();
    // console.log(myLibrary);
    // console.log(titleValue);
    // console.log(authorValue);
    // console.log(pagesValue);
    // console.log(readValue);

    
}

saveButton.addEventListener('click', saveChanges);


// function removeBook(){

//     myLibrary.pop();
    
// }



function saveLocal(){

    localStorage.setItem('testObject',JSON.stringify(myLibrary));
}

// function clearLocal(){
//     localStorage.clear();
// }














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




