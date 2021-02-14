var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no " + noAngkot + " beroperasi dengan baik");
    noAngkot++;
}

for (noAngkot = 7; noAngkot <= jmlAngkot; noAngkot++) {
    console.log("Mohon maaf, angkot no " + noAngkot + " sedang tidak beroperasi");
}