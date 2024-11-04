const carousel = document.querySelector('.carrusel');
const items = document.querySelectorAll('.carrusel-item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let index = 0;

nextButton.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    } else {
        index = 0;
        carousel.style.transform = `translateX(0)`;
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    } else {
        index = items.length - 1;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }
});

