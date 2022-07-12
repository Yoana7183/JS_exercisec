const Person = {
    Department: 'Marketing',
    id: 100
};

const Developer = Object.create(Person)
Developer.skillset = [];
Developer.test = 'TEST'
Developer.log = console.log(`Hi, I'm ${this.Name} and I'm ${this.Age} years old 
// I know ${this.skillset}`)
// console.log(Developer);


const Petur = Object.create(Developer)
Petur.Name = 'Petar Petrov';
Petur.Age = 19;
Petur.skillset = ['JavaScript', 'Angular', 'React', 'Vue'];
Petur.log = console.log(`Hi, I'm ${this.Name} and I'm  ${this.Age} years old 
// I know ${this.skillset}`)


const Ava = Object.create(Developer)
Ava.Name = 'Ava Ava';
Ava.Age = 22;
Ava.skillset = ['JavaScript', 'Angular'];
Ava.log = console.log(`Hi, I'm ${Developer.Name} and I'm  ${Developer.Age} years old 
// I know ${Developer.skillset}`)


const Manager = Object.create(Person);
Manager.Name = 'Bill Gates';
Manager.Age = 43;
Manager.managed = listManageName(Petur.Name);

const BillManager = Object.create(Manager);
BillManager.Name = 'Bill Gates';
BillManager.Age = 43;
BillManager.managed = listManageName(Petur.Name);


var Dev =[Petur,Ava];
var Managers = [Manager,BillManager];
console.log(Dev);
console.log(Managers);


function listManageName() {
    console.log(`Hi, I'm ${Manager.Name} and I'm ${Manager.Age} years old 
// I managed ${Petur.Name}, ${Developer.Name}`);
}
