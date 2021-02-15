function tambah(a, b) {
    var hasil = a + b;
    return hasil;
}

var a = parseInt(prompt("Masukkan nilai a : "));
var b = parseInt(prompt("Masukkan nilai b : "));
var hasil = tambah(a, b);
alert("Hasil penjumlahan adalah " + hasil);