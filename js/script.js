// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar height
            behavior: 'smooth'
        });
    });
});

// Example of a simple animation (fade-in) when scrolling
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });
});
