//DOM manipulation method
//manipulasi element
//manipulasi node

//element.innerHTML
// const a = document.getElementById("judul");
// a.style.backgroundColor = "cyan";
// a.innerHTML = "<em>Achmad akbar</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello world";

//manipulation attribut
//menambah atribut
const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("nama", "achmad akbar");

const a = document.querySelector('section#a a');
a.setAttribute("id", "link");

//melihat atribut yang ada
console.log(a.getAttribute("href"));

//menghapus atribut
// a.removeAttribute("href");


//element.classlist
//add() ==> untuk menambah class baru
//remove() ==> menghapus isi class
//toggle() ==> jika tidak mempunyai kelas tertentu maka akan ditambahkan, jika classnya ada maka akan dihapuskan
//item() ==> untuk mengetahui item tertentu pada sebuah class
//contain() ==> untuk mengecek apakah class tersebut ada atau tidak
//replace() ==> untuk mengganti class yang ada dengan class yang baru

const p2 = document.querySelector('.p2');
p2.classList.add('label');
// p2.classList.remove('p2');
p2.classList.toggle('achmad');
console.log(p2.classList.item(2));
console.log(p2.classList.contains('achmad'));
p2.classList.replace("achmad", "akbar");