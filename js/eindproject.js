var button = document.querySelector("button");
var element = document.querySelector("div");


button.addEventListener("click", function() {
    element.classList.toggle("verschijn");
    button.style.display = "none";
});

