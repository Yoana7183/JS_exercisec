"use strict";
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
        return this.listOfBooks
    }

    //show show the customer name/ this.borrowedBooks[].length and display them//
    getMyCurrentBorrowedBooksLis() {
        return this.borrowedBooks
    }

    // check if this book is contain in this.listOfBooks[] the func return true = contains / false = doesnt contain
    checkIfTheBookIsAlreadyInMyList(bookForCheck) {

        let currenBookinTheList;

        for (let i = 0; i < this.listOfBooks.length; i++) {
            currenBookinTheList = this.listOfBooks[i]
            if (currenBookinTheList.id === bookForCheck.id) {
                return true
            }
        }
        return false
    }

    // check if this book is contain in this.borrowedBooks[] the func return true = contains / false = doesnt contain
    checkIfThatBookIsInMyBorrowedList(bookForCheck) {

        let currenBook;

        for (let i = 0; i < this.borrowedBooks.length; i++) {
            currenBook = this.borrowedBooks[i]
            if (currenBook.id === bookForCheck.id) {
                return true
            }
        }
        return false
    }

    // select random book
    pickARandomBook(books) {

        let allBooks = books
        let wantedBook = allBooks[Math.floor(Math.random() * allBooks.length)]
        return wantedBook
    }

    // helping function that serves to keep track of the books that are logged in and which are not logged in this.borrowedBooks[]
    trackBooksWchAreLoggedInBorrowedList(bookToBorrow) {

        let isAddInMyBorrowList;
        let currentListLength = this.borrowedBooks.length

        this.borrowBook(bookToBorrow)
        let currentListLengthAfterRunBorrowFunc = this.borrowedBooks.length

        if (currentListLength === currentListLengthAfterRunBorrowFunc) {
            return isAddInMyBorrowList = false
        } if (currentListLength < currentListLengthAfterRunBorrowFunc) {
            return isAddInMyBorrowList = true
        }

    }

    //function which adds the given book after all checks
    borrowBook(bookToBorrow) {

        let checkForThsBookInTheList = this.checkIfTheBookIsAlreadyInMyList(bookToBorrow)
        let chekForTheBookInBorrowList = this.checkIfThatBookIsInMyBorrowedList(bookToBorrow)

        if (checkForThsBookInTheList && chekForTheBookInBorrowList) {
            return checkForThsBookInTheList
        }

        if (this.borrowedBooks.length <= 3) {


            if (!checkForThsBookInTheList && !chekForTheBookInBorrowList) {
                this.borrowedBooks.push(bookToBorrow)
                console.log(`BORROWED BOOKS LENGTS`);
                console.log(this.borrowedBooks.length);

            }
        }
    }

    //function which returns the given book after all checks
    returnBook(bookForReturn) {

        let borrowedBookForReturn = this.checkIfThatBookIsInMyBorrowedList(bookForReturn)
        if (borrowedBookForReturn) {
            let index = this.borrowedBooks.indexOf(borrowedBookForReturn)
            this.borrowedBooks.splice(index, 1)
        }
    }

    // donate random selected book from this.listOfBooks[] without any checks
    donateBook() {

        let bookToBeDonated = this.listOfBooks[Math.floor(Math.random() * this.listOfBooks.length)]
        let index = this.listOfBooks.indexOf(bookToBeDonated)
        this.listOfBooks.splice(index, 1)
        return bookToBeDonated
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
                return currentBook
            }
        }

        return undefined
    }

    //add book in library
    addBook(book) {
        this.libraryBooks.push(...book)
    }

    // final function that takes the selected book out of the this.libraryBooks[] and moves it to the this.landedBooks[]
    lendBook(bookForLand) {

        let thisBookForLand = this.searchBook(bookForLand)
        if (thisBookForLand === undefined) {
            throw 'Library: The book you looking for is currently not available'
        }

        this.landedBooks.push(thisBookForLand)
        let index = this.libraryBooks.indexOf(thisBookForLand)
        this.libraryBooks.splice(index, 1)
        return this.landedBooks.length

    }

    //update book..still not ready func
    updateBook(bookForUpdate) {

        return this.searchBook(bookForUpdate)

    }

    //delete selected book from  this.libraryBooks[]
    deleteBook(bookForDelete) {

        let thisBookForDelete = this.searchBook(bookForDelete)
        if (thisBookForDelete === undefined) {
            return undefined
        }
        let index = this.libraryBooks.indexOf(thisBookForDelete)
        this.libraryBooks.splice(index, 1)
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
        this.writeBooksInStockInJSONfile()
    }

    // accept random choosen book from user and add it to the library list without any checks for availability or other - just added in list and update JSON file
    acceptingADonatedBookFromACustomer(bookToBeDonated) {

        this.libraryBooks.push(bookToBeDonated)
        this.writeBooksInStockInJSONfile()
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
    // implement queue ds for customers
    openTheLibraryEntranceForCustomers(customer) {
        this.customers.push(customer)
    }

    // dequeue
    processedCustomer() {
        this.customers.shift()
    }

    // check the length of customer queue and return current customer 
    getTheCustomerWhoseTurnCameFromTheQueue() {

        if (this.customers.length === 0) {
            throw Error('No more customers in the queue');
        }

        return this.customers[0]
    }

    // check if the customer is reach the limit of borrowed books and if is it then finish his/her service and invite the next customer
    checkIfCustomerIsReachBookLimit() {

        let currentCustomerInOrder = this.getTheCustomerWhoseTurnCameFromTheQueue()
        if(currentCustomerInOrder.borrowedBooks.length < 3 ){
            return true
         }else if (currentCustomerInOrder.borrowedBooks.length === 3){
             return false
         }

    }

    //the final function Library side: which after all checks takes the book out of the libraryBooks[], puts it in the landedBooks[] of the library.
    // On the user's side: it checks how many books he has so far and if he has not reached his limit or has not read or owned this book he gives it to him in the borrowedBooks[]
    //after that invites another customer of the queue
    finalFunction_customerServiceForBorrowingABookFromTheLiibrary() {
false
        let customerInOrder = this.getTheCustomerWhoseTurnCameFromTheQueue()
        console.log(`Customer name: ${customerInOrder.name}`);
        let theBookTheCustomerWants = customerInOrder.pickARandomBook(books)
        console.log(`Customer book wich will borrow id: ${theBookTheCustomerWants.id} / Title: "${theBookTheCustomerWants.title}" / Author: ${theBookTheCustomerWants.author}`);


        if (customerInOrder.trackBooksWchAreLoggedInBorrowedList(theBookTheCustomerWants)) {

            if (this.checkIfCustomerIsReachBookLimit) {
                customerInOrder.borrowBook(theBookTheCustomerWants)
                return theBookTheCustomerWants
            } else {
                this.processedCustomer()
            }
        } else {
            throw 'Library: The book you looking for is currently not available'
        }
        return 'Successful operation'


    }

    // get customer first borrowed book in this.borrowedBooks[] , splice the book from this.borrowedBooks[] and add the book in this.libraryList[] from library
    finalFunction_ustomerServiceReturningABorrowedBook(customer) {

        if (customer.borrowedBooks.length === 0) {
            throw  'Customer: No more Books for return!'
        } else {
            let bookToBeReturn = customer.borrowedBooks[0]
            console.log(`Customer name: ${customer.name} return borrowed book id: ${bookToBeReturn.id} / Title: "${bookToBeReturn.title}" / Athor: ${bookToBeReturn.author}`);
            this.workSpaceLibrary[0].returnBookInLibrary(bookToBeReturn)
            bookToBeReturn = customer.borrowedBooks.shift()


        }
        return 'Successful operation'

    }

    // get random book from customer listOfBooks[] and add it in library without any checks
    finalFunction_customerServiceDonationABook(customer) {

        if (customer.listOfBooks.length === 0) {
            throw Error('Customer: No more Books for donation!')
        }
        else {
            let bookToDonate = customer.donateBook()
            console.log(`Customer name: ${customer.name} donate book id: ${bookToDonate.id} / Title: "${bookToDonate.title}" / Athor: ${bookToDonate.author}`);
            this.workSpaceLibrary[0].acceptingADonatedBookFromACustomer(bookToDonate)

        }
        return 'Successful operation'
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
let book11 = new Book(11, "isbn2345613149", "The Light We Carry: Overcoming in Uncertai ", "Michelle Obama", "2020", 32.00)
let book12 = new Book(12, "isbn2345613149", "It Starts with Us: A Novel (It Ends with Us) ", "Colleen Hoover", "2021", 20.50)
let book13 = new Book(13, "isbn2345613149", "Diper Överlöde (Diary of a Wimpy Kid Book 17) ", "Jeff Kinney", "2022", 15.70)
let book14 = new Book(14, "isbn2345613149", "Where the Crawdads Sing ", "Delia Owens", "2011", 9.90)
let book15 = new Book(14, "isbn2345613149", "November 9: A Novel ", "Colleen Hoover", "2012", 9.00)

// it is use in user class
const books = []
books.push(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15)

// Add books in listOfBooks in customer list
let user1 = new User('Pesho')
user1.addBooksInmyListOfBooks(book1)


let user2 = new User('Gosho')
user2.addBooksInmyListOfBooks(book3)


let user3 = new User('Ivan')
user3.addBooksInmyListOfBooks(book14)


// create a Library 
let library = new Library("Ivan Vazov National Library")

// Add some books in library
library.addBook(books)


// create librarian
let librarian1 = new Librarian('Dragan')

// add workspace
librarian1.addWorkingPlace(library)

//add customers in library
librarian1.openTheLibraryEntranceForCustomers(user1)
librarian1.openTheLibraryEntranceForCustomers(user2)
librarian1.openTheLibraryEntranceForCustomers(user3)

//process customers in queue order


// get chosen book from customers / find this book in library and gave it to the customer
let testFunction = function () {
    try {
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_ustomerServiceReturningABorrowedBook(user1)}`);
        // console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_customerServiceDonationABook(user2)}`);
        // console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_ustomerServiceReturningABorrowedBook(user2)}`);
        // console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_customerServiceDonationABook(user3)}`);
        // console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()}`);
        // console.log(`${librarian1.finalFunction_ustomerServiceReturningABorrowedBook(user3)}`)


    }
    catch (err) {
        console.log(err.name)
        console.log(err.message);;

    }
}
testFunction()
