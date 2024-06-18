function addScrollAnimation() {
        window.addEventListener('scroll', function() {
        var divs = document.querySelectorAll('.dish');

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

function filterButtons()
{
    const buttons = document.querySelectorAll('.btn.btn-custom.w-100');
    const items = document.querySelectorAll('.dish');
   
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.dataset.filter;
            
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

                    items.forEach(item => {
                        const category = item.classList.contains(filterValue);
                        if(filterValue === 'all' || category) {
                            item.classList.remove('hidden');
                        } else {
                            item.classList.add('hidden');
                        }
                    })
            })
        }
    )
}

document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimation();
    addScrollAnimationAbout();
    filterButtons();
});




