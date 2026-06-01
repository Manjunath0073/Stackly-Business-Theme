window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');

    setTimeout(() => {

        loader.classList.add('hide');

    }, 2500);

});

const currentPage =
window.location.pathname.split("/").pop();

document
.querySelectorAll(".navbar__menu a")
.forEach(link => {

    const href = link.getAttribute("href");

    if(href === currentPage){
        link.classList.add("active");
    }

});

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

const mobileToggle =
document.querySelector(".mobile-toggle");

const mobileMenu =
document.querySelector(".mobile-menu");

mobileToggle.addEventListener("click", () => {

    mobileToggle.classList.toggle("active");

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

document
.querySelectorAll(".mobile-menu__nav a")
.forEach(link => {

    const currentPage =
    window.location.pathname.split("/").pop();

    if(link.getAttribute("href") === currentPage){
        link.classList.add("active");
    }

});

document.addEventListener("DOMContentLoaded", () => {
    // Animate badge
    document.querySelector(".hero__badge").style.opacity = 1;
    document.querySelector(".hero__badge").style.transform = "translateY(0)";

    // Animate title after badge
    setTimeout(() => {
        document.querySelector(".hero__title").style.opacity = 1;
        document.querySelector(".hero__title").style.transform = "translateY(0)";
    }, 300);

    // Animate description after title
    setTimeout(() => {
        document.querySelector(".hero__description").style.opacity = 1;
        document.querySelector(".hero__description").style.transform = "translateY(0)";
    }, 600);

    // Animate buttons after description
    setTimeout(() => {
        document.querySelector(".hero__buttons").style.opacity = 1;
        document.querySelector(".hero__buttons").style.transform = "translateY(0)";
    }, 900);

    // Animate dashboard after buttons
    setTimeout(() => {
        document.querySelector(".hero__dashboard").style.opacity = 1;
        document.querySelector(".hero__dashboard").style.transform = "translateY(0)";
    }, 1200);

    // Animate stats after dashboard
    setTimeout(() => {
        document.querySelector(".hero-stats__wrapper").style.opacity = 1;
        document.querySelector(".hero-stats__wrapper").style.transform = "translateY(0)";
    }, 1500);
});

const words = ["Future-Ready", "Data-Driven", "Sustainable", "Innovative"];
let currentWordIndex = 0;

function rotateWord() {
    const wordElement = document.querySelector(".dynamic-word");
    wordElement.style.opacity = 0;
    wordElement.style.transform = "translateY(10px)";

    setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        wordElement.textContent = words[currentWordIndex];
        wordElement.style.opacity = 1;
        wordElement.style.transform = "translateY(0)";
    }, 500);
}

// Change word every 3 seconds
setInterval(rotateWord, 3000);

