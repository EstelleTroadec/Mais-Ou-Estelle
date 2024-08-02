const showCountries = {
    init: function() {
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
    }

}


    





    