// Arrow function this
// Konsep this pada arrow function

//constructor function
// const Mahasiswa = function () {
//     this.nama = "achmad";
//     this.umur = 23;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const achmad = new Mahasiswa();

//dengan Arrow Function
const Mahasiswa = function () {
    this.nama = "achmad";
    this.umur = 23;
    //arrow function pada method
    this.sayHello = () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
    }
}

const achmad = new Mahasiswa();


//object literal
const mhs1 = {
    nama: "Achmad",
    umur: 23,
    //arrow function tidak memiliki konsep this
    sayHello: () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
}

//tes 1
const Mahasiswa1 = function () {
    this.nama = "Achmad akbar megantara";
    this.umur = 24;
    this.sayHello = function () {
        console.log(`Halom nama saya ${this.nama}, dan saya ${this.umur} tahun`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}

const megantara = new Mahasiswa();


//studi kasus arrow function
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});