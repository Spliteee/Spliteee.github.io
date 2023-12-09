let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const zones = document.getElementsByClassName("right-zone");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}

function nextSlide() {
    showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();

    const rightZone = document.querySelector(".right-zone");

    rightZone.addEventListener("click", nextSlide);

    setInterval(showSlides, 5000); // Change slide every 5 seconds (adjust as needed)
});
