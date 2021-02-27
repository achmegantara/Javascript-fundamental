function validasi() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;
    if (nama != "" && email != "" && alamat != "") {
        return true;
    } else {
        alert('Anda harus mengisi data dengan lengkap');
    }
}