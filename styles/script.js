



window.addEventListener('scroll', function() {
    const navigationMenu = document.getElementById('sticky-menu');
    if (window.scrollY > 50) {
        navigationMenu.classList.add('sticky');
    } else {
        navigationMenu.classList.remove('sticky');
    }
});



const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
