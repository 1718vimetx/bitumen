const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbarlinks');
    const navbarlinks = document.querySelectorAll('.navbarlinks li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navbarlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navbarLinksfade 1s ease forwards ${index / 10 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    var navbaritems = document.querySelectorAll('.navbaritem');
    navbaritems.forEach(function(navbaritem) {

        navbaritem.addEventListener('click', function() {

            if (nav.classList.contains('nav-active')) {
                nav.classList.toggle('nav-active');
            
                navbarlinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    }
                    else {
                        link.style.animation = `navbarLinksfade 3s ease forwards ${index / 7 + 0.3}s`;
                    }
                });
            
                burger.classList.toggle('toggle');
            }
            
        })
    })
}

const resize = () => {
    const nav = document.querySelector('.navbarlinks');
    const burger = document.querySelector('.burger');
    if (window.innerWidth > 768) {
            nav.classList.remove('nav-active');
    }
    else {
        if (burger.classList.contains('toggle')) {
            nav.classList.add('nav-active');
        }
    }

}

function appNotAvailable() {
    alert("The app is not available yet.")
}


navSlide();
resize();