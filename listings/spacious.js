const images = [
        "../images/listing/spacious/bed1.png",
        "../images/listing/spacious/bed2.png",
        "../images/listing/spacious/kitchen.png",
        "../images/listing/spacious/toilet.png",
        "../images/listing/spacious/room1.png",
        "../images/listing/spacious/room2.png",
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
