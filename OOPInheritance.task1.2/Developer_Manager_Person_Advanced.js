class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`I'm ${this.name}, ${this.age} years old.`);

    }
    

}

class Developer extends Person {
    constructor(name, age, skills) {
        // call the parent constructor:
        super(name, age)
        this.skills = skills
      

    }
     greet1() {
       
       super.greet();
       console.log(`My skills are: ${this.skills}`);
    }
}




class Manager  {
    constructor(managerName, managerAge, managed) {
        
       
        this.managerName =managerName;
        this.managerAge =managerAge;
        this.managed = managed;
        console.log(this);
        
    }
    
    greet() {
        
        console.log(`I manage ${this.managerName}`);
      
    }


}


let pesho = new Developer('Pesho', 23, ['JS', 'React', 'Vue'])
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let gates = new Manager(('Bill Gates', 43, [maria,pesho]))

pesho.greet()
maria.greet()
gates.greet()


