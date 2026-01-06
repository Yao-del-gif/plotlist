const images = [
        "../images/listing/diamond/living.png",
        "../images/listing/diamond/bed.png",
        "../images/listing/diamond/kitchen.png",
        "../images/listing/diamond/toilet.png",
        "../images/listing/diamond/toilet1.png",
        "../images/listing/diamond/bed2.png",
        "../images/listing/diamond/bed3.png",
        "../images/listing/diamond/room.png"
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
