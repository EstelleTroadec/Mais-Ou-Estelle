const colorChange = {

    init: function() {
        const redBtn = document.getElementById('color-change__redish');
        const blueBtn = document.getElementById('color-change__blue');
        const greenBtn = document.getElementById('color-change__green');
        const header = document.querySelector('header');
        const cloud = document.querySelector('.header__cloud');
        const footer = document.querySelector('footer');
        
        // handle color change of the header
        redBtn.addEventListener('click', function () {
            header.style.backgroundColor = '#b58284';
            cloud.style.fill = '#f0cdcf';
            footer.style.backgroundColor = '#b58284';

        });
        
        blueBtn.addEventListener('click', function () {
            header.style.backgroundColor = '#8ee4f5';
            cloud.style.fill = '#c4eff9';
            footer.style.backgroundColor = '#8ee4f5';
        });
        
        greenBtn.addEventListener('click', function () {
            header.style.backgroundColor = '#6C977D';
            cloud.style.fill = '#a5b7ac';
            footer.style.backgroundColor = '#6C977D';
        });
    }


}