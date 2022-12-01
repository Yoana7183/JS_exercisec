class Employee{
    constructor(name,email,vacationDays,salary){
        this.name = name;
        this.email = email
        this.vacationDays = vacationDays
        this.salary = salary
    }
}
class Manager{
    constructor(name){
        this.name = name
        this.listOfEmployee = []
    }
    addEmployee(...employee){
        this.listOfEmployee.push(employee)
    }
    getList(){
        console.log(this.listOfEmployee);
    }
}
let employee1 = new Employee ('Ivan Ivanov','ivan.ivanov@test.com','30','4000')
let employee2 = new Employee ('Dragan Petkov','dragan.petkov@test.com','20','2000')
let employee3 = new Employee ('Yordan Ivanov','yordan.ivanov@test.com','30','4200')
let employee4 = new Employee ('Asen Dimitrov','asen.dimitrov@test.com','20','3000')
let employee5 = new Employee ('Anelia Ivanova','anelia.ivanova@test.com','30','4200')
let employee6 = new Employee ('Mariq Petrova','mariq.petrova@test.com','20','2500')
let employee7 = new Employee ('Ivana Ivanova','ivana.ivanova@test.com','30','4000')
let employee8 = new Employee ('Marian Georgiev','marian.georgiev@test.com','30','4500')
let employee9 = new Employee ('Mladen Minchev','mladen.minchev@test.com','30','4100')
let employee10 = new Employee ('Parvan Ivanov','ivan.ivanov@test.com','20','2050')

let manager1 = new Manager ('Rumen Zachinski')
manager1.addEmployee(employee1,employee2,employee3,employee4,employee5)
let manager2 = new Manager ('Rumiana Simeonova')
manager2.addEmployee(employee6,employee7,employee8,employee9,employee10)
