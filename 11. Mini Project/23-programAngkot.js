// dua parameter :
//     1. namaPenumpang
//     2. array penumpang

//     rules:
//     1. jika angkot kosong, penumpang naik duduk di kursi pertama
//     2. penumpang berikutnya duduk di kursi selanjutnya secara berurutan
//     3. jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
//     4. asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
//     5. nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun

// pseudocode
//     jika angkot kosong
//         tambah penumpang di awal array
//         kembalikan isi array di awal array
//     else
//         telusuri seluruh kursi dari awal
//             jika ada kursi kosong
//                 tambah penumpang di kursi tersebut
//                 kembalikan isi array & keluar dari function
//             jika suda ada nama yang sama
//                 tampilkan pesan kesalahannya
//                 kembalikan isi array & keluar dari function
//             jika seluruh kursi terisi
//                 tambah penumpang di akhir array
//                 kembalikan isi array & keluar dari function

var penumpang = ["achmad", undefined, "akbar"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log("Kursi masih kosong");
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == (penumpang.length - 1)) {
                console.log("Mohon maaf, " + namaPenumpang + " tidak ada dalam angkot");
                return penumpang;
            }
        }
    }
}