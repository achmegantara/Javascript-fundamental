//membangkitkan bilangan random
function getPilihanComputer() {
    const inputComp = Math.random();
    if (inputComp < 0.34) return 'gajah';
    if (inputComp >= 0.34 && inputComp < 0.67) return 'semut';
    return 'orang';
}

//memproses hasil
function getHasil(inputComp, inputUser) {
    if (inputUser == inputComp) return 'SERI!';
    if (inputUser == 'gajah') return (inputComp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (inputUser == 'semut') return (inputComp == 'gajah') ? 'MENANG!' : 'KALAH!';
    if (inputUser == 'orang') return (inputComp == 'semut') ? 'MENANG!' : 'KALAH!';
}

//membuat DOM
//cara ringkas
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const PilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(PilihanComputer, pilihanPlayer);

        putar();

        setTimeout(() => {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    });
});

//tambahan interaktif
function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0;
        }
    }, 100);
}


//seleksi tombol
//cara lama
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const PilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(PilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const PilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(PilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const PilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(PilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });