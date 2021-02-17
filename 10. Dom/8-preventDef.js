//untuk menghilangkan aksi default dari sebuah elemen
const close = document.querySelectorAll('.close');

close.forEach(el => {
    el.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    });
});