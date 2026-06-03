const solutionWords = [

    "Growth",
    "Innovation",
    "Efficiency",
    "Transformation",
    "Success"

];

let solutionIndex = 0;

setInterval(() => {

    const word =
    document.querySelector(".dynamic-solution");

    if(!word) return;

    word.style.opacity = 0;

    setTimeout(() => {

        solutionIndex =
        (solutionIndex + 1)
        % solutionWords.length;

        word.textContent =
        solutionWords[solutionIndex];

        word.style.opacity = 1;

    },300);

},3000);

document.addEventListener("DOMContentLoaded",()=>{

    lucide.createIcons();

});

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target
            .classList.add(
                "show-section"
            );

        }

    });

},{
    threshold:.2
});

document
.querySelectorAll(
'.featured-transformation__image,.featured-transformation__content'
)
.forEach(el => {

    observer.observe(el);

});

const processObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},{
    threshold:.2
});

document
.querySelectorAll('.roadmap-step')
.forEach(step => {

    processObserver.observe(step);

});

