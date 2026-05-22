document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        localStorage.removeItem("isLogin");
        location.reload();
    }

    const user = localStorage.getItem("username");

    const userInfo = document.getElementById("userInfo");
    const authArea = document.getElementById("authArea");
    if (userInfo) {
        userInfo.innerText = user ? "Halo, " + user : "";
    }
    if (authArea) {

        if (user) {
            authArea.innerHTML = `
                <button onclick="logout()" class="nav-cta">Logout</button>
            `;
        } else {
            authArea.innerHTML = `
                <button onclick="goLogin()" class="nav-cta">Login</button>
            `;
        }

    }

    // expose global
    window.goLogin = goLogin;
    window.logout = logout;

});
