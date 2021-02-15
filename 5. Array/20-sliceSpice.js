//Splice
// splice(indexAwal, maudihapusBerapa, elemenBaru1, elemenbaru2, ...)
// var arr = ["senin", "selasa", "rabu"];

// console.log(arr);
// arr.splice(1, 0, "sir");
// console.log(arr);

//slice
// slice(awal, akhir) - yang tidak dihilangkan
var arr = ["senin", "selasa", "rabu", "kamis", "jumat"];

var arr2 = arr.slice(1, 3); // artinya indeks 1 dan 2, indeks 3 tidak ikut

console.log(arr);
console.log(arr2);