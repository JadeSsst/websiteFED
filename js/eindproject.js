var button = document.querySelector("div > button");
var grapje = document.querySelector("div > div");


button.addEventListener("click", function() {
    grapje.classList.toggle("verschijn");
    button.style.display = "none";
});

