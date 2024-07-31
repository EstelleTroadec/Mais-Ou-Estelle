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
      
});