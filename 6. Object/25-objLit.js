//menggunakan objek literal
var mhs1 = {
    nama: "Achmad akbar",
    nrp: 1210151017,
    jurusan: "Teknik telekomunikasi",
    email: "freakmuser@gmail.com"
};

var mhs2 = {
    nama: "Achmad megantara",
    nrp: 1210151018,
    jurusan: "Teknik informatika",
    email: "achmegantara@gmail.com"
};

//menggunakan function declaration
function buatObjek(nama, nrp, jurusan, email) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.jurusan = jurusan;
    mhs.email = email;
    return mhs;
}

var mhs3 = buatObjek("ryan badai", 1210151019, "sains data", "ryan@gmail.com");

//menggunakan constructor
function Mahasiswa(nama, nrp, jurusan, email) {
    this.nama = nama;
    this.nrp = nrp;
    this.jurusan = jurusan;
    this.email = email;
}

var mhs4 = new Mahasiswa("ega", 1210151020, "teknik cloud", "ega@gmail.com");