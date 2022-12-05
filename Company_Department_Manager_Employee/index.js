"use strict";
class Employee {
    constructor(name, email, vacationDays, salary) {
        this.name = name;
        this.email = email
        this.vacationDays = vacationDays
        this.salary = salary
    }
}

class Department {
    constructor(name, manager) {
        this.manager = manager
        this.name = name
        this.employees = []
    }
//add employees in department
    addTeam(...employee) {
        this.employees.push(employee)
    }

    getTeam() {
        console.log(this.employees);
    }
//get manager of this department
    getManagerName() {
        console.log(this.manager.name);

    }
    // loop into all employees
    getAllEmployeesData() {
        let currentEmployeeData;

        for (let i = 0; i < this.employees.length; i++) {
            currentEmployeeData = this.employees[i]
        }

        return currentEmployeeData
    };
    // add all vacantion days of staff into array for easy use in another methoods

    getAllStaffVacationDays() {
        let employeesData = this.getAllEmployeesData()

        const vacancyDays = []
        employeesData.forEach(element => {
            vacancyDays.push(element.vacationDays)

        });
        // add manager days in array of staff vacation days
        vacancyDays.push(this.manager.vacationDays)
        return vacancyDays

    }
// sum up all employee vacation days in department
    sumOfAllVacationDays() {

        let allStaffVacationDate = this.getAllStaffVacationDays()
        let sumUp = 0

        for (let i = 0; i < allStaffVacationDate.length; i++) {
            sumUp += parseInt(allStaffVacationDate[i])

        }
        return sumUp
    }
    // separate calc on manager tax 
    calculateManagerFee() {
        let tax = 0
        if (this.manager.vacationDays === '20') {
            tax = (10 / 100) * this.manager.salary
        } if (this.manager.vacationDays === '30') {
            tax = (20 / 100) * this.manager.vacationDays
        }
        return tax
    }
    // calc employee tax
    defineEmployeeFee() {

        let employeeData = this.getAllEmployeesData()
        let salary = 0
        let days = 0
        let tax = 0
        let departmentTax = 0
        let managerTax = this.calculateManagerFee()

        for (let i = 0; i < employeeData.length; i++) {
            days = employeeData[i].vacationDays
            salary = employeeData[i].salary

            if (days === '20') {
                tax = (10 / 100) * salary
                departmentTax += tax
            } if (days === '30') {
                tax = (20 / 100) * salary
                departmentTax += tax
            }
        }
        departmentTax = departmentTax + managerTax

        return departmentTax
    }
}
class Reports {
    constructor() {
        this.departmens = []
    }
// add department
    addDepartment(department) {
        this.departmens.push(department)
    }

    getListOfDepartments() {
        console.log(this.departmens);
    }
// get department data by name
    getDepartmentDataByDepertmentName(departmentName) {
        let nameOfCurrentDepartment;
        let isFound = false
        for (let i = 0; i < this.departmens.length; i++) {
            nameOfCurrentDepartment = this.departmens[i]

            if (nameOfCurrentDepartment.name == departmentName) {
                isFound = true
                return nameOfCurrentDepartment
            }

        }
        if (isFound == false) {
            return undefined
        }

    }
    //get manager name by department name
    getMANAGERnameByDepartmentName(departmentName) {
        let currentDepartment = this.getDepartmentDataByDepertmentName(departmentName)
        console.log(`Manager in ${currentDepartment.name} is ${currentDepartment.manager.name}`);

    }

    calculateTheSumOfVacationDaysForAllEmployeesInADepartment(nameOfDepartment) {
        let foundedDepartment = this.getDepartmentDataByDepertmentName(nameOfDepartment)
        console.log(`After the audit, the manager name: ${foundedDepartment.manager.name} reports a total of days of ${foundedDepartment.sumOfAllVacationDays()}  have left to all employees in his team`);
    }

