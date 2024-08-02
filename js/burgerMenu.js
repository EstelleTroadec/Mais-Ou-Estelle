const burgerMenu = {
    init: function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav__list');

    // add a class to the nav when the burger menu is clicked so that the list of continents appear 
    burgerMenu.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
    }
}