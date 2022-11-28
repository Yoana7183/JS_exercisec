class Book {
    constructor(id, ISBN, title, author, publishedYear, price) {
        this.id = id
        this.ISBN = ISBN
        this.title = title
        this.author = author
        this.publishedYear = publishedYear
        this.price = price
    }
}
class User {
    constructor(name) {
        this.name = name
        this.listOfBooks = []
        this.borrowedBooks = []
    }
    //add books in this.listOfBooks[] / personal list/ doesnt depend on borrowedBooks[]//
    addBooksInmyListOfBooks(book) {
        this.listOfBooks.push(book)
    }
    // show the customer name/ this.listOfBooks[].length and display them//
    getMyListOfBooks() {
        console.log(`Hallo, I am ${this.name} and this is my list of books wich contains ${this.listOfBooks.length} books :`);
        console.log(this.listOfBooks);
    }
    //show show the customer name/ this.borrowedBooks[].length and display them//
    getMyCurrentBorrowedBooksLis() {
        console.log(`Hallo, I am ${this.name} and this is my list with BORROWED books wich contains ${this.borrowedBooks.length} books :`);
        console.log(this.borrowedBooks);
    }
    // check if this book is contain in this.listOfBooks[] the func return true = contains / false = doesnt contain
    checkIfTheBookIsAlreadyInMyList(bookForCheck) {
        let currenBookinTheList;
        let isTheListContainTheBook = false
        for (let i = 0; i < this.listOfBooks.length; i++) {
            currenBookinTheList = this.listOfBooks[i]
            if (currenBookinTheList.id === bookForCheck.id) {
                console.log(`I have already read this book. I wanted another one.`);
                isTheListContainTheBook = true
            }
        }
        return isTheListContainTheBook
    }
    // check if this book is contain in this.borrowedBooks[] the func return true = contains / false = doesnt contain
    checkIfThatBookIsInMyBorrowedList(bookForCheck) {
        let currenBook;
        let isTheListContainTheBook = false
        for (let i = 0; i < this.borrowedBooks.length; i++) {
            currenBook = this.borrowedBooks[i]
            if (currenBook.id === bookForCheck.id) {
                console.log(`I have already read this book, wich it is in my borrowed list, id: ${currenBook.id} so I return it to the Libraryan.`);
                isTheListContainTheBook = true
            }
        }
        return isTheListContainTheBook
    }
    // select random book
    askTheLibrarianForABook(books) {
        let allBooks = books
        let wantedBook = allBooks[Math.floor(Math.random() * allBooks.length)]
        return wantedBook
    }
    // heping function that serves to keep track of the books that are logged in and which are not logged in this.borrowedBooks[]
    ifINoLongerOwnOrHaveReadThisBook(bookToBorrow) {
        let isAddInMyBorrowList;
        let currentListLength = this.borrowedBooks.length

        this.borrowBook(bookToBorrow)
        let currentListLengthAfterRunBorrowFunc = this.borrowedBooks.length

        if (currentListLength === currentListLengthAfterRunBorrowFunc) {
            return isAddInMyBorrowList = false
        } if (currentListLength < currentListLengthAfterRunBorrowFunc) {
            return isAddInMyBorrowList = true
        }
        return isAddInMyBorrowList
    }
    //function which adds the given book after all checks
    borrowBook(bookToBorrow) {

        let checkForThsBookInTheList = this.checkIfTheBookIsAlreadyInMyList(bookToBorrow)
        let chekForTheBookInBorrowList = this.checkIfThatBookIsInMyBorrowedList(bookToBorrow)
        if (checkForThsBookInTheList === true && chekForTheBookInBorrowList === true) {
            return checkForThsBookInTheList
        } if (this.borrowedBooks.length < 3) {
            if (checkForThsBookInTheList === false && chekForTheBookInBorrowList === false) {
                this.borrowedBooks.push(bookToBorrow)
                console.log(`I borrow a new book wich id is : ${bookToBorrow.id}`);
                console.log(this.borrowedBooks.length);
                return;
            }
        } if (this.borrowedBooks.length === 3) {
            console.log(`You cannot take more than 3 books`);
            return
        }
        return this.borrowedBooks

    }
    //function which returns the given book after all checks
    returnBook(bookForReturn) {
        let borrowedBookForReturn = this.checkIfThatBookIsInMyBorrowedList(bookForReturn)
        if (borrowedBookForReturn === true) {
            let index = this.borrowedBooks.indexOf(borrowedBookForReturn)
            this.borrowedBooks.splice(index, 1)
            console.log(`You successfully return this borrowed book id:  ${bookForReturn.id}`);
            console.log(this.borrowedBooks.length);
        }
    }
    donateBook() {

    }
}


