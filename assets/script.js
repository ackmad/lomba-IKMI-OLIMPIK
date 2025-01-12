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

function cahaya_cinta() {
    var nomorWhatsApp = '6289666192392';
    var pesan = encodeURIComponent("Hallo! Saya tertarik dengan paket pernikahan CAHAYA CINTA yang Anda tawarkan. Bisakah Anda memberikan informasi lebih lanjut dan detail paket yang tersedia? Terima kasih!");
    var url = `https://wa.me/${nomorWhatsApp}?text=${pesan}`;
    window.open(url, '_blank');
}

function harmoni_tradisi() {
    var nomorWhatsApp = '6289666192392';
    var pesan = encodeURIComponent("Hallo! Saya tertarik dengan paket pernikahan HARMONI TRADISI yang Anda tawarkan. Bisakah Anda memberikan informasi lebih lanjut dan detail paket yang tersedia? Terima kasih!");
    var url = `https://wa.me/${nomorWhatsApp}?text=${pesan}`;
    window.open(url, '_blank');
}

function mewaak_eksklusif() {
    var nomorWhatsApp = '6289666192392';
    var pesan = encodeURIComponent("Hallo! Saya tertarik dengan paket pernikahan MEWAH EKSKLUSIF yang Anda tawarkan. Bisakah Anda memberikan informasi lebih lanjut dan detail paket yang tersedia? Terima kasih!");
    var url = `https://wa.me/${nomorWhatsApp}?text=${pesan}`;
    window.open(url, '_blank');
}