let currentIndex = 0;
const images = document.querySelectorAll(".gallery-img");
const dots = document.querySelectorAll(".dot");

document.getElementById("next").addEventListener("click", () => showImage(currentIndex + 1));
document.getElementById("prev").addEventListener("click", () => showImage(currentIndex - 1));
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showImage(index));
});

function showImage(index) {
    images[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active-dot");
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active-dot");
}
