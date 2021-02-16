// //function declaration
// function tampilPesan(nama) {
//     alert("Halo " + nama);
// }

// tampilPesan("Achmad");

// //function expression
// let tampilNama = function (nama) {
//     alert("Halo " + nama);
// }

// tampilNama("Akbar");

// //Arrow Function
// //Bentuk lain yang lebih ringkas dari Function Expression - Mozilla

// let tampilSalam = (salam) => {
//     alert("Halo, selamat " + salam);
// }
// tampilSalam("Pagi");

//Arrow function 2
const tampilNama2 = (nama, waktu) => {
    return `selamat ${waktu}, ${nama}!`;
}
console.log(tampilNama2('megantara', 'malam'));


//implisit return
//digunakan untuk meringkas sebuah function
const tampilNama3 = (nama, waktu) => `Halo ${nama}, selamat ${waktu}`;
console.log(tampilNama3("ega", "pagi"));

//studi kasus
//cara normal
let mahasiswa = ["Achmad akbar", "Achmad megantara", "Akbar megantara"];

let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length;
});

console.log(jumlahHuruf);

//dengan arrof function
let jumlahHuruf2 = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);

//jika ingin mengembalikan sebuah objek
let jumlahHuruf3 = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.log(jumlahHuruf3);