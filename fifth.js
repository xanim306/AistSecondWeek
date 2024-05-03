const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-image');

let counter = 0;
function moveSlide() {
    carouselSlide.style.transform = `translateX(${-counter * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    counter++;
    if (counter >= carouselImages.length) {
        counter = 0;
    }
    moveSlide();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = carouselImages.length - 1;
    }
    moveSlide();
});