document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            window.location.href = "/auth/google"; // Redirige a OAuth de Google
        });
    }
});