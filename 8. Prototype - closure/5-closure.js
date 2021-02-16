//closure
// closure merupakan kombinasi antara function dan lingkunan leksikal(lexical scope) di dalam function tersebut - mozilla
//closure adalah sebuah function ketika memiliki akses ke parent scopenya, meskipun parent scopenya sudah selesai dieksekusi - w33schools
//closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat diciptakan - code fellow
//closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain - techsith

//Lexical Scope
function init() {
    //let nama = "Achmad"; // local variable
    return function (nama) { //inner function (closure)
        // let nama = "akbar";
        console.log(nama); // akses ke parent variable - lexical scope
    }
}
let panggilNama = init();
panggilNama("Achmad");
panggilNama("akbar");

//kenapa menggunakan Closure?
//Untuk membuat Function Factories
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, selamat ${waktu}`);
    }
}

let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("siang");
let selamatMalam = ucapkanSalam("malam");

selamatPagi("Achmad");
console.dir(selamatMalam("Megantara"));

//Untuk membuat private method
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

//let a = add();

counter = 10;

console.log(add());
console.log(add());
console.log(add());