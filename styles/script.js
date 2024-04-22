document.addEventListener('DOMContentLoaded', function() {
    // Scroll event listener
    window.addEventListener('scroll', function() {
        const navigationMenu = document.getElementById('sticky-menu');
        if (window.scrollY > 50) {
            navigationMenu.classList.add('sticky');
        } else {
            navigationMenu.classList.remove('sticky');
        }
    });

    // Accordion functionality
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
});


document.addEventListener("DOMContentLoaded", function() {
    const quoteButton = document.getElementById("quote-button");

    quoteButton.addEventListener("click", function() {
        quoteButton.textContent = "You are loved. And you are seen.";
    });
});


