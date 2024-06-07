function addScrollAnimation() {
        window.addEventListener('scroll', function() {
        var divs = document.querySelectorAll('.animated');

        divs.forEach(function(div) {
            var rect = div.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                div.classList.add('visible');
            }
        });
    });
}


function addScrollAnimationAbout() {
    var aboutText = document.querySelector('.about');
    window.addEventListener('scroll', function() {

            var rect = aboutText.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                aboutText.classList.add('visible');
            }
        });
}

document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimation();
    addScrollAnimationAbout();
});




