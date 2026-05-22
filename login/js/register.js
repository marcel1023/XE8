document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `action=register&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();

        const message = document.getElementById("message");

        if (data.status === "success") {
            message.style.color = "green";
            message.innerText = "Registrasi berhasil, silakan login...";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);

        } else {
            message.style.color = "red";
            message.innerText = data.message || "Gagal registrasi";
        }
    });

});
