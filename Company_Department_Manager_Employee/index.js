class Employee {
    constructor(name, email, vacationDays, salary) {
        this.name = name;
        this.email = email
        this.vacationDays = vacationDays
        this.salary = salary
    }
}
class Manager {
    constructor(name) {
        this.name = name
        this.listOfEmployee = []
    }
    getManagerName() {
        console.log(this.name);
        return this.name
    }
    addEmployee(...employee) {
        this.listOfEmployee.push(employee)
    }
    getList() {
        console.log(this.listOfEmployee);

    }
    getAllEmployeesData() {
        let vacationDays;
        for (let i = 0; i < this.listOfEmployee.length; i++) {
            vacationDays = this.listOfEmployee[i]
            return vacationDays
        }
    }
    getAllVacationDays() {
        let dataOfEmployees = this.getAllEmployeesData()
        const vacancyDays = []
        dataOfEmployees.forEach(element => {

            vacancyDays.push(element.vacationDays)


        });
        return vacancyDays

    }
    sumOfAllVacationDays() {

        let allStaffVacationDate = this.getAllVacationDays()
        let sumUp = 0

        for (let i = 0; i < allStaffVacationDate.length; i++) {
            sumUp += parseInt(allStaffVacationDate[i])

        }
        console.log(`After the audit, the manager name: ${this.name} reports a total of ${sumUp} days of have left to all employees in his team`);
        return sumUp
    }

}

class Department {
    constructor(name) {
        this.name = name
        this.departmentManagerAndEmployees = []
    }
    addManagerAndTeam(managerAndTeam) {
        this.departmentManagerAndEmployees.push(managerAndTeam)
    }
    getManagerAndTeamList() {
        console.log(this.departmentManagerAndEmployees);
    }
    getManagerName(departmentName) {
        let nameOfManager
        if (departmentName == this.name) {
            for (let i = 0; i < this.departmentManagerAndEmployees.length; i++) {
                nameOfManager = this.departmentManagerAndEmployees[i]
            }
            console.log(nameOfManager.name);

        }
        return nameOfManager
    }


}
class Reports {
    constructor() {
        this.departmens = []
    }
    addDepartment(department) {
        this.departmens.push(department)
    }
    getListOfDepartments() {
        console.log(this.departmens);
    }
    getManagerNameByDepartmentName(departmentName) {
        let nameOfCurrentDepartment;
        let isFound = false
        for (let i = 0; i < this.departmens.length; i++) {
            nameOfCurrentDepartment = this.departmens[i]

            if (nameOfCurrentDepartment.name == departmentName) {
                console.log(`The manager of ${nameOfCurrentDepartment.name} is:`);
                nameOfCurrentDepartment.getManagerName(nameOfCurrentDepartment.name)

                isFound = true
                return nameOfCurrentDepartment
            }
            if (isFound = false) {
                return undefined
            }

        }
        return nameOfCurrentDepartment
    }
    calculateTheSumOfVacationDaysForAllEmployeesInADepartment(nameOfDepartment) {
        let foundedDepartment = this.getManagerNameByDepartmentName(nameOfDepartment)
        let vacationDays=foundedDepartment.getManagerName(nameOfDepartment)
       console.log(vacationDays.sumOfAllVacationDays());

    }
    calculateTheSumOfTheTaxesForAllEmployeeInADepartment(nameOfDepartment){
        
    }
}
let employee1 = new Employee('Ivan Ivanov', 'ivan.ivanov@test.com', '30', '4000')
let employee2 = new Employee('Dragan Petkov', 'dragan.petkov@test.com', '20', '2000')
let employee3 = new Employee('Yordan Ivanov', 'yordan.ivanov@test.com', '30', '4200')
let employee4 = new Employee('Asen Dimitrov', 'asen.dimitrov@test.com', '20', '3000')
let employee5 = new Employee('Anelia Ivanova', 'anelia.ivanova@test.com', '30', '4200')
let employee6 = new Employee('Mariq Petrova', 'mariq.petrova@test.com', '20', '2500')
let employee7 = new Employee('Ivana Ivanova', 'ivana.ivanova@test.com', '30', '4000')
let employee8 = new Employee('Marian Georgiev', 'marian.georgiev@test.com', '30', '4500')
let employee9 = new Employee('Mladen Minchev', 'mladen.minchev@test.com', '30', '4100')
let employee10 = new Employee('Parvan Ivanov', 'ivan.ivanov@test.com', '20', '2050')

let manager1 = new Manager('Rumen Zachinski')
manager1.addEmployee(employee1, employee2, employee3, employee4, employee5)


let manager2 = new Manager('Rumiana Simeonova')
manager2.addEmployee(employee6, employee7, employee8, employee9, employee10)

let department1 = new Department('Sale Department')
department1.addManagerAndTeam(manager1)

let department2 = new Department('Marketing Department')
department2.addManagerAndTeam(manager2)



let report = new Reports()
report.addDepartment(department1)
report.addDepartment(department2)
report.getListOfDepartments()

report.getManagerNameByDepartmentName('Marketing Department')

report.calculateTheSumOfVacationDaysForAllEmployeesInADepartment('Marketing Department')
report.calculateTheSumOfTheTaxesForAllEmployeeInADepartment('Marketing Department')

