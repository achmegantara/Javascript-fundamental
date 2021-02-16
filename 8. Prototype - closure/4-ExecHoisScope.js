// Execution, Hoisting, Scope

// var nama = "Achmad";
// console.log(nama);

// console.log(x);
// var x = 10;

//creation phase pada Global Context
//nama var = undefined
//nama function = fn()

// hoisting
//window = global object
// this = window

//variabel harus dideklarasikan terlebih dahulu sebelum execution
// sedangkan function bisa dideklarasikan setelah execution

// var nama1 = "akbar";
// var umur = 23;
// console.log(sayHello());

// function sayHello() {
//     return `Halo, nama saya ${nama1}, umur ${umur} tahun`;
// }


//function membuat Local Execution context
//yang ada di dalamnya terdapat creation dan execution phase
//window
//arguments
//hoisting

var nama = "Achmad akbar";
var username = "achmegantara@gmail.com";

function cetakURL(username) {
    var instagramURL = "http//instagram.com/";
    return instagramURL + username;
}

console.log(cetakURL(username));