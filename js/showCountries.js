const showCountries = {
    init: function() {
        const continents = document.querySelectorAll('.continent');
        const allCountryLists = document.querySelectorAll('.continent + ul');

        // when we click on a continent name, the list of countries appears or disappears 
        continents.forEach(continent => {
            continent.addEventListener('click', function (event) {
                const ul = event.target.nextElementSibling;

                // close all other country lists
                allCountryLists.forEach(countryList => {
                    if (countryList !== ul) {
                        countryList.style.display = 'none';
                        countryList.setAttribute('aria-hidden', true);
                    }
                });

                // toggle the country list
                if (ul && ul.tagName === 'UL') {
                    const isHidden = ul.style.display === 'none' || ul.style.display === '';
                    ul.style.display = isHidden ? 'block' : 'none';
                    ul.setAttribute('aria-hidden', !isHidden);
                }
            });
        });
    }

}


    





    