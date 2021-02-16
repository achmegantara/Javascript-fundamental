//dengan prototype
function Mahasiswa(nama, energi) {
    // dengan constructor default terbentuk Object.create(Mahasiswa.prototype)
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

let achmad = new Mahasiswa("achmad", 20);

// versi class
class Mahasiswa2 {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }
}

let akbar = new Mahasiswa2("akbar", 20);