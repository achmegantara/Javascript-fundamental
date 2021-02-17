//manipulasi Node
//menambahkan elemen pada HTML

//tahap2
//membuat elemen baru
const pBaru = document.createElement("p");

//embuat isi dalam elemen baru
const teksBaru = document.createTextNode("Paragraf Baru");

//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

//simpan pBaru di akhir section a
const a = document.getElementById("a");
a.appendChild(pBaru);


//menambah di tengah2 child
const liBaru = document.createElement("li");
const tulisanBaru = document.createTextNode("list baru");
liBaru.appendChild(tulisanBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//removeChild & replaceNode
//remove
const link = document.querySelector("section#a a");
a.removeChild(link);


//replace child
const secB = document.getElementById('b');
const p4 = secB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('Judul baru!!');

h2Baru.appendChild(teksh2Baru);

secB.replaceChild(h2Baru, p4);