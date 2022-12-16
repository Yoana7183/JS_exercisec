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

        for (let i = 0; i < this.listOfBooks.length; i++) {
            if (this.listOfBooks[i].id === bookForCheck.id) {
                return true
            }
        }
        return false
    }

    // check if this book is contain in this.borrowedBooks[] the func return true = contains / false = doesnt contain
    checkIfThatBookIsInMyBorrowedList(bookForCheck) {

        for (let i = 0; i < this.borrowedBooks.length; i++) {
            if (this.borrowedBooks[i].id === bookForCheck.id) {
                return true
            }
        }
        return false
    }

    // select random book
    pickARandomBook(books) {
        let allBooks = books
        return allBooks[Math.floor(Math.random() * allBooks.length)]
    }

    //function which adds the given book after all checks
    borrowBook(bookToBorrow) {

        let checkForThsBookInTheList = this.checkIfTheBookIsAlreadyInMyList(bookToBorrow)
        let chekForTheBookInBorrowList = this.checkIfThatBookIsInMyBorrowedList(bookToBorrow)

        if (checkForThsBookInTheList || chekForTheBookInBorrowList) {
            throw Error('Oops..you already has this book, pick another one!')
        }
        if (this.borrowedBooks.length <= 2) {
            if (!checkForThsBookInTheList && !chekForTheBookInBorrowList) {
                return this.borrowedBooks.push(bookToBorrow)
            }
        }
    }

    // helping function that serves to keep track of the books that are logged in and which are not logged in this.borrowedBooks[]
    trackBooksWchAreLoggedInBorrowedList(bookToBorrow) {

        let currentListLength = this.borrowedBooks.length

        try {
            this.borrowBook(bookToBorrow)
        } catch (err) {
            console.log(err.name);
            console.log(err.message)
            throw Error('The book cannot be borrowed. Please try with another book!')
        }

        let currentListLengthAfterRunBorrowFunc = this.borrowedBooks.length

        if (currentListLength === currentListLengthAfterRunBorrowFunc) {
            return false
        } if (currentListLength < currentListLengthAfterRunBorrowFunc) {
            return true
        }

    }

    //function which returns the given book after all checks
    returnBook(bookForReturn) {

        let borrowedBookForReturn = this.checkIfThatBookIsInMyBorrowedList(bookForReturn)
        if (borrowedBookForReturn) {
            let index = this.borrowedBooks.indexOf(borrowedBookForReturn)
            return this.borrowedBooks.splice(index, 1)
        } else {
            throw Error('The book is already in your Personal or Borrowed list. Please try with another book!')
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
            else {
                throw Error('Library: The book you looking for is currently not available')
            }
        }
    }

    //add book in library
    addBook(book) {
        this.libraryBooks.push(...book)
    }

    // final function that takes the selected book out of the this.libraryBooks[] and moves it to the this.landedBooks[]
    lendBook(bookForLand) {

        try {
            this.searchBook(bookForLand)
        } catch (err) {
            console.log(err.name);
            console.log(err.mesage);
        }

        let thisBookForLand = this.searchBook(bookForLand)

        this.landedBooks.push(thisBookForLand)
        let index = this.libraryBooks.indexOf(thisBookForLand)
        this.libraryBooks.splice(index, 1)
        return this.landedBooks.length

    }

    //update book..still not ready func
    updateBook(bookForUpdate) {
        try {
            this.searchBook(bookForUpdate)
        } catch (err) {
            console.log(err.name);
            console.log(err.mesage);
        }
        return this.searchBook(bookForUpdate)
    }

    //delete selected book from  this.libraryBooks[]
    deleteBook(bookForDelete) {
        try {
            this.searchBook(bookForUpdate)
        } catch (err) {
            console.log(err.name);
            console.log(err.mesage);
        }
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

        if (currentCustomerInOrder.borrowedBooks.length <= 2) {
            return true
        } if (currentCustomerInOrder.borrowedBooks.length === 3) {
            this.processedCustomer()
        }

    }

    //the final function Library side: which after all checks takes the book out of the libraryBooks[], puts it in the landedBooks[] of the library.
    // On the user's side: it checks how many books he has so far and if he has not reached his limit or has not read or owned this book he gives it to him in the borrowedBooks[]
    //after that invites another customer of the queue
    finalFunction_customerServiceForBorrowingABookFromTheLiibrary() {
        var customerInOrder;
        var theBookTheCustomerWants;

        try {
            customerInOrder = this.getTheCustomerWhoseTurnCameFromTheQueue()
            theBookTheCustomerWants = customerInOrder.pickARandomBook(books)
        } catch (err) {
            console.log(err.name);
            console.log(err.message);
            return ;
        }

        if (this.checkIfCustomerIsReachBookLimit()) {
            try {
                customerInOrder.trackBooksWchAreLoggedInBorrowedList(theBookTheCustomerWants)
            } catch (err) {
                console.log(err.name);
                console.log(err.message);

                return undefined
            }
            return [theBookTheCustomerWants, customerInOrder];
        }

    }

    displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary() {

        let bookAndCustomerObj = this.finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
        if (bookAndCustomerObj === undefined) {
            console.log(`This book is alreary in one of your lists. Please try with another one!`);

        } else {
            console.log(`Customer name: ${bookAndCustomerObj[1].name} / Wanted book = id: ${bookAndCustomerObj[0].id} / Title: "${bookAndCustomerObj[0].title}" / Author: ${bookAndCustomerObj[0].author}`);
        }
    }
    // get customer first borrowed book in this.borrowedBooks[] , splice the book from this.borrowedBooks[] and add the book in this.libraryList[] from library
    finalFunction_customerServiceReturningABorrowedBook(customer) {
        let bookToBeReturn;
        if (customer.borrowedBooks.length === 0) {
            return undefined

        } else {
            bookToBeReturn = customer.borrowedBooks[0]
            this.workSpaceLibrary[0].returnBookInLibrary(bookToBeReturn)
            bookToBeReturn = customer.borrowedBooks.shift()
            return bookToBeReturn
        }
    }

    displayResultOf_finalFunction_customerServiceReturningABorrowedBook(customer) {
        let bookToBeReturned = this.finalFunction_customerServiceReturningABorrowedBook(customer)
        if (bookToBeReturned === undefined) {
            console.log(`Customer name: ${customer.name} has no more book for return`)

        } else {
            console.log(`Customer name: ${customer.name} return borrowed book id: ${bookToBeReturned.id} / Title: "${bookToBeReturned.title}" / Athor: ${bookToBeReturned.author}`);

        }
    }

    // get random book from customer listOfBooks[] and add it in library without any checks
    finalFunction_customerServiceDonationABook(customer) {

        if (customer.listOfBooks.length === 0) {
            return undefined
        }
        else {
            let bookToDonate = customer.donateBook()
            this.workSpaceLibrary[0].acceptingADonatedBookFromACustomer(bookToDonate)
            return bookToDonate
        }

    }

    displayResultOf_finalFunction_customerServiceDonationABook(customer) {
        let bookForDonation = this.finalFunction_customerServiceDonationABook(customer)
        if (bookForDonation === undefined) {
            console.log(`Customer name: ${customer.name} has no more book for donation`)
        } else {
            console.log(`Customer name: ${customer.name} donate book id: ${bookForDonation.id} / Title: "${bookForDonation.title}" / Athor: ${bookForDonation.author}`);
        }

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

// My Print methoods: 
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceReturningABorrowedBook(user1)
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceReturningABorrowedBook(user1)
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceDonationABook(user1)
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceReturningABorrowedBook(user2)
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceDonationABook(user2)
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceDonationABook(user3)
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceForBorrowingABookFromTheLiibrary()
librarian1.displayResultOf_finalFunction_customerServiceDonationABook(user3)


/* Outcome:
Customer name: Pesho / Wanted book = id: 14 / Title: "November 9: A Novel " / Author: Colleen Hoover
Customer name: Pesho return borrowed book id: 14 / Title: "November 9: A Novel " / Athor: Colleen Hoover
Customer name: Pesho / Wanted book = id: 13 / Title: "Diper Överlöde (Diary of a Wimpy Kid Book 17) " / Author: Jeff Kinney
Error
Oops..you already has this book, pick another one!
Error
The book cannot be borrowed. Please try with another book!
This book is alreary in one of your lists. Please try with another one!
Customer name: Pesho / Wanted book = id: 11 / Title: "The Light We Carry: Overcoming in Uncertai " / Author: Michelle Obama
Customer name: Pesho return borrowed book id: 13 / Title: "Diper Överlöde (Diary of a Wimpy Kid Book 17) " / Athor: Jeff Kinney
Error
Oops..you already has this book, pick another one!
Error
The book cannot be borrowed. Please try with another book!
This book is alreary in one of your lists. Please try with another one!
Error
Oops..you already has this book, pick another one!
Error
The book cannot be borrowed. Please try with another book!
This book is alreary in one of your lists. Please try with another one!
Customer name: Pesho / Wanted book = id: 12 / Title: "It Starts with Us: A Novel (It Ends with Us) " / Author: Colleen Hoover
Customer name: Pesho donate book id: 1 / Title: "Everyday Italian" / Athor: Giada De Laurentiis
Customer name: Pesho / Wanted book = id: 5 / Title: "One Hundred Years of Solitude" / Author: Giada De Laurentiis
This book is alreary in one of your lists. Please try with another one!
Customer name: Gosho / Wanted book = id: 9 / Title: " The Divine Comedy" / Author: Dante Alighieri
Customer name: Gosho return borrowed book id: 9 / Title: " The Divine Comedy" / Athor: Dante Alighieri
Customer name: Gosho / Wanted book = id: 13 / Title: "Diper Överlöde (Diary of a Wimpy Kid Book 17) " / Author: Jeff Kinney
Customer name: Gosho donate book id: 3 / Title: "In Search of Lost Time" / Athor:  Marcel Proust
Customer name: Gosho / Wanted book = id: 12 / Title: "It Starts with Us: A Novel (It Ends with Us) " / Author: Colleen Hoover
Customer name: Gosho / Wanted book = id: 11 / Title: "The Light We Carry: Overcoming in Uncertai " / Author: Michelle Obama
This book is alreary in one of your lists. Please try with another one!
Customer name: Ivan donate book id: 14 / Title: "Where the Crawdads Sing " / Athor: Delia Owens
Customer name: Ivan / Wanted book = id: 5 / Title: "One Hundred Years of Solitude" / Author: Giada De Laurentiis
Customer name: Ivan / Wanted book = id: 14 / Title: "November 9: A Novel " / Author: Colleen Hoover
Customer name: Ivan / Wanted book = id: 11 / Title: "The Light We Carry: Overcoming in Uncertai " / Author: Michelle Obama
This book is alreary in one of your lists. Please try with another one!
Customer name: Ivan has no more book for donation
*/