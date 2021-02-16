// 1. objec literal
let mahasiswa = {
  nama: "achmad akbar",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

// 2. Function declaration
function Mahasiswa2(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };

  return mahasiswa;
}

let Achmad = Mahasiswa2("achmad", 10);

// 3. Constructor
//dengan menggunakan keyword new
function Mahasiswa3(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };
}

let akbar = new Mahasiswa3("akbar", 20);
// 4. Object.create

//pada ES6 diperkenalkan let dan const
// gunakan let hindari var
// gunakan const untuk variabel yang nilainya statis atau tidak berubah
