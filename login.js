window.addEventListener("load", () => {

    document
    .querySelector('.auth__visual img')
    .style.transform = 'scale(1)';

    setTimeout(() => {

        document
        .querySelector('.auth__tag')
        ?.classList.add('show');

    }, 200);

    setTimeout(() => {

        document
        .querySelector('.auth__visual-overlay h1')
        ?.classList.add('show');

    }, 400);

    setTimeout(() => {

        document
        .querySelector('.auth__visual-overlay p')
        ?.classList.add('show');

    }, 600);

    document
    .querySelectorAll('.visual-stat')
    .forEach((stat,index) => {

        setTimeout(() => {

            stat.classList.add('show');

        }, 800 + (index * 200));

    });

    setTimeout(() => {

        document
        .querySelector('.auth__logo')
        ?.classList.add('show');

    }, 300);

    setTimeout(() => {

        document
        .querySelector('.auth__header')
        ?.classList.add('show');

    }, 500);

    document
    .querySelectorAll('.form-group')
    .forEach((group,index)=>{

        setTimeout(()=>{

            group.classList.add('show');

        },700 + (index * 150));

    });

    setTimeout(() => {

        document
        .querySelector('.auth__options')
        ?.classList.add('show');

    },1300);

    setTimeout(() => {

        document
        .querySelector('.auth-btn')
        ?.classList.add('show');

    },1450);

    setTimeout(() => {

        document
        .querySelector('.auth-divider')
        ?.classList.add('show');

    },1600);

    setTimeout(() => {

        document
        .querySelector('.auth-social')
        ?.classList.add('show');

    },1750);

    setTimeout(() => {

        document
        .querySelector('.auth__footer')
        ?.classList.add('show');

    },1900);

});

function animateCounter(counter){

    const target =
    Number(counter.dataset.target);

    let current = 0;

    const step =
    target / 80;

    function update(){

        current += step;

        if(current < target){

            counter.textContent =
            Math.floor(current);

            requestAnimationFrame(update);

        }else{

            counter.textContent = target;

        }

    }

    update();

}
document
.querySelectorAll('.counter')
.forEach(counter => {

    animateCounter(counter);

});

const togglePassword =
document.getElementById("togglePassword");

const passwordInput =
document.getElementById("password");

if(togglePassword && passwordInput){

    togglePassword.addEventListener("click", () => {

        const type =
        passwordInput.getAttribute("type");

        if(type === "password"){

            passwordInput.setAttribute(
                "type",
                "text"
            );

            togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

        }else{

            passwordInput.setAttribute(
                "type",
                "password"
            );

            togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

        }

    });

}

const loginForm =
document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const role =
        document.getElementById("role").value;

        if(role === "client"){

            window.location.href =
            "client.html";

        }

        else if(role === "consultant"){

            window.location.href =
            "consultant.html";

        }

        else{

            alert(
                "Please select a role."
            );

        }

    });

}

const signupForm =
document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const role =
        document.getElementById("role").value;

        const password =
        document.getElementById("password").value;

        const confirmPassword =
        document.getElementById("confirmPassword").value;

        const terms =
        document.getElementById("terms");

        const roleError =
        document.getElementById("roleError");

        const passwordError =
        document.getElementById("passwordError");

        const termsError =
        document.getElementById("termsError");

        roleError.textContent = "";
        passwordError.textContent = "";
        termsError.textContent = "";

        if(role === ""){

            roleError.textContent = "Please select a role";

            return;
        }

        if(password.length < 8){

            passwordError.textContent =
            "Password must be at least 8 characters";

            passwordError.style.color =
            "#EF4444";

            return;
        }

        if(password !== confirmPassword){

            passwordMatch.textContent =
            "✕ Passwords do not match";

            passwordMatch.style.color =
            "#EF4444";

            return;
        }

        if(!terms.checked){

        termsError.textContent =
        "Please accept Terms & Conditions";

        termsError.style.color =
        "#EF4444";

        return;
        }

        passwordMatch.textContent =
        "✓ Account Created Successfully";

        passwordMatch.style.color =
        "#10B981";

        setTimeout(() => {

            window.location.href =
            "login.html";

        },1500);

    });
}

const words = [

    "Growth",
    "Innovation",
    "Success",
    "Transformation",
    "Excellence"

];

let wordIndex = 0;

function rotateWord(){

    const word =
    document.querySelector(".dynamic-word");

    if(!word) return;

    word.style.opacity = 0;

    word.style.transform =
    "translateY(10px)";

    setTimeout(() => {

        wordIndex =
        (wordIndex + 1) % words.length;

        word.textContent =
        words[wordIndex];

        word.style.opacity = 1;

        word.style.transform =
        "translateY(0)";

    },300);

}

setInterval(rotateWord,3000);

const password =
document.getElementById("password");

const confirmPassword =
document.getElementById("confirmPassword");

const passwordMatch =
document.getElementById("passwordMatch");

function validatePassword(){

    if(
        confirmPassword.value === ""
    ){

        passwordMatch.textContent = "";

        return;
    }

    if(
        password.value ===
        confirmPassword.value
    ){

        passwordMatch.textContent =
        "✓ Passwords match";

        passwordMatch.style.color =
        "#10B981";

    }

    else{

        passwordMatch.textContent =
        "✕ Passwords do not match";

        passwordMatch.style.color =
        "#EF4444";

    }

}

if(
    password &&
    confirmPassword &&
    passwordMatch
){

    password.addEventListener(
    "input",
    validatePassword
    );

    confirmPassword.addEventListener(
    "input",
    validatePassword
    );

}

const strengthBar =
document.querySelector(".strength-bar");

const strengthText =
document.querySelector(".strength-text");

if(password && strengthBar && strengthText){

    password.addEventListener("input", () => {

        const value =
        password.value;

        let strength = 0;

        if(value.length >= 8)
            strength++;

        if(/[A-Z]/.test(value))
            strength++;

        if(/[0-9]/.test(value))
            strength++;

        if(/[^A-Za-z0-9]/.test(value))
            strength++;

        switch(strength){

            case 1:

                strengthBar.style.width =
                "25%";

                strengthBar.style.background =
                "#EF4444";

                strengthText.textContent =
                "Weak Password";

                break;

            case 2:

                strengthBar.style.width =
                "50%";

                strengthBar.style.background =
                "#F59E0B";

                strengthText.textContent =
                "Medium Password";

                break;

            case 3:

                strengthBar.style.width =
                "75%";

                strengthBar.style.background =
                "#22C55E";

                strengthText.textContent =
                "Strong Password";

                break;

            case 4:

                strengthBar.style.width =
                "100%";

                strengthBar.style.background =
                "#14B8A6";

                strengthText.textContent =
                "Very Strong Password";

                break;

            default:

                strengthBar.style.width =
                "0";

                strengthText.textContent =
                "Password Strength";

        }

    });

}