let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function onApplyProperties() {
    let bgc = bgColorInput.value;
    customButton.style.backgroundColor = bgc;

    let font = fontColorInput.value;
    customButton.style.color = font;

    let size = fontSizeInput.value;
    // size=parseInt(size.slice(0,-2));
    customButton.style.fontSize = size;
    console.log(typeof(size));
    console.log((size));

    let weight = parseInt(fontWeightInput.value);
    customButton.style.fontWeight = weight;

    let pad = paddingInput.value;
    // pad = parseInt(pad.slice(0,-2));
    customButton.style.padding = pad;

    let br = borderRadiusInput.value;
    // br = parseInt(br.slice(0,-2));
    customButton.style.borderRadius = br;
}