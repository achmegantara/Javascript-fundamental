// infinit loop
function tampilAngka(n) {
    //base case
    //to stop rekursif
    if (n == 0) {
        return;
    }

    console.log(n);
    return tampilAngka(n - 1);
}

tampilAngka(10);

//faktorial
function faktorial(n) {
    if (n == 0) return 1;

    return n * faktorial(n - 1);

}

console.log(faktorial(4));

//fungsi rekursif
// Menggantikan looping
// fibonacci
// pencarian dan penelusuran pada struktur list dan tree
// bahasa pemrograman yang tidak memiliki pengulangan