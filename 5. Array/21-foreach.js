var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// cara normal
for (var i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

//cara 2
angka.forEach(function (e) {
    console.log(e);
});

//cara 3
var cetak = function (e) {
    console.log(e);
}

angka.forEach(cetak);

//foreach 2 array
var nama = ["achmad", "akbar", "megantara"];
//var hari = ["senin", "selasa", "rabu"];

nama.forEach(function (e, i) {
    console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
})

//foreach tidak mengembalikan aray
//map mengembalikan array
var angka2 = [1, 2, 3, 4, 5, 6];
var angka3 = angka2.map(function (e) {
    return e * 2;
})

console.log(angka3.join("-"));

//fungsi sort = untuk mengurutkan
var angka4 = [1, 6, 10, 22, 4, 13];
angka4.sort(function (a, b) {
    return a - b;
})
console.log(angka4.join("-"));