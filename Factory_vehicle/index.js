
class Car {
    constructor(name, wheels, maxCarryingWeight) {
        this.name = name
        this.wheels = wheels
        this.maxCarryingWeight = maxCarryingWeight
    }
}

class Truck {
    constructor(name, wheels, maxCarryingWeight) {
        this.name = name
        this.wheels = wheels
        this.maxCarryingWeight = maxCarryingWeight
    }
}

class Motorcycle {
    constructor(name, wheels, maxCarryingWeight) {
        this.name = name
        this.wheels = wheels
        this.maxCarryingWeight = maxCarryingWeight
    }
}

class Bus {
    constructor(name, wheels, maxCarryingWeight) {
        this.name = name
        this.wheels = wheels
        this.maxCarryingWeight = maxCarryingWeight
    }
}

function FactoryVehicle(name, wheels, maxCarryingWeight) {

    if (wheels === 2 && maxCarryingWeight >= 120) {
        return new Motorcycle(name, wheels, maxCarryingWeight)
    }
    if (wheels === 4 && maxCarryingWeight <= 500) {
        return new Car(name, wheels, maxCarryingWeight)
    }
    if (wheels >= 6 && maxCarryingWeight <= 1500) {
        return new Bus(name, wheels, maxCarryingWeight)
    }

    if (wheels <= 6 && maxCarryingWeight <= 5500) {
        return new Truck(name, wheels, maxCarryingWeight)
    }
    else { console.log(`no such vehicle`); }
    return
}

let vehicle = FactoryVehicle('Toyota', 2, 130);
console.log(vehicle);
let vehicle1 = FactoryVehicle('Mazda', 4, 499)
console.log(vehicle1);
let vehicle2 = FactoryVehicle('Mercedes', 7, 1200)
console.log(vehicle2);
let vehicle3 = FactoryVehicle('Mercedes', 6, 1200)
console.log(vehicle3);
let vehicle4 = FactoryVehicle('Mercedes - Benz ', 6, 1700)
console.log(vehicle4);
let vehicle5 = FactoryVehicle('Tir', 9, 1200)
console.log(vehicle5);
let vehicle6 = FactoryVehicle('Tir', 9, 5600)
console.log(vehicle6);
