const tombolpinjam = document.querySelectorAll('.book-card button');

tombolpinjam.forEach(function(button) {
    button.addEventListener('click', function(e) {
       const semuaJudul = [
      "Sejarah Dunia",
      "Perang Dunia II",
      "Matematika SMA",
      "Fisika Dasar",
      "Resep Nusantara",
      "Psikologi Remaja",
      "Naruto Vol.1",
      "Doraemon Vol.5"
    ];
    
    const index = Array.from(tombolpinjam).indexOf(button)
    const judulBuku = semuaJudul[index];

    alert("Kamu meminjam buku: " + judulBuku);
    })
})