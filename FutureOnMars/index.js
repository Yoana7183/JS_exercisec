"use strict";

class Bag {
    constructor(name) {
        this.name = name
        this.bag = []
    }
    //- Inserts item in the bag. Returns true if a new element is added and false otherwise.
    add(element) {
        let bagLenghthBeforeAddElement = this.bag.length
        this.bag.push(element)
        let bagLengthAfterAddedElement = this.bag.length
        if (bagLenghthBeforeAddElement < bagLengthAfterAddedElement) {
            return true
        }
        return false
    }
    //Returns the value of a random element in the bag.
    grabRandomElement() {

        let random = this.bag[Math.floor(Math.random() * this.bag.length)]
        return random.element
    }
    // Returns the element at the specified position in the bag.
    grabByIndex(idx) {
        return this.bag[idx].element
    }
    //Removes the element at the specified position in this list.
    removeByIndex(idx) {
        this.bag.splice(idx, 1)
        return idx
    }
    //Removes a single instance of item from this bag and returns true if it is present; otherwise returns false.
    removeElement(element) {
        let index = this.bag.indexOf(element)
        if (index === -1) {
            return false
        }
        this.bag.splice(index, 1)
        return true
    }
    // - Returns true if this bag contains the specified element and false otherwise.
    isContainElement(element) {
        let index = this.bag.indexOf(element)
        if (index === -1) {
            return false
        }
        return true
    }
    //Returns true if this collection contains no elements.
    isEmpty() {
        if (this.bag.length === 0) {
            return true
        }
        return false
    }
    //- Removes all the elements from this bag. The bag will be empty after this method returns.
    clear() {
        this.bag.splice(0, this.bag.length)
    }
    //Returns the number of elements in this bag.
    size() {
        return this.bag.length
    }
    //Returns an iterator over the elements in this bag.
    iterator() {
     return this.bag.forEach((val)=> console.log(val))
    }
    //Returns an array containing all the elements in this bag.
    toArray() {
        return this.bag
    }
    //Returns a string that displays the elements in the bag. The description is a comma separated list of elements enclosed in brackets.
    toString() {

        let toString = ' '

        for (let i = 0; i < this.bag.length; i++) {
            toString += JSON.stringify(this.bag[i]) + ','
        }
        return toString
    }
}


let dust = { element: 'dust' }
let stone = { element: 'stone' }

let bag = new Bag('Matian Robot Bag')
console.log(`Is element added in a Martian Robot Bag : ${bag.add(dust)}`);
console.log(`Is element added in a Martian Robot Bag : ${bag.add(stone)}`);
console.log(`Is element added in a Martian Robot Bag : ${bag.add(dust)}`);
console.log(`Is element added in a Martian Robot Bag : ${bag.add(dust)}`);
console.log(`Is element added in a Martian Robot Bag : ${bag.add(stone)}`);


console.log(`Grab a random element of the bag : ${bag.grabRandomElement()}`);
console.log(`Grab an element by index : ${bag.grabByIndex(0)}`);
console.log(`Remove an element by index : ${bag.removeByIndex(2)}`);
console.log(`Remove an element by given element : ${bag.removeElement(stone)} `);
console.log(`Check if this bag contains the specified element: ${bag.isContainElement(dust)}`);
console.log(`Get the number of elements in the bag : ${bag.size()}`);
console.log(`Iterate over all elements in the bag : `);
console.log(bag.iterator());
console.log(`Stringify all elements in the bag: ${bag.toString()}`);
console.log(`Return all the elements in the bag: `);
console.log(bag.toArray());


/* Output :
Is element added in a Martian Robot Bag : true
Is element added in a Martian Robot Bag : true
Is element added in a Martian Robot Bag : true
Is element added in a Martian Robot Bag : true
Is element added in a Martian Robot Bag : true
Grab a random element of the bag : stone
Grab an element by index : dust
Remove an element by index : 2
Remove an element by given element : true
Check if this bag contains the specified element: true
Get the number of elements in the bag : 3
Iterate over all elements in the bag :
{ element: 'dust' }
{ element: 'dust' }
{ element: 'stone' }
undefined
Stringify all elements in the bag:  {"element":"dust"},{"element":"dust"},{"element":"stone"},
Return all the elements in the bag: 
[ { element: 'dust' }, { element: 'dust' }, { element: 'stone' } ]

*/