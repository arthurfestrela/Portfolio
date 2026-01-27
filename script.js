document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.group, h1, p, section');
    
    animateElements.forEach(el => {
        el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 bg-black rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX - 8}px`;
        cursor.style.top = `${e.clientY - 8}px`;
    });

    document.querySelectorAll('a, button, .cursor-pointer').forEach(link => {
        link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(4)');
        link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });
});

function toggleAbout() {
    const content = document.getElementById('about-content');
    const icon = document.getElementById('about-icon');

    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "1";
        icon.style.transform = "rotate(45deg)";
    } else {
        content.style.maxHeight = "0px";
        content.style.opacity = "0";
        icon.style.transform = "rotate(0deg)";
    }
}