class Library {
    constructor(libraryName) {
        this.libraryName = libraryName
        this.libraryBooks = []
        this.landedBooks = []
    }
    //search given book in this.libraryBooks[]
    searchBook(book) {
        let currentBook;

        for (let i = 0; i < this.libraryBooks.length; i++) {
            currentBook = this.libraryBooks[i]
            if (currentBook.id === book.id) {
                console.log(`The librarian found the book you were looking for, id: ${currentBook.id}`);

                return currentBook
            }
        }
        console.log(`Oops.. The book you are looking for is currently unavailable`)
        return currentBook
    }
    //add book in library
    addBook(book) {
        this.libraryBooks.push(book)
    }
    // console.log library list
    getLibraryBooks() {
        console.log(this.libraryBooks);
    }

    // final function that takes the selected book out of the this.libraryBooks[] and moves it to the this.landedBooks[]
    lendBook(bookForLand) {
        let thisBookForLand = this.searchBook(bookForLand)
        if (bookForLand.id === thisBookForLand.id) {
            this.landedBooks.push(thisBookForLand)
            let index = this.libraryBooks.indexOf(thisBookForLand)
            this.libraryBooks.splice(index, 1)
            console.log(`The librarian lends this book and add this book in the LENDED LIST !`);

        } else {

            return thisBookForLand
        }
    }
    //update book..still not ready func
    updateBook(bookForUpdate) {
        let thisBookForUpdate = this.searchBook(bookForUpdate)

        if (thisBookForUpdate.id === bookForUpdate.id) {
            thisBookForUpdate.price = 12
            console.log(thisBookForUpdate);
        }
    }
    //delete selected book from  this.libraryBooks[]
    deleteBook(bookForDelete) {
        let thisBookForDelete = this.searchBook(bookForDelete)

        if (thisBookForDelete.id === bookForDelete.id) {
            console.log(`the librarian discards a book with id: ${thisBookForDelete.id} from the library`);
            let index = this.libraryBooks.indexOf(thisBookForDelete)
            this.libraryBooks.splice(index, 1)
        }
    }
    // write in json file the books data wich are in this.libraryBooks[]
    writeBooksInStockInJSONfile() {

        const fs = require("fs")
        let book = [...this.libraryBooks]
        const data = JSON.stringify(book)
        fs.writeFile('booksInLibrary.json', data, err => {
            if (err) {
                throw err
            }
            console.log('JSON DATA IS SAVED');
        })

    }
    // read in json file the books data wich are in this.libraryBooks[]
    readBooksInStockInJSONfile() {
        const fs = require("fs");
        fs.readFile('booksInLibrary.json', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(`READING DATA FROM JSON FILE`);
            let dataFromJSON = JSON.parse(data)
            console.log(dataFromJSON);

        })
    }
    // delete book from lended list and add curent book to the libraryBooks[]
    returnBookInLibrary(bookToBeReturn) {
    
          
                this.libraryBooks.push(bookToBeReturn)
                let index = this.landedBooks.indexOf(bookToBeReturn)
                this.landedBooks.splice(index, 1)
                console.log(`The customer returned the book to the library . The book was delisted from landedList and add in library list and JSON file `);
                this.writeBooksInStockInJSONfile()
    }
    acceptingADonatedBookFromACustomer(){

    }
    
}
class Librarian {
    constructor(name) {
        this.name = name
        this.workSpaceLibrary = []
        this.customers = []


    }
    // only one library
    addWorkingPlace(library) {
        this.workSpaceLibrary.push(library)
    }
    // show library
    getWorkSpaceLibrary() {
        console.log(this.workSpaceLibrary);
    }
    // implement queue ds for customers
    openTheLibraryEntranceForCustomers(customer) {
        this.customers.push(customer)
    }
    // dequeue
    processedCustomer() {
        this.customers.shift()
    }
    // check the length of customer queue and return current customer 
    processTheCustomerWhoseTurnCameFromTheQueue() {
        if (this.customers.length === 0) {
            console.log(`You served all the customers`);
            return;
        }
        let currentCustomer = this.customers[0]
        return currentCustomer
    }
    // check if the customer is reach the limit of borrowed books and if is it then finish his/her service and invite the next customer
    completingTheOrderAndStartingWithTheNextCustomer() {
        let currentCustomerInOrder = this.processTheCustomerWhoseTurnCameFromTheQueue()
        if (currentCustomerInOrder.borrowedBooks.length === 3) {

            this.processedCustomer()
        }

    }
    //the final function Library side: which after all checks takes the book out of the libraryBooks[], puts it in the landedBooks[] of the library.
    // On the user's side: it checks how many books he has so far and if he has not reached his limit or has not read or owned this book he gives it to him in the borrowedBooks[]
    //after that invites another customer of the queue
    customerServiceForBorrowingABookFromTheLiibrary() {

        let customerInOrder = this.processTheCustomerWhoseTurnCameFromTheQueue()
        let theBookTheCustomerWants = customerInOrder.askTheLibrarianForABook(books)
        let ifTheCustomerTakeTheBookOrNot = customerInOrder.ifINoLongerOwnOrHaveReadThisBook(theBookTheCustomerWants)

        if (ifTheCustomerTakeTheBookOrNot === true) {
            this.workSpaceLibrary[0].lendBook(theBookTheCustomerWants)

            console.log(this.workSpaceLibrary);
            customerInOrder.borrowBook(theBookTheCustomerWants)
            customerInOrder.getMyCurrentBorrowedBooksLis()

            this.completingTheOrderAndStartingWithTheNextCustomer()
        } else {
            console.log(`The customer decided he didn't want this book.`);
        }
    }
    customerServiceReturningABorrowedBook(customer) {
        console.log(`FROM RETURN BOOK METHOOD`);
        console.log(`Customer with name: ${customer.name} came to return a book  he had taken from the library`);

        if (customer.borrowedBooks.length === 0) {
            console.log(`this customer with name: ${customer.name} has no books to return`);
        }
        let bookToBeReturn = customer.borrowedBooks[0]
        this.workSpaceLibrary[0].returnBookInLibrary(bookToBeReturn)
        bookToBeReturn = customer.borrowedBooks.shift()



        console.log(this.workSpaceLibrary);


    }
}


