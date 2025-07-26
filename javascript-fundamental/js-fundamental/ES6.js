// // /*
// // 3 cara declare function

// // 1. function declare:
// // function hello(){
// //     return..
// // }

// // 2. function expression:
// // const hello = function (){
// //     return..
// // }

// // 3. function arrow:
// // const hello = () => {
// //     return
// // }

// // function arrow, kekurangan:
// //     1.

// // */

// // // Hoisting = deklarasi variable dan function (arrow function gak bisa hoisting). Harus declare before buat code apapun dulu, biar lebih clean.
// // hello();

// // function hello(){
// //     console.log('hello world');
// // }

// // x = 11;
// // console.log(x);
// // let x = 10;

// // y = 11;
// // console.log(x);
// // var y = 10;

// // // console.log(navigator.userAgent);

// // // normal function
// // function total(a,b){
// //     return a + b;
// // }

// // // arrow function
// // const totall = (a,b) => a + b; // default nya return.

// // // result nya sama 3
// // console.log(total(1,2));
// // console.log(totall(1,2));

// // // High order function atau built-in function.

// // // forEach()
// // // versi manual
// // let numbers = [1, 2, 3];

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }
// // console.log("\n");

// // // versi forEach()
// // let angka = [1, 2, 3];

// // angka.forEach((element) => {
// //   console.log(element);
// // });
// // console.log("\n");

// // // versi forEach() misal butuh index nya juga.
// // angka.forEach((element, idx) => {
// //   console.log(`index ke ${idx} adalah ${element}`);
// // });

// // // contoh object di dalam array
// // const product = [
// //   { name: "dennim", price: 150000 },
// //   { name: "jacket", price: 210000 },
// //   { name: "shoes", price: 220000 },
// // ];

// // product.forEach((element, idx) => {
// //   const hargaFormat = element.price.toLocaleString("id-ID", {
// //     style: "currency",
// //     currency: "IDR",
// //   });

// //   console.log(`${idx + 1}. Untuk ${element.name} harganya ${hargaFormat}`);
// // });

// // // filter angka genap
// // const number = [1, 2, 3, 4, 5];
// // const angkaGenap = number.filter((element) => element % 2 === 0);
// // const angkaUnder3 = number.filter((element) => element < 3);

// // console.log(angkaGenap);
// // console.log(angkaUnder3);

// // Contoh penggunaan FILTER() dan FOREACH() dan MAP
// const product = [
//   { name: "dennim", price: 150000 },
//   { name: "jacket", price: 210000 },
//   { name: "shoes", price: 220000 },
// ];

// // FILTER
// maxEligible = 175000;
// const productMahal = product.filter(element => element.price >= maxEligible);

// // FOREACH
// console.log(`Barang yang diatas 175.000 adalah:`)
// productMahal.forEach((element, idx) => console.log(`${idx+1}. ${element.name}`));

// // MAP. belom nih
// const newProduct = productMahal.map((element) => element.price * 2);
// console.log(newProduct)

// // // Contoh MAP sederhana
// // const angka = [1,2,3,4,5];
// // const double = angka.map((elementlagi) => elementlagi*2);
// // console.log(double);

// const product = [
//   { name: "dennim", price: 150000 },
//   { name: "jacket", price: 210000 },
//   { name: "shoes", price: 220000 },
// ];

// const newProduct = product.map(
//   (items) => `${items.name} seharga Rp. ${items.price * 1.2}`
// );
// console.log(newProduct);

// filter, ambil bagian dari array.
// foreach, loops alternatif dari for.
// map, create array baru, perlu di state nama array baru nya apa.

// PUSH, nambah elemen ke ARRAY

// const product = [
//   { name: "dennim", price: 150000 },
//   { name: "jacket", price: 210000 },
//   { name: "shoes", price: 220000 },
// ];

// console.log(product);

// // PUSH
// product.push({
//     name: 'tas', price: 115000,
// })

// console.log(product);

// // POP
// product.pop();
// console.log(product);

/* CRUD (Create, Read, Update, Delete) */

let students = [
  { nim: 1, name: "Prabo", major: "Computer Science", isGraduated: true },
  { nim: 2, name: "Joko", major: "Computer Science", isGraduated: false },
  { nim: 3, name: "Mega", major: "Accounting", isGraduated: true },
];

// READ
showStudents = () => {
  console.log(`Student list:`);
  students.forEach((stud, idx) => {
    stud.isGraduated
      ? console.log(`${idx + 1}. [v] ${stud.name}, ${stud.major}`)
      : console.log(`${idx + 1}. [ ] ${stud.name}, ${stud.major}`);
  });
};

// CREATE
addStudents = (name, major) => {
  let lastIndex = students.length - 1;
  let nim = students[lastIndex].nim++;
  let isGraduated = false;

  students.push({
    nim,
    name,
    major,
    isGraduated,
  });
};

showStudents();
console.log("\n");
addStudents("Jojon", "Accounting");
showStudents();
console.log("\n");

// UPDATE
function updateStudents(nim, newName) {
  let isUpdated = false;

  students.forEach((stud) => {
    if (stud.nim === nim) {
      stud.name = newName;
      isUpdated = true;
    }
  });

  if (!isUpdated) {
    console.log(`NIM ${nim} tidak ditemukan!`);
  }
}

updateStudents(1, "Prabowo");
showStudents();
console.log("\n");

// DELETE
function deleteStudents(nim) {
  let temp = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].nim !== nim) {
      temp.push(students[i]);
    } else {
    }
  }
  students = temp;
}

deleteStudents(2);
showStudents();
