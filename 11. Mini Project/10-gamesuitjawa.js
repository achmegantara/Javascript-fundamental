//menangkap pilihan player
var inputUser = prompt('Pilih : gajah, semut, orang');

// menangkap pilihan computer
//membangkitkan bilangan random
var rand = Math.random();
var inputComp;

if (rand < 0.34) {
    inputComp = 'gajah';
} else if (rand >= 0.34 && rand < 0.67) {
    inputComp = 'semut';
} else {
    inputComp = 'orang';
}

// menentukan rules
var hasil;
if (inputUser == inputComp) {
    hasil = 'SERI!';
} else if (inputUser == 'gajah') {
    if (inputComp == 'orang') {
        hasil = 'MENANG!';
    } else {
        hasil = 'KALAH!';
    }
} else if (inputUser == 'semut') {
    if (inputComp == 'gajah') {
        hasil = 'MENANG!';
    } else {
        hasil = 'KALAH!';
    }
} else if (inputUser == 'orang') {
    if (inputComp == 'semut') {
        hasil = 'MENANG!';
    } else {
        hasil = 'KALAH!';
    }
} else {
    hasil = "WRONG INPUT!";
}

//tampilkan hasilnya
alert("Anda memilih " + inputUser + " dan computer memilih " + inputComp + ". Hasilnya adalah " + hasil);