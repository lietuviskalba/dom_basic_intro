function getBackgroundColorValues(backgroundColors) {
    var currentColorText = document.querySelector(".text_content h2");

    currentColorText.textContent = "Current background colors:" + backgroundColors.style.background;
    currentColorText.style.background = backgroundColors.style.background;
}

function setGradient() {
    var backgroundBlock = document.getElementById("background_canvas_block");
    backgroundBlock.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    getBackgroundColorValues(backgroundBlock)
}

function changeColorBackgroundOnColorInput(eventType, color) {
    color.addEventListener(eventType, setGradient)
}

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

changeColorBackgroundOnColorInput("input", color1);
changeColorBackgroundOnColorInput("input", color2);

