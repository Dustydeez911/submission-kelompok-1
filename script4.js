// Menunggu DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Misalnya kita tentukan nama buku secara manual di sini
  let nama = "Sejarah Dunia"; // Ganti sesuai kebutuhan

  // Objek key-value untuk mencocokkan buku dengan gambar
  let gambarMap = {
    "Sejarah Dunia": "sejarah-dunia-yang-disembunyikan.jpg",
    "Perang Dunia II": "1708388787_Kronik Perang Dunia II 1939-1945.jpg",
    "Matematika SMA": "Matematika-SMA-Kelas-X-Srikandi-penilaian-Revisi-2023.jpg",
    "Fisika Dasar": "978-602-475-463-1.jpg",
    "Resep Nusantara": "BLK_RMNFDAHP2021947243.jpg",
    "Psikologi Remaja": "images.jpg",
    "Naruto Vol.1": "65b67da8639ed7538f6d61d9-naruto-1.jpg",
    "Doraemon Vol.5": "27250633_e941db87-5750-4f18-817a-133b7b5f5d9e_474_474.jpg",
    "Bandung After Rain": "WhatsApp Image 2025-06-09 at 14.19.40_30c79e72.jpg",
    "Eccedentesiast": "WhatsApp Image 2025-06-09 at 14.19.40_426fb826.jpg",
  };

  // Memeriksa apakah nama buku memiliki gambar yang sesuai
  let imgSrc = gambarMap[nama] || "default-book.jpg";

  // Membuat elemen gambar
  let img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "Cover " + nama;
  img.style.width = "120px";
  img.style.height = "180px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "8px";
  img.style.marginBottom = "1rem";

  // Membuat elemen judul
  let judul = document.createElement("h2");
  judul.textContent = nama;

  // Membuat elemen tombol
  let btn = document.createElement("button");
  btn.textContent = "Kembalikan Buku";

  // Menangani event klik pada tombol
  btn.addEventListener("click", function () {
    alert("Buku " + nama + " telah dikembalikan.");
    container.innerHTML = "";
    let info = document.createElement("p");
    info.textContent = "Belum ada buku yang dipinjam.";
    container.appendChild(info);
  });

  // Mendapatkan elemen container
  let container = document.getElementById("pinjaman-container");

  // Menambahkan elemen ke dalam container
  if (nama) {
    container.appendChild(img);
    container.appendChild(judul);
    container.appendChild(btn);
  } else {
    let info = document.createElement("p");
    info.textContent = "Belum ada buku yang dipinjam.";
    container.appendChild(info);
  }
});
