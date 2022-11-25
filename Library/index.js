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

    addBooksInmyListOfBooks(book) {
        this.listOfBooks.push(book)
    }

    getMyListOfBooks() {
        console.log(`Hallo, I am ${this.name} and this is my list of books wich contains ${this.listOfBooks.length} books :`);
        console.log(this.listOfBooks);
    }

    getMyCurrentBorrowedBooksLis() {
        console.log(`Hallo, I am ${this.name} and this is my list with BORROWED books wich contains ${this.borrowedBooks.length} books :`);
        console.log(this.borrowedBooks);
    }

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

    askTheLibrarianForABook(books) {
        let allBooks = books
        let wantedBook = allBooks[Math.floor(Math.random() * allBooks.length)]
        return wantedBook
    }

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

    returnBook(bookForReturn) {
        let borrowedBookForReturn = this.checkIfThatBookIsInMyBorrowedList(bookForReturn)
        if (borrowedBookForReturn === true) {
            let index = this.borrowedBooks.indexOf(borrowedBookForReturn)
            this.borrowedBooks.splice(index, 1)
            console.log(`You successfully return this borrowed book id:  ${bookForReturn.id}`);
            console.log(this.borrowedBooks.length);
        }
    }
    donateBook() { }
}


class Library {
    constructor(libraryName) {
        this.libraryName = libraryName
        this.libraryBooks = []
        this.landedBooks = []
    }

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

    addBook(book) {
        this.libraryBooks.push(book)
    }

    getLibraryBooks() {
        console.log(this.libraryBooks);
    }

    takingTheBookOffTheShelf() {

    }

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

    updateBook(bookForUpdate) {
        let thisBookForUpdate = this.searchBook(bookForUpdate)

        if (thisBookForUpdate.id === bookForUpdate.id) {
            thisBookForUpdate.price = 12
            console.log(thisBookForUpdate);
        }
    }

    deleteBook(bookForDelete) {
        let thisBookForDelete = this.searchBook(bookForDelete)

        if (thisBookForDelete.id === bookForDelete.id) {
            console.log(`the librarian discards a book with id: ${thisBookForDelete.id} from the library`);
            let index = this.libraryBooks.indexOf(thisBookForDelete)
            this.libraryBooks.splice(index, 1)
        }
    }

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

}
class Librarian {
    constructor(name) {
        this.name = name
        this.workSpaceLibrary = []
        this.customers = []

    }

    addWorkingPlace(library) {
        this.workSpaceLibrary.push(library)
    }

    getWorkSpaceLibrary() {
        console.log(this.workSpaceLibrary);
    }
    
    openTheLibraryEntranceForCustomers(customer) {
        this.customers.push(customer)
    }
    
    processedCustomer() {
        this.customers.shift()
    }

    processTheCustomerWhoseTurnCameFromTheQueue() {
        if (this.customers.length === 0) {
            console.log(`You served all the customers`);
            return;
        }
        let currentCustomer = this.customers[0]
        return currentCustomer
    }

    customerServiceForBorrowingABookFromTheLiibrary() {

        let customerInOrder = this.processTheCustomerWhoseTurnCameFromTheQueue()
        let theBookTheCustomerWants = customerInOrder.askTheLibrarianForABook(books)
        let ifTheCustomerTakeTheBookOrNot = customerInOrder.ifINoLongerOwnOrHaveReadThisBook(theBookTheCustomerWants)

        if (ifTheCustomerTakeTheBookOrNot === true) {
            this.workSpaceLibrary[0].lendBook(theBookTheCustomerWants)
            console.log(this.workSpaceLibrary);
            customerInOrder.borrowBook(theBookTheCustomerWants)
            customerInOrder.getMyCurrentBorrowedBooksLis()
        } else {
            console.log(`The customer decided he didn't want this book.`);
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
const books = []
books.push(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10)
console.log(`LOG FROM USER`);

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
console.log(`LOG FROM LIBRARY`);
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

console.log(`LOG FROM LIBRARIAN`);
let librarian1 = new Librarian('Gosho')
librarian1.addWorkingPlace(library)

librarian1.openTheLibraryEntranceForCustomers(user1)
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