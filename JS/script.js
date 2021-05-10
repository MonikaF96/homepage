console.log("Witam Was serdecznie, nie przestraszcie się za mocno!:)");

let hideImageButton = document.querySelector(".hideImage");
let imageConteiner = document.querySelector(".imageConteiner");
let changeColorButton = document.querySelector(".changeColor");
let header = document.querySelector(".mainHeader");

hideImageButton.addEventListener("click", () => {
    imageConteiner.classList.toggle("hiddenImage");
    if (imageConteiner.classList.contains("hiddenImage")) {
        hideImageButton.innerText = "Pokaż zdjęcie";
    } else {
        hideImageButton.innerText = "Schowaj zdjęcie";
    }

});

changeColorButton.addEventListener("click", () => {
    header.classList.toggle("newColor");
});