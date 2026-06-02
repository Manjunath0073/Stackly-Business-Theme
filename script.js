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

        animateCounters();

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

function animateCounters(){

    const counters =
    document.querySelectorAll('.counter');

    counters.forEach(counter => {

        const target =
        Number(counter.dataset.target);

        let current = 0;

        const duration = 2000;

        const step =
        target / (duration / 16);

        function update(){

            current += step;

            if(current < target){

                const suffix =
                counter.dataset.suffix || '';

                counter.textContent =
                Math.floor(current) + suffix;

                requestAnimationFrame(update);

            }else{

                counter.textContent =
                target + suffix;

            }

        }

        update();

    });

}

const processSection =
document.querySelector('.process');

const progressLine =
document.querySelector('.timeline-progress');

const steps =
document.querySelectorAll('.process-step');

window.addEventListener('scroll', () => {

    const trigger =
    processSection.getBoundingClientRect().top;

    const windowHeight =
    window.innerHeight;

    if(trigger < windowHeight * 0.7){

        if(window.innerWidth <= 992){

            progressLine.style.width = "2px";

            progressLine.style.height = "100%";

        }else{

            progressLine.style.height = "4px";

            progressLine.style.width = "80%";

        }

        steps.forEach((step,index)=>{

            setTimeout(()=>{

                step.classList.add('active');

            }, index * 300);

        });

    }

});

