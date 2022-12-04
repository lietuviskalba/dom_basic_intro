function getBackgroundColorValuesText(backgroundColors) {
    var currentColorText = document.querySelector(".text_content h2");

    currentColorText.textContent = "Current background colors:" + backgroundColors.style.background;
    currentColorText.style.color = "white";
}

function setGradient() {
    var backgroundBlock = document.getElementById("background_canvas_block");
    backgroundBlock.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    getBackgroundColorValuesText(backgroundBlock)
}

function calculateRandomColorString() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
}

function setRandomGradientColor() {
    color1.value = calculateRandomColorString();
    color2.value = calculateRandomColorString();

    setGradient();
}

function changeColorBackgroundOnColorInput(eventType, inputType, gradientFunction) {
    inputType.addEventListener(eventType, gradientFunction)
}

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var randomColorButton = document.getElementById("randomColorGeneratorButton");

// Set starting colors and color text on page load
setGradient()

changeColorBackgroundOnColorInput("input", color1, setGradient);
changeColorBackgroundOnColorInput("input", color2, setGradient);
changeColorBackgroundOnColorInput("click", randomColorButton, setRandomGradientColor);