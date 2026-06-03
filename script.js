window.addEventListener('load', () => {

    const loader =
    document.querySelector('.loader');

    if(loader){

        setTimeout(() => {

            loader.classList.add('hide');

        },2500);

    }

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

if(mobileToggle && mobileMenu){

    mobileToggle.addEventListener("click", () => {

        mobileToggle.classList.toggle("active");

        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

}

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

    const heroBadge =
    document.querySelector(".hero__badge");

    if(!heroBadge) return;

    heroBadge.style.opacity = 1;
    heroBadge.style.transform = "translateY(0)";

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

        const dashboard =
        document.querySelector(".hero__dashboard");

        if(dashboard){

            dashboard.style.opacity = 1;

            dashboard.style.transform =
            "translateY(0)";

            animateCounters();

        }

    }, 1200);

    // Animate stats after dashboard
    setTimeout(() => {

        const statsWrapper =
        document.querySelector(".hero-stats__wrapper");

        if(statsWrapper){

            statsWrapper.style.opacity = 1;

            statsWrapper.style.transform =
            "translateY(0)";

        }

    }, 1500);
});

const words = ["Future-Ready", "Data-Driven", "Sustainable", "Innovative"];
let currentWordIndex = 0;

function rotateWord() {

    const wordElement =
    document.querySelector(".dynamic-word");

    if(!wordElement) return;

    wordElement.style.opacity = 0;
    wordElement.style.transform = "translateY(10px)";

    setTimeout(() => {

        currentWordIndex =
        (currentWordIndex + 1) % words.length;

        wordElement.textContent =
        words[currentWordIndex];

        wordElement.style.opacity = 1;
        wordElement.style.transform =
        "translateY(0)";

    }, 500);

}

// Change word every 3 seconds
if(document.querySelector(".dynamic-word")){

    setInterval(rotateWord, 3000);

}

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

        const suffix =
        counter.dataset.suffix || '';

        function update(){

            current += step;

            if(current < target){

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

if(
    processSection &&
    progressLine &&
    steps.length
){

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

                },index * 300);

            });

        }

    });

}
