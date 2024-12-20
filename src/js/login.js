function validateLogin(event) {
    // Mencegah form submit default
    event.preventDefault();

    // Ambil nilai username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Pengecekan username dan password
    if (username === "admin" && password === "123") {
        alert("Login Sukses");
        // Redirect ke halaman index setelah login sukses
        window.location.href = "index.html";
    } else {
        alert("Login Gagal. Username atau password salah.");
        // Mengarahkan ulang ke halaman login jika login gagal
        window.location.href = "login.html";
    }
}