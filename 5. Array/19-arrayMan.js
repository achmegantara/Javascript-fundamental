///Manipulasi Array

//1. Menambah isi array
// var arr = [];
// arr[0] = "Achmad";
// arr[1] = "Akbar";
// arr[2] = "Megantara";

// console.log(arr);

//2. Menghapus isi array
// var arr = ["senin", "selasa", "rabu"];
// arr[1] = undefined;

// console.log(arr);

//3. Menampilkan isi array
// var arr = ["senin", "selasa", "rabu"];

// for (var i = 0; i < 3; i++) {
//     console.log(arr[i]);
// }

//4. Array Method
//length - join - push - pop - shift - unshift
var arr = ["achmad", "akbar", "megantara"];
console.log(arr);
console.log("-----");
console.log(arr.join(" "));

arr.push("hahaha");
console.log(arr.join(" "));
arr.shift("achmad");
console.log(arr.join(" "));