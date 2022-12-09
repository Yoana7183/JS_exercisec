class Person {
    constructor(firstName, lastName, adress, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.adress = adress
        this.age = age
    }

}

let person = new Person('Ivan', 'Ivanov', 'Sofia', '20')
let person1 = new Person('Angel', 'Ivanov', 'Varna', '34')
let person2 = new Person('Gosho', 'Ivanov', 'Burgas', '46')
let person3 = new Person('Stamat', 'Yordanov', 'Vidin', '24')
let person4 = new Person('Dragan', 'Ivanov', 'Gabrovo', '41')
let person5 = new Person('Petkan', 'Ivanov', 'Sofia', '32')
let person6 = new Person('Boiko', 'Borisov', 'Bankq', '50')
let person7 = new Person('Parvan', 'Ivanov', 'Pernik', '29')
let person8 = new Person('Mladen', 'Minchev', 'Zheleznitza', '30')
let person9 = new Person('Rumen', 'Zachinski', 'Silistra', '27')
let person10 = new Person('Desislava', 'Spasova', 'Sofia', '24')

const personList = []
personList.push(person, person1, person2, person3, person4, person5, person6, person7, person8, person9, person10)

function compareAge(a, b) {

    return a.age - b.age;
}
function compareName(a, b) {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.firstName.toUpperCase();
    const name2 = b.firstName.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

function compareSecondName(a, b) {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.lastName.toUpperCase();
    const name2 = b.lastName.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

function test(){
console.log(`Sorted By Age`);
console.log(personList.sort(compareAge));
console.log(`Sorted By First Name`);
console.log(personList.sort(compareName));
console.log(`Sorted By Last Name`);
console.log(personList.sort(compareSecondName));
}
test()