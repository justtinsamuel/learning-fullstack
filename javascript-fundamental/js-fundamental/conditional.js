/*
Latihan Conditional:
Conjunction is supperiorly important.
*/
/*
// if else
let angka = "1";
if(angka === 1){ /// === itu artinya tipe datanya juga harus sama
    console.log(`angka 1`);
} else {
    console.log(`angka nya bukan 1`);
}

// if else & else if
angka = 2.1;
if(angka < 2){
    console.log(`angka di bawah 2`);
} else if(angka > 2){
    console.log(`angka di atas 2`);
} else {
    console.log(`angka 2`);
}

// latihan apakah boleh buat ktp atau belum
let usia = 16;
const usiaMinimalBuatKTP = usia >= 17;

if(usiaMinimalBuatKTP){ // boolean tidak perlu kita kasih rule, karena rule nya sudah di atas di const.
    console.log(`Kamu sudah ${usia} tahun, kamu sudah boleh membuat KTP`);
} else{
    console.log(`Kamu masih ${usia} tahun, kamu masih bocil, pergi sana`);
}

// latihan switch case with array.
let pilihanMinuman = [`kopi`, `teh`, `coklat`];
let minuman = pilihanMinuman[0];

switch(minuman){
    case `kopi`: console.log("minum kopi");
    break;
    case `teh`: console.log("minum teh");
    break;
    case `coklat`: console.log("minum coklat");
    break;
    default: console.log("pilih 0..2");
    break;
}
*/

// masuk wahana: usia < 17 tahun. kalau diatas 150cm boleh, kalau dibawah 150cm, tidak. Usia > 17 tahun boleh.
/*
let usia = 16;
let tinggi = 149;
const isUsia = usia < 17;
const isTinggi = tinggi >= 150;

if(isUsia){
    if(isTinggi){
        console.log(`kamu belum 17 tahun, tapi tinggi kamu diatas 150, silakan masuk`);
    } else{
        console.log(`kamu belum 17 tahun, dan tinggi kamu dibawah 150, silakan pergi`);
    }
} else{
    console.log(`kamu sudah dewasa, silakan masuk`);
}
*/


// Cek apakah bilangan genap or ganjil?

/*
let bilangan = 9;

if(bilangan % 2 == 0){
    console.log(`bilangan ${bilangan} ini adalah genap`);
} else {
    console.log(`bilangan ${bilangan} ini adalah ganjil`);
}

let contoh = 3;
const isGanjil = contoh % 2 > 0;
const isGenap = contoh % 2 == 0;

if(isGanjil){
    console.log(`ganjil`);
} else if (isGenap){
    console.log(`genap`);
} else {
    console.log(`tes`);
}
*/

/*
// Vending machine using switch case.
let drinkChoice;
drinkChoice = 'f';

switch(drinkChoice)
{
    case 'a': console.log('a. "Sweet tea"');
    break;
    case 'b': console.log('b. "Plain tea"');
    break;
    case 'c': console.log('c. "Boba"');
    break;
    case 'd': console.log('d. "Milk Coffee"');
    break;
    case 'e': console.log('e. "Choco Ice"');
    break;
    default: console.log('Mohon pilih antara a...e');
}

// Vending machine using switch case + array.
const favDrink = ['tes', 'tes1', 'tes2'];
const input = 1;

switch(input-1){ // -1 dari biasa orang lihat, karena array mulai dari 0 bukan dari 1.
    case 0: console.log('pilihan minuman kamu adalah' favDrink[0]);
    break;
    case 1: console.log('tes1');
    break;
    case 2: console.log('tes2');
    break;
    default: console.log('mohon input 1..3');
}

let usia = 7;
usia === 7 ? console.log('usia 7') : console.log('usia bukan 7');

if(usia === 7){
    console.log('usia 7');
} else {
    console.log('usia bukan 7');
}
*/

// LATIHAN POWER LEVEL

