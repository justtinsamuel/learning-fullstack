// LOOPING

/*
// contoh for (kita tahu berapa kali pengulangan)
for(let i = 0; i < 3; i++){
    console.log(i);
}

// while saat kita tau bakal ngulang berapa kali
let i = 0;
while (i < 3){
    console.log('hello world');
    i++;
}

// while saat kita tau bakal ngulang berapa kali
let j = 0;
let mystatus = true;

while(mystatus){
    console.log(j);
    j++;
    if(j > 5){
        mystatus = false;
    }
}
*/

/*
// buat code print 1 s.d 10
// FOR
for (i = 1; i <= 10; i++){
    console.log(i);
}

// WHILE
let j = 1;
while (j <= 10){
    console.log(j);
    j++;
}
*/

// NESTED LOOP
// let temp = ' ';
// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 3; j++){
//         temp += 'x ';
//     }
//     console.log(temp);
//     temp = ' ';
// }

/*
// KOTAK
let temp = ' ';
for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
        if(i == 0 || i == 4 || j == 0 || j == 4){
            temp += 'x ';
        } else {
            temp += '  ';
        }
    }
    console.log(temp);
    temp = ' ';
}

// KOTAK TENARY
let tamp = ' ';
for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
        tamp += (i == 0 || i == 4 || j == 0 || j == 4) ? 'x ': '  ';
        }
    console.log(tamp);
    tamp = ' ';
}
*/

// PRINT 1, 12, 123, 1234, 12345

// let temp = '';
// for (let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         temp += j;
//     }
//     temp += '\n';
// }

// console.log(temp);

// SC 1 = Print 1 s.d 10, beri notes ganjil atau genap
// let num = 10;
// for (let i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(`${i} adalah angka genap`);
//     } else {
//         console.log(`${i} adalah angka ganjil`);
//     }
// }

// SC 2 = Cek jumlah dari faktor suatu bilangan
// let nums = 100;
// let faktor = 0;
// let daftarFaktor =[];

// for (let i = 1; i <= nums; i++){
//     if(nums % i == 0){
//         faktor ++;
//         daftarFaktor.push(i);
//     }
// }
// console.log(`jumlah faktor dari ${nums} adalah ${faktor} yaitu: ${daftarFaktor.join(', ')}`);

// SC 3 = cek apakah input adalah bilangan prima (hanya punya 2 faktor);

// let number = 1111;
// let factor = 0;

// for (let i = 1; i <= number; i++) {
//   // if untuk ++ nilai factor
//   if (number % i == 0) {
//     factor++;
//   }
// }

// if (factor === 2) {
//   console.log(`Nilai ${number} adalah bilangan prima, karena hanya memiliki 2 faktor`);
// } else if (factor !== 2) {
//   console.log(`Nilai ${number} adalah bukan bilangan prima, karena punya ${factor} faktor`);
// }

// SC 4 = Hitung hasil dari sebuah angka faktorial. Contoh 5! = 5, 4, 3, 2, 1
// let faktorial = 5;
// let hasil = 1;

// for (let i = faktorial; i >= 1; i--) {
//   hasil *= i;
//   console.log(`faktorial dari !${faktorial} adalah ${hasil}`);
// }

// SC 5, buat segitiga berdasarkan jumlah angka
let num = 5;
let a = '';

for (i = 0; i <= num; i++) {
    for (j = 0; j <= i; j++) {
        a += '# '
    }
    console.log(a);
    a = '';
}

