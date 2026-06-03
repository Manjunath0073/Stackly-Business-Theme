const counters =
document.querySelectorAll('.counter');

let countersStarted = false;

function animateCounters(){

    if(countersStarted) return;

    countersStarted = true;

    counters.forEach(counter=>{

        const target =
        +counter.dataset.target;

        let current = 0;

        const increment =
        target / 60;

        const updateCounter = () => {

            if(current < target){

                current += increment;

                if(target === 98){

                    counter.textContent =
                    Math.ceil(current) + "%";

                }else{

                    counter.textContent =
                    Math.ceil(current) + "+";

                }

                requestAnimationFrame(
                    updateCounter
                );

            }else{

                if(target === 98){

                    counter.textContent =
                    target + "%";

                }else{

                    counter.textContent =
                    target + "+";

                }

            }

        };

        updateCounter();

    });

}

const statsSection =
document.querySelector('.about-hero__stats');

if(statsSection){

    const statsObserver =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounters();

            }

        });

    },{
        threshold:0.4
    });

    statsObserver.observe(statsSection);

}

const aboutMessage =
document.querySelector('.about-message__wrapper');

if(aboutMessage){

    const messageObserver =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add('show');

            }

        });

    },{
        threshold:0.2
    });

    messageObserver.observe(aboutMessage);

}

const journeyItems =
document.querySelectorAll('.journey-item');

const journeyObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            journeyItems.forEach((item,index)=>{

                setTimeout(()=>{

                    item.classList.add('show');

                },index * 200);

            });

        }

    });

},{
    threshold:0.3
});

const timeline =
document.querySelector('.journey-timeline');

if(timeline){

    journeyObserver.observe(timeline);

}