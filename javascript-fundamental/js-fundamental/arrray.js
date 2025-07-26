/*
    Array
    Format:
    let thisArray = [x, 3.1, true];
*/

// Basic Array, 1 data type
// let exampleInteger = [1, 2, 3, 4, 5];
// console.log(exampleInteger[4]); // print 5. Kalau print diatas jumlah array akan jadi Undefined.

// Basic Built-in Javascript: .length, .push, .pop bisa cek aja di w3schools = js_function

// Latihan 1, basic array
// let coffee = [`Arabica`, `Robusta`, `Mix Blend`];
// console.log(`Coffee List: `);
// for (i = 0; i < coffee.length; i++) {
//   console.log(`${i + 1}. ${coffee[i]}`);
// }

// Latihan 2, multidimension array
// let student = [
//   [1, "Vincent", 3.5],
//   [2, "Udin", 3.0],
//   [3, "Mamang", 2.1],
// ];

// for (let i = 0; i < student.length; i++) {
//   if (student[i][2] >= 3.0) {
//     console.log(
//       `${student[i][0]}. ${student[i][1]}, IPK = ${student[i][2]}, Lulus `
//     );
//   } else {
//     console.log(
//       `${student[i][0]}. ${student[i][1]}, IPK = ${student[i][2]}, Tidak Lulus `
//     );
//   }
// }

// // versi lebih simple
// let students = [[1, "Vincent", 3.5], [2, "Udin", 3.0], [3, "Mamang", 2.1],];

// for (i = 0; i < students.length; i++) {
//   let [id, nama, ipk] = students[i];
//   let status = ipk >= 3.0 ? "lulus" : "tidak lulus";
//   console.log(`${id}. ${nama}, IPK = ${ipk}, ${status}`);
// }

// SC 1 :
// let scores = [5, 2, 3, 1, 7, 8, 10, 12, 17];
// let totalScores = 0;

// for (let i = 0; i < scores.length; i++) {
//   totalScores += scores[i];
// }
// console.log(
//   `Average dari scores nya adalah ${(totalScores / scores.length).toFixed(2)}`
// );

// const scores = [5, 2, 3, 1, 7, 8, 10, 12, 17];

// // total declare awal nya, start dari 0, untuk nilai adalah value dari arraynya
// const totalScores = scores.reduce((total, nilai) => total + nilai, 0);
// const average = (totalScores / scores.length).toFixed(2);

// console.log(`Average dari scores nya adalah ${average}`);

// // // SC 2 : break kata jadi array
// let str = 'contoh aja ini mah';
// let arr = [];

// // Cara 1
// for (i = 0; i < str.length; i++){
//     if(str[i] !== ' '){
//         arr.push(str[i]);
//     }
// }
// console.log(arr);

// // CARA 2:
// // for (let letter of str){
// //     arr.push(letter);
// // }
// // console.log(arr);

// console.log('\n');
// console.log('Study Case 3: menunjukkan semua item dalam Array');

// // SC 3:
// let shoes = ["Adidas", "Nike", "Converse", "Puma"];
// let totalShoes = 0;
// let allShoes = 'Saya punya ';

// // CARA YANG BENER
// for (let i = 0; i < shoes.length; i++){
//     let lastIndex = shoes.length - 1;
//     if (i !== lastIndex){
//         allShoes += shoes[i] + ', ';
//     } else {
//         allShoes += 'dan ' + shoes[i] + '.';
//     }
// }
// console.log(allShoes);