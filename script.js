const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "User" && password === "1234") {
        alert("Login berhasil!");
       
    } else {
        e.preventDefault(); 
        alert("Nama pengguna atau kata sandi salah");
    }
});
