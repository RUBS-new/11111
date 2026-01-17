document.addEventListener("DOMContentLoaded", function () {
    
    // Находим все элементы, которые мы хотим анимировать
    const observerItems = document.querySelectorAll('.scroll-hidden');

    const observerOptions = {
        threshold: 0.15 // Элемент появляется, когда его видно на 15%
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
            }
        });
    }, observerOptions);

    observerItems.forEach((item) => {
        observer.observe(item);
    });
});