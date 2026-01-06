const images = [
        "../images/listing/elegant/outside.png",
        "../images/listing/elegant/outside2.png",
        "../images/listing/elegant/outside3.png",
        "../images/listing/elegant/outside4.png",
        "../images/listing/elegant/bed4.png",
        "../images/listing/elegant/kitchen3.png",
        "../images/listing/elegant/living1.png",
        "../images/listing/elegant/living2.png",
        "../images/listing/elegant/bath1.png",
        "../images/listing/elegant/bath2.png",
        "../images/listing/elegant/bed1.png",
        "../images/listing/elegant/bed2.png",
        "../images/listing/elegant/room1.png",
        "../images/listing/elegant/room2.png",
        "../images/listing/elegant/toilet2.png",
        "../images/listing/elegant/stairs.png",
    ];

let currentIndex = 0;
const mainImg = document.getElementById("mainImg");
const thumbs = document.querySelectorAll(".thumbs img");

function setImage(index) {
        currentIndex = index;
        mainImg.src = images[index];
        updateActiveThumb();
    }

function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        setImage(currentIndex);
    }

function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        setImage(currentIndex);
    }

function updateActiveThumb() {
        thumbs.forEach(t => t.classList.remove("active"));
        thumbs[currentIndex].classList.add("active");
    }

function scrollThumbs(direction) {
    const container = document.getElementById("thumbsContainer");
    const thumbStep = 122; // 110px + 12px gap
    container.scrollLeft += direction * thumbStep;
}
