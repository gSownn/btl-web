// CAROUSEL
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 20}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Auto-play
const autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 5000);

// Pause autoplay on hover
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

////////// BUTTON
document.getElementById("myButton").addEventListener("click", function () {
    window.location.href = "html/nhap.html";
});

// Contact
document.getElementById("myLink").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn link chuyển hướng
    alert("Liên hệ hotline : 18006936");
});