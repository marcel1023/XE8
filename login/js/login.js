document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        console.error("Elemen #loginForm tidak ditemukan!");
        return;
    }

    loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Optional: validasi sederhana
        if (!username || !password) {
            showAlert("Username dan Password tidak boleh kosong");
            return;
        }

        try {
            const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `action=login&username=\( {encodeURIComponent(username)}&password= \){encodeURIComponent(password)}`
            });

            const data = await res.json();

            if (data.status === "success") {
                localStorage.setItem("username", data.username);
                window.location.href = "../index.html";
            } else {
                showAlert("Username atau Password salah, silahkan coba lagi");
            }
        } catch (error) {
            console.error("Error:", error);
            showAlert("Terjadi kesalahan koneksi. Coba lagi nanti.");
        }
    });

    // Fungsi helper untuk alert
    function showAlert(message) {
        const alertBox = document.getElementById("alertBox");
        if (alertBox) {
            alertBox.innerText = message;
            alertBox.style.display = "block";

            setTimeout(() => {
                alertBox.style.display = "none";
            }, 3000);
        }
    }
});
