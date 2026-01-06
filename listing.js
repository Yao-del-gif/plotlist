const listings = document.querySelectorAll(".listing-row");
const typeCheckboxes = document.querySelectorAll(".filter-type");
const priceButtons = document.querySelectorAll("button[data-price]");

let activePrice = null;

priceButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();

        const clickedPrice = btn.dataset.price;

        if (activePrice === clickedPrice) {
            activePrice = null;
        } else {
            activePrice = clickedPrice;
        }

        applyFilters();
        updateActivePriceUI();
    });
});

typeCheckboxes.forEach(cb => {
    cb.addEventListener("change", applyFilters);
});

function applyFilters() {
    const selectedTypes = [...typeCheckboxes]
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    listings.forEach(listing => {
        const listingTypes = listing.dataset.type.split(" ");
        const listingPrice = listing.dataset.price;

        const typeMatch =
            selectedTypes.length === 0 ||
            selectedTypes.some(type => listingTypes.includes(type));

        const priceMatch =
            !activePrice || listingPrice === activePrice;

        listing.style.display =
            typeMatch && priceMatch ? "flex" : "none";
    });
}

function updateActivePriceUI() {
    priceButtons.forEach(btn => {
        btn.classList.toggle(
            "active-price",
            btn.dataset.price === activePrice
        );
    });
}

const yangonCheckbox = document.getElementById("yangon-region");
const townshipGroup = document.querySelector(".township-group");

yangonCheckbox.addEventListener("change", applyRegionFilter);

function applyRegionFilter() {
    if (!yangonCheckbox.checked) {
        listings.forEach(listing => {
            listing.style.display = "none";
        });

        townshipGroup.classList.add("disabled");
    } else {
        townshipGroup.classList.remove("disabled");

        applyFilters();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const selectedPrice = params.get("price");

    if (!selectedPrice) return;

    const priceButtons = document.querySelectorAll(".filter-group button");

    priceButtons.forEach(button => {
        if (button.dataset.price === selectedPrice) {
            button.classList.add("active-price");
            button.click();
        }
    });
});