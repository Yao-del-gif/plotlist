document.getElementById("searchBtn").addEventListener("click", function () {
    const price = document.getElementById("priceSelect").value;

    if (price) {
        window.location.href = `listing.html?price=${encodeURIComponent(price)}`;
    } else {
        window.location.href = "listing.html";
    }
});