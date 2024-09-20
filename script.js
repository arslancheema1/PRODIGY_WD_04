// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scroll({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
