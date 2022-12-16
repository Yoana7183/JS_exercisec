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
    //get manager of this department
    getManagerName() {
        return this.manager.name

    }
    // loop into all employees
    loopThroughAllEmployees() {
        let currentEmployeeData;

        for (let i = 0; i < this.employees.length; i++) {
            currentEmployeeData = this.employees[i]
        }

        return currentEmployeeData
    };
    // add all vacantion days of staff into array for easy use in another methoods

    getAllStaffVacationDays() {
        let employeesData = this.loopThroughAllEmployees()

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
        if(allStaffVacationDate.length === 0){
            throw Error (' There is no employee vacation days')
        }
        let sumUp = 0

        for (let i = 0; i < allStaffVacationDate.length; i++) {
            sumUp += parseInt(allStaffVacationDate[i])

        }
        return sumUp
    }
    // separate calc on manager tax 
    calculateManagerFee() {
        if(this.manager === undefined){
            throw Error ('There is no manager')
        }
        let tax = 0
        if (this.manager.vacationDays === '20') {
            tax = (10 / 100) * this.manager.salary
        } if (this.manager.vacationDays === '30') {
            tax = (20 / 100) * this.manager.vacationDays
        }
        return tax
    }
    // calc employee tax
    calculateEmployeeFees() {

        let employeeData = this.loopThroughAllEmployees()
        let salary = 0
        let days = 0
        let tax = 0
        let departmentTax = 0
        var managerTax ;
        try {
             managerTax = this.calculateManagerFee()
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }

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
class Company {
    constructor(name) {
        this.name = name
        this.departmens = []
    }
    // add department
    addDepartment(department) {
        this.departmens.push(department)
    }

    getListOfDepartments() {
        return this.departmens
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
        if (!isFound) {
            return undefined
        }

    }
    //get manager name by department name
    getManagerByDepartmentName(departmentName) {
        let manager = this.getDepartmentDataByDepertmentName(departmentName)
        if (manager == undefined) {
            throw new Error('Invalid Department name')
        }
        return manager.getManagerName()
    }

    calculateTheSumOfVacationDaysForAllEmployeesInADepartment(nameOfDepartment) {
        let departmentVacancyDays = this.getDepartmentDataByDepertmentName(nameOfDepartment)
        if (departmentVacancyDays == undefined) {
            throw new Error('Invalid Department name')
        }

        return departmentVacancyDays.sumOfAllVacationDays()
    }

    calculateTheSumOfTheTaxesForAllEmployeeInADepartment(nameOfDepartment) {
        let departmentTax = this.getDepartmentDataByDepertmentName(nameOfDepartment)
        if (departmentTax == undefined) {
            throw new Error('Invalid Department name')
        }

        return departmentTax.calculateEmployeeFees()
    }

    calculateTheSumOfAllTaxesInCompany() {
        let departmentsNames;
        let allTaxes = 0
        for (let i = 0; i < this.departmens.length; i++) {
            departmentsNames = this.departmens[i].name
            allTaxes += this.calculateTheSumOfTheTaxesForAllEmployeeInADepartment(departmentsNames)
        }
        return allTaxes
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

let company = new Company('Company')
company.addDepartment(department1)
company.addDepartment(department2)
company.addDepartment(department3)

console.log(`Manager name : ${company.getManagerByDepartmentName('Marketing Department')}`);
console.log(`After the audit, a total of days of  ${company.calculateTheSumOfVacationDaysForAllEmployeesInADepartment('Marketing Department')} have left to all employees in team`);
console.log(`After the audit, a total of days of  ${company.calculateTheSumOfVacationDaysForAllEmployeesInADepartment('Technical Support Department')} have left to all employees in team`);
console.log(`After the audit, a total of days of  ${company.calculateTheSumOfVacationDaysForAllEmployeesInADepartment('Sale Department')} have left to all employees in team`);
console.log(`The total amount of all taxes is:${company.calculateTheSumOfTheTaxesForAllEmployeeInADepartment('Marketing Department')} `);
console.log(`The total amount of all taxes is:${company.calculateTheSumOfTheTaxesForAllEmployeeInADepartment('Sale Department')} `);
console.log(`The total amount of all taxes is:${company.calculateTheSumOfTheTaxesForAllEmployeeInADepartment('Technical Support Department')} `);
console.log(`Аll fees for the whole company are worth : ${company.calculateTheSumOfAllTaxesInCompany()} BGN`);

// Output in console:
/*Manager name : Dragan Petkov
After the audit, a total of days of  100 have left to all employees in his team
After the audit, a total of days of  110 have left to all employees in his team
After the audit, a total of days of  120 have left to all employees in his team
The total amount of all taxes is:2090
The total amount of all taxes is:1031
The total amount of all taxes is:826
Аll fees for the whole company are worth : 3947 BGN
If catch an err:
Manager name : Dragan Petkov
Error
Invalid Department name
*/