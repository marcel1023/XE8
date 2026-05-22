document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");
    const alertBox = document.getElementById("alertBox");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // =========================
        // VALIDASI
        // =========================
        if (username === "" || password === "") {
            showAlert("Username dan password tidak boleh kosong!");
            return;
        }

        if (password !== confirmPassword) {
            showAlert("Password tidak cocok!");
            return;
        }

        // =========================
        // SIMPAN USER (LOCALSTORAGE)
        // =========================
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("isLogin", "true");

        alert("Register berhasil!");

        // redirect ke halaman utama
        window.location.href = "../index.html";
    });

    function showAlert(msg) {
        alertBox.style.display = "block";
        alertBox.innerText = msg;
    }

});