    calculateTheSumOfTheTaxesForAllEmployeeInADepartment(nameOfDepartment) {
        let foundedDepartment = this.getDepartmentDataByDepertmentName(nameOfDepartment)
        let fee = foundedDepartment.defineEmployeeFee()
        return fee
    }
// only display calculation
    displayCalculatedSumOfTaxesByDepartment(nameOfDepartment){
        let tax = this.calculateTheSumOfTheTaxesForAllEmployeeInADepartment(nameOfDepartment)
        console.log(`The total amount of all taxes in ${nameOfDepartment} is ${tax} BGN `);
    }

    calculateTheSumOfAllTaxesInCompany(){
        let departmentsNames;
        let allTaxes = 0
    for(let i=0;i<this.departmens.length;i++){
        departmentsNames = this.departmens[i].name
        allTaxes += this.calculateTheSumOfTheTaxesForAllEmployeeInADepartment(departmentsNames) 
    }
    console.log(`Аll fees for the whole company are worth ${allTaxes}`);
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
let employee10 = new Employee('Parvan Ivanov1', 'ivan.ivanov@test.com', '20', '2050')
let employee11 = new Employee('Ivana Ivanova2', 'ivan.ivanov@test.com', '30', '2050')
let employee12 = new Employee('Parvan Ivanov3', 'ivan.ivanov@test.com', '20', '2050')
let employee13 = new Employee('Parvan Ivanov4', 'ivan.ivanov@test.com', '20', '2050')
let employee14 = new Employee('Parvan Ivanov5', 'ivan.ivanov@test.com', '20', '2050')
let employee15 = new Employee('Parvan Ivanov6', 'ivan.ivanov@test.com', '20', '2050')
let employee16 = new Employee('Parvan Ivanov7', 'ivan.ivanov@test.com', '20', '2050')
let employee17 = new Employee('Parvan Ivanov8', 'ivan.ivanov@test.com', '20', '2050')
let employee18 = new Employee('Parvan Ivanov9', 'ivan.ivanov@test.com', '20', '2050')
let employee19 = new Employee('Parvan Ivanov10', 'ivan.ivanov@test.com', '20', '2050')
let employee20 = new Employee('Parvan Ivanov11', 'ivan.ivanov@test.com', '20', '2050')


let department1 = new Department('Sale Department', employee1)
department1.addTeam(employee10, employee11, employee13, employee12)

let department2 = new Department('Marketing Department', employee2)
department2.addTeam(employee5, employee6, employee7)

let department3 = new Department('Technical Support Department', employee3)
department3.addTeam(employee14, employee15, employee16, employee17)

let report = new Reports()
report.addDepartment(department1)
report.addDepartment(department2)
report.addDepartment(department3)
report.getMANAGERnameByDepartmentName('Marketing Department')
report.calculateTheSumOfVacationDaysForAllEmployeesInADepartment('Marketing Department')
report.calculateTheSumOfVacationDaysForAllEmployeesInADepartment('Technical Support Department')
report.calculateTheSumOfVacationDaysForAllEmployeesInADepartment('Sale Department')
report.displayCalculatedSumOfTaxesByDepartment('Marketing Department')
report.displayCalculatedSumOfTaxesByDepartment('Sale Department')
report.displayCalculatedSumOfTaxesByDepartment('Technical Support Department')
report.calculateTheSumOfAllTaxesInCompany()

// result in console:
/*Manager in Marketing Department is Dragan Petkov
After the audit, the manager name: Dragan Petkov reports a total of days of 100  have left to all employees in his team
After the audit, the manager name: Yordan Ivanov reports a total of days of 110  have left to all employees in his team
After the audit, the manager name: Ivan Ivanov reports a total of days of 120  have left to all employees in his team  
The total amount of all taxes in Marketing Department is 2090 BGN 
The total amount of all taxes in Sale Department is 1031 BGN
The total amount of all taxes in Technical Support Department is 826 BGN 
Аll fees for the whole company are worth 3947*/