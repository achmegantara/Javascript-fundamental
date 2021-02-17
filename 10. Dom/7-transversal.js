///event handling
const close = document.querySelectorAll('.close');
//const card = document.querySelectorAll('.card');

//cara 1
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         //alert('tombol ke-' + i);
//         //cara normal
//         //card[i].style.display = 'none';

//         //dengan DOM transversal
//         //close[i].parentElement.style.display = 'none';

//         //dengan DOM Transversal cara 2
//         e.target.parentElement.style.display = 'none';
//     });
// }

//cara 2
close.forEach(el => {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
    });
});

//method untuk menelusuri elemen
//parentNode = node
//parentElement = element
//nextSibling = saudara kandung = node
//nextElementSibling = element
//previousSibling = node
//previousElementsibling = element

const nama = document.querySelector('.nama');
console.log(nama.parentElement.parentElement);