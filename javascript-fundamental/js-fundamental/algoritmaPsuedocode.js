// ALGORITMA PSUEDOCODE

/*
# Study Case 1
Hitung luas persegi panjang:

Jawab:
Algoritma:
tentukan variable panjang
tentukan variable lebar
tentukan variable luas persegi panjang dengan panjang x tinggi
tampilkan hasil luas

Psuedocode:
STORE panjang WITH 4;
STORE lebar WITH 2;
STORE luas persegi panjang WITH panjang MUL lebar;
PPRINT luas persegi panjang;

Code:
let panjang = 4;
let lebar = 2;
let luasPersegiPanjang = panjang * lebar;
console.log(luasPersegiPanjang);
*/

/*
# Study Case 2
Hitung luas lingkaran: phi * r * r;

Algoritma:
tentukan variable phi;
tentukan variable r;
tentukan luasLingkaran;
buat luarLingkaran = phi * r * r;
tampilkan luasLingkaran

Psuedocode:
STORE phi WITH 3,14;
STORE r with 7;
STORE luasLingkaran = phi MUL r MUL r;
PRINT luasLingkaran;

Code:
const phi = 3.14;
let r = 7;
let luasLingkaran = phi * r * r;
console.log(luasLingkaran);
*/

/*
# Study Case 3
Hitung setengah luas volume bola;

Algoritma:
tentukan variable phi;
tentukan variable r;
tentukan volume bola;
buat volume bola = 4/3*phi*r*r*r;
tampilkan volume bole / 2;

Psuedocode:
STORE phi WITH 3.14;
STORE r WITH 7;
STORE volumeBola WITH 4/3 MUL phi MUL r MUL r MUL r;
tampilkan volume bola DIV 2;

Code:
const phi = Math.PI; let r = 7;
let volumeBola = 4 / 3 * phi * r * r * r;
console.log("volume 1/2 bola nya adalah: " + volumeBola / 2);
console.log("volume bola nya adalah: " + volumeBola);
console.log("luas lingkaran adalah: " + phi * r * r);
console.log("luas permukaan lingkaran adalah: " + 4 * phi * r * r);
*/

/*
# Study Case 4
Hitung luas permukaan tabung

Algoritma
tentukan variable phi;
tentukan variable r;
tentukan variable t;
tentukan luas permukaan tabung;
isi luas permukaan tabung dengan 2 * phi * r * (r+t)
tampilkan luas permukaan tabung;

Psuedocode
STORE phi WITH 3.14;
STORE r WITH ANY NUMBER;
STORE t WITH ANY NUMBER;
STORE luasPermukaanTabung TO 2 MUL phi MUL r MUL (r ADD t);
PRINT luasPermukaanTabung

Code:
const phi = Math.PI; let r = 7; t = 7; let luasPermukaanTabung = 2 * phi * r * (r+t);
console.log("luas permukaan tabung adalah: " + luasPermukaanTabung.toFixed(2)); //to fixed untuk limit jumlah tampilan angka di belakang koma aja.
*/

/*
# Study Case 5
Hitung luas permukaan balok, 

Algoritma
tentukan var p;
tentukan var l;
tentukan var t;
tentukan var luas permukaan balok;
isi luas permukaan balok dengan 2 * (p*l + p*t + l*t);
tampilkan luas permukaan balok;

Psuedocode
STORE p WITH ANY NUMBER;
STORE l WITH ANY NUMBER;
STORE t WITH ANY NUMBER;
STORE luasPermukaanBalok = 2*(p*l+p*t+l*t);
PRINT luasPermukaanBalok;

Code:
let p = 3; l = 7; t = 9;  let luas = 2 * (p * l + p * t + l * t); console.log(luas);
*/

