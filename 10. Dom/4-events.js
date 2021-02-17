//events != even
// event pada javascriipt merepresentasikan sebuah kejadian yang terjadi di dalam DOM
//kejadian tersebut bisa dilakukan oleh user (mouse event, keyboard event, dll)
//ataupun dilakukan secara otomatis oleh API(animasi selesai dijalankan, halaman selesai di load, dll)

//cara mendengarkan event
//event handler
// - inline HTML attribute
// - element method
//addEventListener()

//event handler
const p3 = document.querySelector(".p3");
console.log(p3);

function ubahWarna() {
  p2.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarna;

//addeventlistener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("item baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

//eventhandler vs addeventlistener
//jika menggunakan eventhandler perubahan yang terakhir akan menimpa perubahann yang sebelumnya, jika addevenetlistener perubahan yang terakhir tidak menimpa perubahan sebelumnya namun menambah baru
//Mouse event, keyboard event, resources event, focus event, view event, form event, CSS animation&transition event, drag&drop event, dll.
//click, dblclick, mouseenter,mouseleave