/*
let power;
power = 0;

if(power > 100){
    console.log('Your level is Expert');
} else if (power >= 70 && power <= 100){
    console.log('Your level is Pro');
} else if (power >= 50 && power <= 70){
    console.log('Your level is Normal');
} else if (power >= 30 && power <= 50){
    console.log('Your level is Basic');
} else if (power < 30 && power >= 0){
    console.log('Your level is Beginner');
} else if (power < 0){
    console.log('power tidak mungkin minus');
} else {
    console.log('tolong masukkan nilai power mu dalam angka');
}
*/


//LATIHAN POWER LEVEL DENGAN MENGGUNAKAN TERNARY OPERATORS.
/*
let powers = 30;

const powersLevel =
    powers > 100 ? 'Expert' :
    powers >= 70 ? 'Pro' :
    powers >= 50 ? 'Normal' : 
    powers >= 30 ? 'Basic' :
    'Beginner';
console.log(`your level is ${powersLevel}`) ;
*/

// LATIHAN SOAL STUDY CASE 4, 3 Jenis Access, 3 pembagian <5 >5 dan 5
/*
let akses;
let lvl;

switch(akses){
    case 'public':
        if(lvl < 5){
        console.log(`${akses} dibawah 5`);
        } else if(lvl > 5){
        console.log(`${akses} diatas 5`);
        } else {
        console.log(`${akses} five`);
        } break;
    case 'protected':
        if(lvl < 5){
        console.log(`${akses} dibawah 5`);
        } else if(lvl > 5){
        console.log(`${akses} diatas 5`);
        } else {
        console.log(`${akses} five`);
        } break;   
    case 'private':
        if(lvl < 5){
        console.log(`${akses} dibawah 5`);
        } else if(lvl > 5){
        console.log(`${akses} diatas 5`);
        } else {
        console.log(`${akses} five`);
        } break;  
    default :
        if(akses === ''){
            console.log('please input akses');
        } else {
            console.log('access undefinde')
        }
}

// versi lebih singkat:
const userAccessType = 'protected';
const userLevel = 5;

// Validasi access type
if (!['public', 'protected', 'private'].includes(userAccessType)) {
  console.log(userAccessType === '' ? 'Please input access type' : 'Access type undefined');
} else {
  const levelCategory =
    userLevel < 5 ? 'di bawah 5' :
    userLevel > 5 ? 'di atas 5' :
    'tepat 5';

  console.log(`${userAccessType} - level ${levelCategory}`);
}
*/

/* STUDY CASE 5
Perusahaan service laptop. kasih diskon kalau.
Pembeli WNA:
- tinggal di indo < 3 tahun = tidak dapat diskon
- tinggal di indo 3 - 5 tahun = dapat diskon dgn syarat:
    - usia < 21 = diskon 10%
    - usia > 21 = diskon 5%
- tinggal di indo > 5 tahun = dapat diskon dgn syarat:
    - usia < 21 = diskon 5%
    - usia > 21 = 2.5%
- pembeli WNI:
    - WNI dari barat = diskon 10%
    - WNI dari tengah = diskon 15%
    - WNI dari timur = diskon 17.5%
*/

let wargaNegara = 'WNA';
let daerahTinggal = 'barat';
let usia = 20;
let lamaTinggal = 3;
let price = 10000;
let isUnder21 = usia <= 21;

switch (wargaNegara){
    // WNA
    case 'WNA':
        if(lamaTinggal < 3){
            console.log(`harga akhir TANPA DISKON ${price}`);
        } else if (lamaTinggal >= 3 && lamaTinggal <= 5){
            if(isUnder21){
                price = price * 0.9;
            } else{
                price = price * 0.95;                
            }
        } else if (lamaTinggal > 5){
            if(isUnder21){
                price = price * 0.95;
            } else{
                price = price * 0.975;                
            }
        }
    break;
    
    // WNI
    case 'WNI':
        switch(daerahTinggal){
            case 'barat' : price = price * 0.9; break;
            case 'tengah' : price = price * 0.85; break;
            case 'timur' : price = price * 0.825; break;
            default : console.log('mohon pilih antara barat, tengah, timur');
        }
        // if(daerahTinggal === 'barat'){
        //     price = price * 0.9;
        // } else if (daerahTinggal === 'tengah'){
        //     price = price * 0.85;
        // } else {
        //     price = price * 0.825;
        // }
        // break;
    break;
}

console.log(`harga akhir ${price}`);