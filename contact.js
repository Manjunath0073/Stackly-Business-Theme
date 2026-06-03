const contactHeroContent =
document.querySelector('.contact-hero__content');

if(contactHeroContent){

    setTimeout(()=>{

        contactHeroContent.classList.add('show');

    },300);

}

const contactForm =
document.getElementById('contactForm');

const formMessage =
document.querySelector('.form-message');

if(contactForm){

    contactForm.addEventListener('submit',(e)=>{

        e.preventDefault();

        let isValid = true;

        const fields =
        contactForm.querySelectorAll(
            'input, select, textarea'
        );

        fields.forEach(field=>{

            field.classList.remove('error');

            if(field.tagName === 'SELECT'){

                if(field.value === ''){

                    field.classList.add('error');

                    isValid = false;

                }

            }else{

                if(!field.value.trim()){

                    field.classList.add('error');

                    isValid = false;

                }

            }

        });

        const email =
        document.getElementById('email');

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email &&
           !emailRegex.test(email.value)){

            email.classList.add('error');

            isValid = false;
        }

        if(!isValid) return;

        formMessage.classList.add('show');

        contactForm.reset();

        setTimeout(()=>{

            formMessage.classList.remove('show');

        },3000);

    });

}