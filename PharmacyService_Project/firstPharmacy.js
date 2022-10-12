
class Pharmacy {

    constructor(name, serviceList) {
        this.name = name
        this.serviceList = serviceList
        
        
    }

    customerServiceInAscendingOrder() {

        for (let i = 0; i < serviceList.length; i++) {
            console.log(`${this.name} 
            serve client in queue order: ${this.serviceList[i].queueOrder} 
            name: ${this.serviceList[i].name} 
            age: ${this.serviceList[i].age}
            prescription: ${this.serviceList[i].prescription} `)
        }
    }

    customerServiceInDescendendingOrder() {  

        for (let i = serviceList.length-1; i >=0; i--) {
            console.log(`${this.name} 
            serve client in queue order: ${this.serviceList[i].queueOrder} 
            name: ${this.serviceList[i].name} 
            age: ${this.serviceList[i].age}
            prescription: ${this.serviceList[i].prescription} `)
        }
       
    }

}

class Customer {

    constructor(queueOrder, name, age, prescription) {
        this.queueOrder = queueOrder
        this.name = name;
        this.age = age;
        this.prescription = prescription
    }
}

let customer1 = new Customer(1, 'Ivan Ivanov', 26, 'Analgin: 10 amp , Vit "C": amp x10')
let customer2 = new Customer(2, 'Dragan Petkov', 31, 'Paracetamol: 1 , Vit "D": susp x1')
let customer3 = new Customer(3, 'Petkan Petrov', 22, 'Nurofen Stop Cold: 50mg x1')
let customer4 = new Customer(4, 'Maria Ivanova', 50, 'Magnesium: 1 tab , Vit "C": amp x10')

const serviceList = []
serviceList.push(customer1, customer2, customer3, customer4)

let pharmacy = new Pharmacy('Pharmacy X', serviceList)
// console.log(pharmacy.customerServiceInAscendingOrder());
console.log(pharmacy.customerServiceInDescendendingOrder());