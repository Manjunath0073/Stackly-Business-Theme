const mobileBtn =
document.querySelector(
    '.mobile-menu-btn'
);

const sidebar =
document.querySelector(
    '.sidebar'
);

const overlay =
document.querySelector(
    '.sidebar-overlay'
);

if(
    mobileBtn &&
    sidebar &&
    overlay
){

    mobileBtn.addEventListener(
    'click',()=>{

        sidebar.classList.toggle('active');

        overlay.classList.toggle('active');

    });

    overlay.addEventListener(
    'click',()=>{

        sidebar.classList.remove(
            'active'
        );

        overlay.classList.remove(
            'active'
        );

    });

}

const menuItems =
document.querySelectorAll('.menu-item');

menuItems.forEach(item=>{

    item.addEventListener('click',()=>{

        if(window.innerWidth <= 992){

            sidebar.classList.remove('active');

            overlay.classList.remove('active');

        }

    });

});


const email =
localStorage.getItem(
    "loggedInUser"
);
const displayName =
email ? email.split("@")[0] : "Guest";
const role =
localStorage.getItem(
    "loggedInRole"
);

const userElement =
document.querySelector(
    '.dashboard-user-name'
);

if(userElement){

    userElement.textContent =
    displayName;

}

const roleElement =
document.querySelector(
    '.dashboard-role'
);

if(roleElement){

    roleElement.textContent =
    role || 'User';

}
const subtitle =
document.querySelector(
    ".dashboard-subtitle"
);

if(role === "client"){

    subtitle.textContent =
    "Track your projects, monitor progress and stay connected with your consultant.";

}
else{

    subtitle.textContent =
    "Manage client engagements, monitor project performance and drive business growth.";

}


const chartCanvas =
document.getElementById(
    "overviewChart"
);

if(chartCanvas){

    new Chart(chartCanvas,{

        type:"line",

        data:{

            labels:[
    "Planning",
    "Design",
    "Development",
    "Testing",
    "Review",
    "Completed"
],

            datasets:[{

                label:"Project Completion",

                data:[
                    15,
                    35,
                    55,
                    72,
                    88,
                    92
                ],

                borderColor:"#14B8A6",

                backgroundColor:
                "rgba(20,184,166,.1)",

                fill:true,

                tension:.4
            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{

                    display:false
                }

            }

        }

    });

}

const counters =
document.querySelectorAll(
    '.counter'
);

counters.forEach(counter=>{

    const target =
    Number(
        counter.dataset.target
    );

    let count = 0;

    const update = ()=>{

        const increment =
        target / 100;

        if(count < target){

            count += increment;

            counter.textContent =
            Math.floor(count);

            requestAnimationFrame(
                update
            );

        }else{

            counter.textContent =
            target;

        }

    };

    update();

});


const sections = {

    overview:
    document.getElementById(
    'overview-section'),

    analytics:
    document.getElementById(
    'analytics-section'),

    projects:
    document.getElementById(
    'projects-section'),

    profile:
    document.getElementById(
    'profile-section')

};

menuItems.forEach(item=>{

    item.addEventListener(
    'click',(e)=>{

        e.preventDefault();

        const target =
        item.dataset.section;

        Object.values(
        sections
        ).forEach(section=>{

            section.classList.add(
            'hidden'
            );

        });

        sections[target]
        .classList.remove(
        'hidden'
        );

        menuItems.forEach(btn=>{

            btn.classList.remove(
            'active'
            );

        });

        item.classList.add(
        'active'
        );

    });

});

const profileName =
document.querySelector(
'.profile-name'
);

const profileRole =
document.querySelector(
'.profile-role'
);

if(profileName){

    profileName.textContent =
    displayName;

}

if(profileRole){

    profileRole.textContent =
    role;

}

const logoutBtn =
document.querySelector(
    '.logout-btn'
);

if(logoutBtn){

    logoutBtn.addEventListener(
        'click',
        ()=>{

            localStorage.removeItem(
                'loggedInUser'
            );

            localStorage.removeItem(
                'loggedInRole'
            );

            window.location.href =
            'login.html';

        }
    );

}