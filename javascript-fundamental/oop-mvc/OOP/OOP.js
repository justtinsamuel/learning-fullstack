// // Object Oriented Programming

// /* OOP 
// 1. Class = Blueprint dari Object
// 2. Key, atribute, method
// 3. Instance hasil dari object yang sudah jadi dari class
// // Kelebihan OOP : Paralel Dev, Reuseable, Scalable
// // Kekurangan OOP : bisa duplicate

// CLASS:
// */

class Vehicle {
  constructor(name, type, price, isAvailable) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.isAvailable = isAvailable;
  }

  startEngine() {
    console.log("Start Engine");
  }
  stopEngine() {
    console.log("Stop Engine");
  }
    showInfo() {
        console.log(
        `Name: ${this.name}, Type: ${this.type}, Price: ${this.price}, Available: ${this.isAvailable}`
        );
    }
    availableStatus() {
        return this.isAvailable ? "Available" : "Not Available";
    }
}

// // Instance nya adalah:
let vehicle = new Vehicle("Civic", "Sedan", 1000000, true);
let vehicle2 = new Vehicle("Avanza", "MPV", 2000000, false);
let vehicle3 = new Vehicle("Kawasaki Ninja", "Motorcycle", 1500000, true);
console.log(typeof vehicle, typeof vehicle2, typeof vehicle3, vehicle, vehicle2, vehicle3);
vehicle.startEngine();
vehicle2.stopEngine();
vehicle3.showInfo();
console.log(vehicle.availableStatus());
console.log(vehicle2.availableStatus());
console.log(vehicle3.availableStatus());

/*
TEORI OOP:
1. Encapsulation: Menyembunyikan data dan hanya expose method yang diperlukan. Public, Private, Protected.
2. Inheritance: Mewarisi properti dan method dari class lain.
3. Polymorphism: Menggunakan method yang sama dengan cara berbeda pada class yang berbeda.
4. Abstraction: Menyembunyikan detail implementasi dan hanya menampilkan fungsionalitas penting.
*/

// // Contoh Inheritance
