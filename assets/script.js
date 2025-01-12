const navbarToggle = document.getElementById('navbar-toggle');
const navMenus = document.getElementById('nav-menus');

navbarToggle.addEventListener('click', () => {
    navMenus.classList.toggle('active');
});


function seedWhatsapp() {
    var nama = document.getElementsByClassName('input-nama').value;
    var pesan = document.getElementsByClassName('input-pesan').value;
    var nomorWhatsApp = '6289666192392';

    var url = `https://wa.me/${nomorWhatsApp}?text=` +
              `Nama: ${encodeURIComponent(nama)}%0A` +
              `Pesan: ${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
}