// Handles the comments filter by number of stars

const filterReviews = {
    init: function() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterReviews.filter);
        });
    },

    filter: function(event) {
        const checked = event.target.checked;
        const stars = event.target.value;
        const reviews = document.querySelectorAll(
            `.review[data-rating='${stars}']`);

        reviews.forEach(review => {
            if (checked) {
                review.classList.remove('review--hidden');
            } else {
                review.classList.add('review--hidden');
            }
        });
    },    
        
}