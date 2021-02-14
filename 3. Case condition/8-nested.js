var s = '';

for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}

console.log(s);
console.log("---------------");

var t = '';
for (var baris = 1; baris <= 10; baris++) {
    for (var kolom = 10; kolom >= baris; kolom--) {
        t += '*';
    }
    t += '\n';
}
console.log(t);
console.log("---------------");

// var x = '';
// for (var baris = 1; baris <= 10; baris++) {
//     for (var kolom = 1; kolom <= baris; kolom++) {
//         x += '*';
//     }
//     x += '\n';
// }
// console.log(x);
// console.log("----------------");