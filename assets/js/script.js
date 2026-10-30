
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const title = document.getElementById("title");
const description = document.getElementById("description");
const bottomText = document.getElementById("bottomText");
const switchLink = document.getElementById("switchLink");

function showLogin() {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    title.textContent = "Selamat Datang Kembali!";
    description.textContent = "Silakan masuk ke akun Anda";

    bottomText.textContent = "Belum punya akun?";
    switchLink.textContent = "Daftar sekarang";
}

function showRegister() {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    loginTab.classList.remove("active");
    registerTab.classList.add("active");

    title.textContent = "Buat Akun Baru";
    description.textContent = "Daftar untuk mulai menggunakan layanan";

    bottomText.textContent = "Sudah punya akun?";
    switchLink.textContent = "Login sekarang";
}

loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);

switchLink.addEventListener("click", function(e) {
    e.preventDefault();

    if (loginForm.classList.contains("hidden")) {
        showLogin();
    } else {
        showRegister();
    }
});

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form Login berhasil dikirim!");
});

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form Register berhasil dikirim!");
});
