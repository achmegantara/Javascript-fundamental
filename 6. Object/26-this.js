//membuat objek

//cara 1
function halo() {
    console.log(this);
    console.log("halo");
}

halo();

//cara 2 - objek literal
var obj = {};
obj.halo = function () {
    console.log("halo");
}

obj.halo();

//cara 3 - menggunakan constructor
function Halo() {
    console.log('Halo');
}

new halo();

//this adalah keyword special yang didefinisikan pada setiap function
var a = 10;
console.log(this.a);