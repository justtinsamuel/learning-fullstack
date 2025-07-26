class Vehicle {
    constructor(name, type, price, isAvailable) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.isAvailable = isAvailable;
    }
}

class Sedan extends Vehicle {
    constructor(name, price, isAvailable, trunkSize) {
        super(name, 'Sedan', price, isAvailable);
        this.trunkSize = trunkSize;
    }
}   

class SUV extends Vehicle {
    constructor(name, type, price, isAvailable, groundClearance) {
        super(name, type, price, isAvailable);
        this.groundClearance = groundClearance;
    }
}

class Motorcycle extends Vehicle {
    constructor(name, type, price, isAvailable, engineType) {
        super(name, type, price, isAvailable);
        this.engineType = engineType;
    }
}

let sedan = new Sedan('Honda Accord', 300000, true, '500L');
console.log(sedan);
console.log(sedan instanceof Sedan);
console.log(sedan instanceof Vehicle);
console.log(typeof sedan, typeof Sedan, typeof Vehicle);

