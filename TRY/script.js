document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menangani klik
    function handleLinkClick(event) {
        // Mencegah link pindah halaman
        event.preventDefault();

        // Ambil id dari elemen yang diklik
        const clickedId = event.currentTarget.id;

        // Tampilkan pesan di konsol browser
        console.log(`Link dengan ID: "${clickedId}" telah diklik.`);

        // Tambahkan logika lain di sini sesuai kebutuhan Anda
        // alert(`Anda mengklik menu: ${clickedId}`);
    }

    // --- Menambahkan event listener untuk menu sidebar ---
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // --- Menambahkan event listener untuk menu header ---
    const headerLinks = document.querySelectorAll('.nav-menu a');
    headerLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // --- Menambahkan event listener untuk logo (tombol beranda) ---
    const logoLink = document.querySelector('.header-logo-container');
    if (logoLink) {
        logoLink.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Logo (tombol beranda) telah diklik.');
        });
    }

    // --- Menambahkan event listener untuk ikon pencarian ---
    const searchIcon = document.querySelector('.fa-search');
    if (searchIcon) {
        searchIcon.parentElement.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Ikon pencarian telah diklik.');
        });
    }
});