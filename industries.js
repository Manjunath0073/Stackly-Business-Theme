const rows =
document.querySelectorAll('.challenge-row');

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            rows.forEach((row,index)=>{

                setTimeout(()=>{

                    row.classList.add('show');

                },index * 150);

            });

        }

    });

},{
    threshold:0.2
});

document
.querySelector('.challenge-roadmap')
&& observer.observe(
document.querySelector('.challenge-roadmap')
);

const successSection =
document.querySelector('.success-timeline');

const successItems =
document.querySelectorAll('.success-item');

const successObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            successItems.forEach((item,index)=>{

                setTimeout(()=>{

                    item.classList.add('show');

                },index * 250);

            });

        }

    });

},{
    threshold:0.2
});

if(successSection){

    successObserver.observe(successSection);

}

const industryCta =
document.querySelector('.industry-cta__wrapper');

if(industryCta){

    const ctaObserver =
    new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add('show');

            }

        });

    },{
        threshold:0.2
    });

    ctaObserver.observe(industryCta);

}