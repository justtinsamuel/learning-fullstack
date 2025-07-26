// // Function

// // Simple Function
// function hello (){
//     console.log('Hello guys, selamat siang');
// }
// // Invoke Function
// hello(); // output = Hello guys, selamat siang

// Latihan.
function cekNoPol(noPol) {
  const ganjilGenap = noPol % 2 === 0 ? "Genap" : "Ganjil";
  console.log(`Plat Nomor ${noPol} adalah ${ganjilGenap}`);
}
// cekNoPol(1992); // dalam kurung () adalah PARAMETER atau ARGUMENT ARGS.

// FUNGSI MODULER

// recursive call perlu di pelajari mandiri

// Fungsi pecah kalimat jadi array, 1 kata = 1 array, dan tampilkan total array nya

// Contoh Coach


function splitToArray(string){
    let tempArray = string.split(" ");
    return tempArray;
} 

function jumlahKata(kalimat){
    let result = splitToArray(kalimat);
    let arrayLength = result.length;
    return arrayLength;
}

console.log(contohArray)
console.log(jumlahKata('Hello selamat pagi dunia'));


// Contoh GPT 2 function.
// function splitToArray(str){
//     let tempWord = str.trim().split(/\s+/);
//     return tempWord;
// }
// function sumArr(words){
//     let totalWords = splitToArray(words);
//     let arrayLength = totalWords.length;
//     return arrayLength;
// }

// console.log(sumArr('Selamat Pagi Bapa'));

// contoh GPT

// function pecahDanPush(kalimat) {
//   const hasilSplit = kalimat.trim().split(/\s+/); // array dari string, trim hilangkan spasi before and after kata, split(/\s+\) yang split kalimatnya.
//   const kataArray = []; // tempat push manual

//   for (let i = 0; i < hasilSplit.length; i++) {
//     kataArray.push(hasilSplit[i]); // push hasil split nya 1 per 1.
//   }

//   console.log(kataArray); // menampilkan array list
//   console.log(`Total kata: ${kataArray.length}`); // menampilkan panjang array nya.
// }

// pecahDanPush("Belajar JavaScript  itu          sangat menyenangkan");
