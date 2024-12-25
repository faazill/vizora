// Simple scroll animation trigger
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-text');
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