let book1 = new Book(1, "isbn23456", "Everyday Italian", "Giada De Laurentiis", "2005", 30.00)
let book2 = new Book(2, "isbn2345678", "Harry Potter", "J K. Rowling", "2001", 29.99)
let book3 = new Book(3, "isbn23456910", "In Search of Lost Time", " Marcel Proust", "2002", 25.00)
let book4 = new Book(4, "isbn2345611123", "Don Quixote", "Miguel de Cervantes", "2005", 24.00)
let book5 = new Book(5, "isbn2345613144", "One Hundred Years of Solitude", "Giada De Laurentiis", "2003", 21.00)
let book6 = new Book(6, "isbn2345613145", " The Great Gatsby", "F. Scott Fitzgerald", "2004", 22.00)
let book7 = new Book(7, "isbn2345613146", " Moby Dic", "GF. Scott Fitzgerald", "2005", 23.00)
let book8 = new Book(8, "isbn2345613147", " Madame Bovary", "Gustave Flaubert", "2006", 24.00)
let book9 = new Book(9, "isbn2345613148", " The Divine Comedy", "Dante Alighieri", "2007", 27.00)
let book10 = new Book(10, "isbn2345613149", "The Brothers Karamazov ", "Fyodor Dostoyevsky", "2008", 29.00)
const books = []
books.push(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10)

let user1 = new User('Pesho')
user1.addBooksInmyListOfBooks(book1)
user1.addBooksInmyListOfBooks(book2)

let user2 = new User('Gosho')
user2.addBooksInmyListOfBooks(book3)

let user3 = new User('Ivan')
user3.addBooksInmyListOfBooks(book2)
// user1.borrowBook(book1)
// user1.borrowBook(book4)
// user1.borrowBook(book2)
// user1.returnBook(book3)
let library = new Library("Ivan Vazov National Library")
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.addBook(book5)
library.addBook(book6)
library.addBook(book7)
library.addBook(book8)
library.addBook(book9)
library.addBook(book10)
// library.searchBook(book1)
// library.lendBook(book2)
// library.updateBook(book1)
// library.deleteBook(book1)
// library.lendBook(book1)
// library.writeBooksInStockInJSONfile()
// library.readBooksInStockInJSONfile()

let librarian1 = new Librarian('Gosho')
librarian1.addWorkingPlace(library)
librarian1.openTheLibraryEntranceForCustomers(user1)
librarian1.openTheLibraryEntranceForCustomers(user2)
librarian1.openTheLibraryEntranceForCustomers(user3)
librarian1.processTheCustomerWhoseTurnCameFromTheQueue()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceForBorrowingABookFromTheLiibrary()
librarian1.customerServiceReturningABorrowedBook(user1)
librarian1.customerServiceReturningABorrowedBook(user1)
librarian1.customerServiceReturningABorrowedBook(user1)
librarian1.customerServiceReturningABorrowedBook(user2)
librarian1.customerServiceReturningABorrowedBook(user3)


