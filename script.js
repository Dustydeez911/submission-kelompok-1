document.getElementById('loginForm'). addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "User" && pass === "1234") {
        alert("Login berhasil. Selamat datang, " + user + "!");
    } else {
        alert("Nama pengguna atau kata sandi salah.")
    }
})