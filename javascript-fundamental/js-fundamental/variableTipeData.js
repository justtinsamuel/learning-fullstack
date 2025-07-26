/*
Variable
ada yang primitif : string, number, boolean, undefined, null
ada yang non-primitif : object, array, function

Operator
ada aritmatika : + - * / % **
ada pembanding : ==, ===, !=, !==, >, <, >=, <=
*/

/* Latihan 1, buat volume kubus dan luas lingkaran
let s = 7; volumeKubus = s ** 3;
let phi = Math.PI; r = 7; luasLingkaran = phi * r ** 2;

console.log(`Volume kubus dari ${s} adalah ${volumeKubus}`);
console.log(`Luas lingkaran dari ${r} adalah ${luasLingkaran.toFixed(2)}`);
*/

/*
Study Case 1: algoritma, psuedocode, dan code untuk luas permukaan balok. (2*(p*l+p*t+l*t))
Study Case 2: algoritma, psuedocode, dan code untuk massa jenis suatu benda. (m / v).
Study Case 3: algoritma, psuedocode, dan code untuk volume tabung. (V = phi * r * r * T).

Algoritma & Psuedocode
SC 1:
LET p WITH ANY NUMBER; l WITH ANY NUMBER; t WITH ANY NUMBER;
LET luasPermukaanBalok WITH 2 MUL (p MUl l ADD p MUL t ADD l MUL t);
PRINT luasPermukaanBalok;

SC 2:
LET m WITH ANY NUMBER; v WITH ANY NUMBER; P WITH ANY NUMBER;
LET massaJenisBenda WITH P WITH m DIV v;

SC 3:
LET phi WITH PI; r WITH ANY NUMBER; T WITH ANY NUMBER;
*/

// SC 1
let p = 2;
let l = 4;
let t = 6;

const luasPermukaanBalok = 2 * (p * l + p * t + l * t);
console.log(
    `Luas Permukaan Balok dengan p = ${p}, l = ${l}, dan t = ${t} adalah ${luasPermukaanBalok}`
);

// SC 2
let m = 10;
let v = 3;

const rho = m / v;
console.log(
    `kemudian massa jenis benda dengan m = ${m} dan v = ${v} adalah ${rho.toFixed(2)}`
);

// SC 3
let r = 5;
const phi = Math.PI;
let T = 8;

const volumeTabung = Math.floor(phi * r ** 2 * T);
console.log(
    `dan volume tabung dengan r = ${r}, dan T = ${T} adalah ${volumeTabung}`
);

