const app = {

    init: function() {
        filterReviews.init();
        colorChange.init();
        showCountries.init();
        burgerMenu.init();
    }
}

document.addEventListener('DOMContentLoaded', app.init);