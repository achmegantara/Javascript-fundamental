//Perbedaaan function Declarasion dan Expression
// Declaration
// Lebih fleksibel (dapat ditulis dimanapun) - karena konsep Hoisting
// Mudah dipahami pemula

//Expression
//Harus didefinisikan terlebih dahulu sebelum dipanggil
//Lebih powerfull = 1. Sebagai closuure 2. Sebagai argumen untuk function lain 3. IIFE (Immediately Invoked Function Expression)

//---------------------------------------//
//implementasi
//Declaration
function tampilPresan(nama) {
    console.log("Halo " + nama);
}

tampilPresan("Achmad Megantara");

//Expression
var namaUser = function (nama) {
    console.log("Halo " + nama);
}

namaUser("Achmad Akbar");