document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#001f3f';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
    
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
