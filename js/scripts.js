document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav__list');

    // add a class to the nav when the burger menu is clicked so that the list of continents appear 
    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

    
    const continents = document.querySelectorAll('.continent');

    // when we click on a continent name, the list of countries appears or disappears 
    continents.forEach(continent => {
        continent.addEventListener('click', function () {
            const ul = this.nextElementSibling;
            if (ul && ul.tagName === 'UL') {
                const isHidden = ul.style.display === 'none' || ul.style.display === '';
                ul.style.display = isHidden ? 'block' : 'none';
                ul.setAttribute('aria-hidden', !isHidden);
            }
        });
    });


    const redBtn = document.getElementById('color-change__redish');
    const blueBtn = document.getElementById('color-change__blue');
    const greenBtn = document.getElementById('color-change__green');
    const header = document.querySelector('header');
    const cloud = document.querySelector('.header__cloud');

    // handle color change of the header
    redBtn.addEventListener('click', function () {
        header.style.backgroundColor = '#b58284';
        cloud.style.fill = '#f0cdcf';
    });

    blueBtn.addEventListener('click', function () {
        header.style.backgroundColor = '#8ee4f5';
        cloud.style.fill = '#c4eff9';
    });

    greenBtn.addEventListener('click', function () {
        header.style.backgroundColor = '#6C977D';
        cloud.style.fill = '#a5b7ac';
    });
    
      
});