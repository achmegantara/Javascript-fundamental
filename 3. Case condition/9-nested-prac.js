console.log("Nested type 1 ");
var baris1, kolom1;
var nest1 = '';
for (baris1 = 1; baris1 <= 5; baris1++) {
    for (kolom1 = 1; kolom1 <= baris1; kolom1++) {
        nest1 += '*';
    }
    nest1 += '\n';
}
console.log(nest1);