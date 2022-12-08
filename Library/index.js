"use strict";
class Book {
    constructor(id, ISBN, title, author, publishedYear, price) {
        this.id = id
        this.ISBN = ISBN
        this.title = title
        this.author = author
        this.publishedYear = publishedYear
        this.price = price
        this.isBorrowed = false
    }
}
class User {
    constructor(name) {
        this.name = name
        this.listOfBooks = []

    }

    printClientListLength() {
        console.log(this.listOfBooks.length);
    }
    //add books in this.listOfBooks[] / personal list
    addBooksInmyListOfBooks(book) {
        this.listOfBooks.push(book)
    }

    getMyListOfBooks() {
        return this.listOfBooks
    }


    // check if this book is contain in this.listOfBooks[] the func return true = contains / false = doesnt contain
    checkIfTheBookIsAlreadyInMyList(bookForCheck) {
        let currenBookinTheList;
        let isTheListContainTheBook = false
        for (let i = 0; i < this.listOfBooks.length; i++) {
            currenBookinTheList = this.listOfBooks[i]
            if (currenBookinTheList.id === bookForCheck.id) {
                isTheListContainTheBook = true
            }
        }
        return isTheListContainTheBook
    }


    //function wich will compare my list of books and arr books and return another array wich contain only diffrence

    askTheLibrarianForABook() {
        const freeBook = books.filter(id => !this.listOfBooks.includes(id))
        return freeBook
    }



