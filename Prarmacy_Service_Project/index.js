class Drug {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
}
let drug1 = new Drug('Analgin 10 amp', 7.80)
let drug2 = new Drug('Analgin tab', 3.80)
let drug3 = new Drug('Paracetamol ', 4.40)
let drug4 = new Drug('Nurofen Stop Cold 50mg ', 6.30)
let drug5 = new Drug('Nurofen Stop Cold 100mg', 9.80)
let drug6 = new Drug('Magnesium', 5.20)
let drug7 = new Drug('Vigantol oil', 2.90)
let drug8 = new Drug('Furanthril 40 mg', 1.80)
let drug9 = new Drug('Prim Oil 60tabs', 17.00)


class MedicineGroup {

    constructor(groupName) {
        this.groupName = groupName;
        this.medicines = new Map;
    }

    addMedicine(drug, quantity) {
        this.medicines.set(drug, quantity);
    }

    removeMedicineQuantity(drugName, updatedQuantity) {
        let quantity = this.medicines.get(drugName);
        console.log(quantity);

        if (this.medicines.quantity != undefined) {

        }

    }
}


let analgitics = new MedicineGroup("Analgitics");
analgitics.addMedicine(drug1, 10)

let nsaid = new MedicineGroup('NSAID')
nsaid.addMedicine(drug3, 20)
nsaid.addMedicine(drug4, 20)
nsaid.addMedicine(drug5, 20)

let foodSuplement = new MedicineGroup('Food supplement')
foodSuplement.addMedicine(drug6, 30)
foodSuplement.addMedicine(drug7, 20)
foodSuplement.addMedicine(drug9, 30)

let diuretic = new MedicineGroup('Diuretics')
diuretic.addMedicine(drug8, 49)

class Customer {

    constructor(name, age, group, prescribedMedication, prescribedAmount) {
        this.name = name;
        this.age = age;
        this.group = group
        this.prescribedMedication = prescribedMedication
        this.prescribedAmount = prescribedAmount
    }
}

let customer1 = new Customer('Ivan Ivanov', 26, 'Analgitics', 'Analgin 10 amp', '2')
// let customer2 = new Customer('Dragan Petkov', 31, nsaid, 'Paracetamol tab', '1')
// let customer3 = new Customer('Petkan Petrov', 22, nsaid, 'Nurofen Stop Cold 50mg ', '1')
// let customer4 = new Customer('Maria Ivanova', 50, foodSupplement, 'Magnesium', '1')

class Pharmacy {

    constructor(name) {
        this.name = name

        this.medicinesGroup = []
    }


    addMedicineGroup(medicineGroup) {
        this.medicinesGroup.push(medicineGroup)
        console.log(this.medicinesGroup);
    }

    findАМedication(customer) {
        console.log(customer);

        let drugGroup;
        let drug;

        for (let i = 0; i < this.medicinesGroup.length; i++) {
            if (customer.group == this.medicinesGroup[i].groupName) {
                drugGroup = this.medicinesGroup[i].medicines

                if (drugGroup.keys().next().value.name == customer.prescribedMedication)
                    drug = drugGroup.keys().next().value
                console.log(`Your prescription in available : ${drug}`);
            }
        }
        console.log(`recipe in find${drug}`);
        return drug


    }
    sellМedicine(customer) {

        let drug = this.findАМedication(customer)
        console.log(drug);
        let customerQuantity = customer.prescribedAmount
        let totalBill = drug.price * customerQuantity
        console.log(`Your total bill is : ${totalBill}`);

        let drugGroup;

        for (let i = 0; i < this.medicinesGroup.length; i++) {
            if (customer.group == this.medicinesGroup[i].groupName) {
                drugGroup = this.medicinesGroup[i].medicines
                let currentStock = drugGroup.get(drug);
                let updatedStock = currentStock - customerQuantity
                drugGroup.set(drug, updatedStock)
            }
        }
        console.log(drugGroup);
    }

}


let pharmacy = new Pharmacy('Pharmacy X')
pharmacy.addMedicineGroup(analgitics)
pharmacy.addMedicineGroup(nsaid)
pharmacy.addMedicineGroup(foodSuplement)
pharmacy.addMedicineGroup(diuretic)
pharmacy.findАМedication(customer1)
pharmacy.findАМedication(customer1)
pharmacy.sellМedicine(customer1)
pharmacy.sellМedicine(customer1)
pharmacy.sellМedicine(customer1)



