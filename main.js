const form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("alert");
    var data = new FormData(event.target);
    fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: "application/json",
            },
        })
        .then((response) => {
            status.innerHTML = "Mesajınız başarılı bir şekilde gönderildi.";
            document.querySelector(".alert_style").style.display = "block";

            setTimeout(function() {
                document.querySelector(".alert_style").style.display = "none";
            }, 4000);
            form.reset();
        })
        .catch((error) => {
            status.innerHTML = "Hata! Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.";
            document.querySelector(".alert_style").style.display = "block";

            setTimeout(function() {
                document.querySelector(".alert_style").style.display = "none";
            }, 4000);
        });
}
form.addEventListener("submit", handleSubmit);

let navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
    navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