    //function which adds the given book after all checks
    borrowBook(bookToBorrow) {
        if (this.checkIfTheBookIsAlreadyInMyList(bookToBorrow) === true) {
            return 0

        }

        bookToBorrow.isBorrowed = true
        this.listOfBooks.push(bookToBorrow)


        this.printClientListLength()

    }
    //function which returns the given book after all checks
    returnBook(bookForReturn) {

        let borrowedBookForReturn = this.checkIfThatBookIsInMyBorrowedList(bookForReturn)
        if (borrowedBookForReturn === true) {
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

    }

    //add book in library
    addBook(book) {
        this.libraryBooks.push(...book)

    }
    searchBook(bookToSearch) {
        let currentBook;

        for (let i = 0; i < this.libraryBooks.length; i++) {
            currentBook = this.libraryBooks[i]
            if (currentBook.id == bookToSearch.id) {

                return currentBook


            }
        }
        return undefined
    }
    // console.log library list
    getLibraryBooksLength() {
        return this.libraryBooks.length
    }

    // final function that takes the selected book out of the this.libraryBooks[] and moves it to the this.landedBooks[]
    lendBook(bookForLand) {

        let thisBookForLand = this.searchBook(bookForLand)

        if (thisBookForLand === undefined) {
            return undefined
        }
        if (bookForLand.id === thisBookForLand.id) {
            let index = this.libraryBooks.indexOf(thisBookForLand)
            this.libraryBooks.splice(index, 1)
            console.log(this.libraryBooks.length);

        }
    }

    //update book func ..still not defined what exactly will do 
    updateBook(bookForUpdate) {

        let thisBookForUpdate = this.searchBook(bookForUpdate)

        if (thisBookForUpdate.id === bookForUpdate.id) {
            thisBookForUpdate.price = 12

        }
        return thisBookForUpdate
    }

    //delete selected book from  this.libraryBooks[]
    deleteBook(bookForDelete) {

        let thisBookForDelete = this.searchBook(bookForDelete)

        if (thisBookForDelete.id === bookForDelete.id) {
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

    // show library
    getLibrary() {

        return this.workSpaceLibrary

    }

    // implement queue ds for customers
    openTheLibraryEntranceForCustomers(customer) {
        this.customers.push(customer)
    }

    // dequeue

    // check the length of customer queue and return current customer 
    processTheCustomerWhoseTurnCameFromTheQueue() {

        if (this.customers.length === 0) {
            return undefined
        }
        let currentCustomer = this.customers[0]
        return currentCustomer
    }

    // check if the customer is reach the limit of borrowed books and if is it then finish his/her service and invite the next customer
    inviteNextCustomer() {

        this.customers.shift()

    }
    checkIfCustomerReachBooksLimit(customer) {

        if (customer.listOfBooks.length === 5) {
            this.inviteNextCustomer()
        }
        console.log(`CUSTOMERS LIST LENGTH`);
        console.log(this.customers.length);

    }
    //get current customer and call customer funk askTheLibrarianForABook wich will compare my customer 
    //list of books and arr books and return another array wich contain only diffrence
    // no duplicates
    getRandomBook(cust) {
        let freeBook = cust.askTheLibrarianForABook()
        const wantedBook = freeBook[Math.floor(Math.random() * freeBook.length)]
        return wantedBook
    }
    //the final function Library side: which after all checks takes the book out of the libraryBooks[], puts it in the landedBooks[] of the library.
    // On the user's side: it checks how many books he has so far and if he has not reached his limit or has not read or owned this book he gives it to him in the borrowedBooks[]
    //after that invites another customer of the queue
    customerServiceForBorrowingABookFromTheLiibrary() {

        let customerInOrder = this.processTheCustomerWhoseTurnCameFromTheQueue()
        if (customerInOrder === undefined) {
            return 0
        }
        let theBookTheCustomerWants = this.getRandomBook(customerInOrder)

        this.workSpaceLibrary[0].lendBook(theBookTheCustomerWants)

        customerInOrder.borrowBook(theBookTheCustomerWants)
        this.checkIfCustomerReachBooksLimit(customerInOrder)

        return customerInOrder.name
    }


    // get customer first borrowed book in this.borrowedBooks[] , splice the book from this.borrowedBooks[] and add the book in this.libraryList[] from library
    customerServiceReturningABorrowedBook(customer) {

        if (customer.listOfBooks.length === 0) {
            return 0
        } else {


        }
    }

    // get random book from customer listOfBooks[] and add it in library without any checks
    customerServiceDonationABook(customer) {

        if (customer.listOfBooks.length === 0) {
            return 0
        }
        else {

            let bookToDonate = customer.donateBook()
            this.workSpaceLibrary[0].acceptingADonatedBookFromACustomer(bookToDonate)
            this.getLibrary()
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
let book15 = new Book(15, "isbn2345613149", "November 9: A Novel ", "Colleen Hoover", "2012", 9.00)

// it is use in user class
const books = []
books.push(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15)

// Add books in listOfBooks in customer list
let user1 = new User('Pesho')
user1.addBooksInmyListOfBooks(book1)
user1.addBooksInmyListOfBooks(book2)


let user2 = new User('Gosho')
user2.addBooksInmyListOfBooks(book1)
user2.addBooksInmyListOfBooks(book2)



let user3 = new User('Ivan')
user3.addBooksInmyListOfBooks(book1)
user3.addBooksInmyListOfBooks(book2)


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
// console.log(` Customer in Queue : ${librarian1.processTheCustomerWhoseTurnCameFromTheQueue().name}`);

// get chosen book from customers / find this book in library and gave it to the customer
console.log(`Customer name: : ${librarian1.customerServiceForBorrowingABookFromTheLiibrary()}`);
console.log(`Customer name: : ${librarian1.customerServiceForBorrowingABookFromTheLiibrary()}`);
console.log(`Customer name: : ${librarian1.customerServiceForBorrowingABookFromTheLiibrary()}`);
console.log(`Customer name: : ${librarian1.customerServiceForBorrowingABookFromTheLiibrary()}`);
console.log(`Customer name: : ${librarian1.customerServiceForBorrowingABookFromTheLiibrary()}`);
console.log(`Customer name: : ${librarian1.customerServiceForBorrowingABookFromTheLiibrary()}`);

console.log(`userLIST:`);

console.log(user1.getMyListOfBooks());







// librarian1.customerServiceForBorrowingABookFromTheLiibrary()
// librarian1.customerServiceForBorrowingABookFromTheLiibrary()
// librarian1.customerServiceForBorrowingABookFromTheLiibrary()
// librarian1.customerServiceForBorrowingABookFromTheLiibrary()
// librarian1.customerServiceForBorrowingABookFromTheLiibrary()
// librarian1.customerServiceForBorrowingABookFromTheLiibrary()
// librarian1.customerServiceForBorrowingABookFromTheLiibrary()
// librarian1.customerServiceForBorrowingABookFromTheLiibrary()

//get selected book from user and return it to the library
// librarian1.customerServiceReturningABorrowedBook(user1)
// librarian1.customerServiceReturningABorrowedBook(user1)
// librarian1.customerServiceReturningABorrowedBook(user1)
// librarian1.customerServiceReturningABorrowedBook(user2)
// librarian1.customerServiceReturningABorrowedBook(user3)

// get selected book from personal books from user and donate it to the library
// librarian1.customerServiceDonationABook(user1)
// librarian1.customerServiceDonationABook(user1)


