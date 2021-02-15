// refactoring adalah sebuah proses mengubah kode agara menjadi lebih baik tanpa mengubah fungsionalitasnya

//tanpa refactoring
function penjumlahanDuaKubus(a, b) {
    var kubus1;
    var kubus2;
    var total;

    kubus1 = a * a;
    kubus2 = b * b;

    total = kubus1 + kubus2;
    return total;
}

//dengan refactoring
function penjumlahanDuaKubus2(a, b) {

    return (a * a) + (b * b);
}

var total1 = penjumlahanDuaKubus(2, 3);
var total2 = penjumlahanDuaKubus2(4, 5);


alert("luas kubus 1 = " + total1 + " dan kubus 2 = " + total2);