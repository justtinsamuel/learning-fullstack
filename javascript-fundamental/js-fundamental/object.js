// /* Object
// Object, kumpulan nilai punya kunci

// let student = {
//     name : 'nama',
//     gpa : 3.99,
//     isGraduated : true,
// }

// Menggunakan KEY dan VALUE dengan TITIK DUA dan dipisahkan dengan KOMA.
// KEY harus unik
// Cara akses nya dengan menggunakan OBJECT(DOT)VALUE.
// console.log(student.name);
// console.log(student['isGraduated]);
// */

// // EXAMPLE 1: UBAH ARRAY JADI OBJECT dengan {jenis, harga, enak}
// let buah = ["durian", 75000, true];

// function arrayToObject(array) {
//   // Object kosong nya di buat dulu.
//   let object = {};

//   // memberi INDEX sebuah KEY
//   object.jenis = array[0];
//   object.harga = array[1];
//   object.enak = array[2];

//   // fungsi harus di return
//   return object;
// }

// console.log(arrayToObject(buah));

// // Selain KEY dan VALUE, di dalam OBJECT bisa juga ada METHOD / FUNCTION di dalam OBJECT
// // Cara panggil OBJECT yang ada METHOD nya.

// // Contoh:
// let car = {
//   // KEY
//   name: "BMW",
//   cc: 5000,

//   //METHOD
//   startEngine: function () {
//     console.log(`${this.name} mesin nyala`);
//   },
// };

// console.log(car.name);
// car.startEngine();

// let caca = {
//   nama: "Caca",
//   berat: 45,
//   tinggi: 155,
//   hobi: ["nonton", "makan", "nyanyi"],

//   sebutkanHobi: function () {
//     console.log(`Hobi ${this.nama}:`);
//     for (i = 0; i < this.hobi.length; i++) {
//       console.log(`${i + 1}. ${this.hobi[i]}`);
//     }
//   },

//   sebutkanBeratDanTinggi: function () {
//     console.log(
//       `berat badan ${this.nama} adalah ${this.berat} kg dengan tinggi ${this.tinggi} cm.`
//     );
//   },
// };

// caca.sebutkanHobi();
// caca.sebutkanBeratDanTinggi();

// let student = {

//     // KEY
//     name: 'admin',
//     gpa: 3.99,
//     isGraduated: true,

//     // Array
//     skill: ['JavaScript', 'PHP'],

//     // ANOTHER OBJECT
//     address:  {
//         city: 'Bandung',
//         province: 'West Java',
//     },

//     // METHODS
//     speak: function(){
//         console.log(`My name is ${this.name}, shalom`);
//     },

//     mentionAddress(){
//         console.log(`My address is in ${this.address.city}, ${this.address.province}`);

//     },

//     mentionSkills(){
//         console.log(`My skills are:`);
//         for (let i = 0; i < this.skill.length; i++){
//             console.log(`${i+1}. ${this.skill[i]}`);
//         }
//     }
// }

// student.speak();
// student.mentionAddress();
// console.log(student['skill']);
// student.mentionSkills();

// Array of Objects
// let items = [
//   {
//     id: 1,
//     name: "iPhone 16 pro max",
//     type: "gadget",
//     price: 15000000,
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     name: "Samsung s25",
//     type: "gadget",
//     price: 14000000,
//     isAvailable: false,
//   },
//   {
//     id: 3,
//     name: "Asus ROG Phone",
//     type: "gaming phone",
//     price: 14500000,
//     isAvailable: true,
//   },
// ];

// function showItem() {
//   console.log("List Item: ");
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].isAvailable === true) {
//       console.log(`${i + 1}. [X], ${items[i].name}`);
//     } else {
//       console.log(`${i + 1}. [ ], ${items[i].name}`);
//     }
//   }
// }
// showItem(items);

// // With Ternary Operator
// function showItem() {
//   console.log("List Item: ");
//   for (let i = 0; i < items.length; i++) {
//     items[i].isAvailable === true
//       ? console.log(`${i + 1}. V, ${items[i].name}`)
//       : console.log(`${i + 1}. X, ${items[i].name}`);
//   }
// }

// const product = {
//   id: "ELD2807",
//   name: "Koenigsegg Agera RS",
//   price: 1000000000,
//   stock: 2,
//   category: "Sport Car",

//   discount: function () {
//     return this.price * 0.01;
//   },
// };

// console.log(product.name);
// console.log(product.discount());

// Contoh dalam OBJECT ada ARRAY, di dalamnya ARRAY ada OBJECT lagi.


// OBJECT
const tokoOnline = {
    // KEY VALUE
    namaToko : 'My Olshop',
    product : [
        {
            id : "B001",
            name : "Sport Shoes Nike",
            price : 1000000,
            category : {
                main : 'sepatu',
                sub : 'sport',
            },
            review : [
                {
                    user : 'Mas Prab',
                    rating : 5,
                },
                {
                    user : 'Mas Jok',
                    rating : 4,
                }
            ]
        },
    ]
}

console.log(tokoOnline.product[0].review);
