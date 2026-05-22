// login.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Script login.js loaded successfully");

    const form = document.getElementById("loginForm");
    
    console.log("Form element:", form);  // untuk debugging

    if (!form) {
        console.error("❌ Elemen #loginForm tidak ditemukan! Cek HTML kamu.");
        return;
    }

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!username || !password) {
            showAlert("Username dan password wajib diisi!");
            return;
        }

        try {
            const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `action=login&username=\( {encodeURIComponent(username)}&password= \){encodeURIComponent(password)}`
            });

            const data = await res.json();

            if (data.status === "success") {
                localStorage.setItem("username", data.username);
                window.location.href = "../index.html";
            } else {
                showAlert("Username atau Password salah!");
            }
        } catch (err) {
            console.error(err);
            showAlert("Gagal koneksi ke server. Coba lagi.");
        }
    });

    function showAlert(msg) {
        const alertBox = document.getElementById("alertBox");
        if (alertBox) {
            alertBox.innerText = msg;
            alertBox.style.display = "block";
            setTimeout(() => alertBox.style.display = "none", 3000);
        }
    }
});
