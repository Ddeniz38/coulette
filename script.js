function randomNumber(min, max) {
  let num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}

function randomHexColor() {
  let red = randomHexNumber();
  let green = randomHexNumber();
  let blue = randomHexNumber();
  return ("#" + red + green + blue).toUpperCase();
}

function changeColor() {
  let color = randomHexColor();
  let colorValueEl = document.querySelector("#color-value");
  colorValueEl.textContent = color;
  let body = document.querySelector("header");
  body.style.backgroundColor = color;
}

changeColor();
let generateButton = document.querySelector("#generate");
if (generateButton) {
  generateButton.addEventListener("click", changeColor);
} else {
  console.error("button was not found.");
}

let saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", function () {
  let colorValueEl = document.querySelector("#color-value");
  let color = colorValueEl.innerText;
  let colorList = document.querySelector("#colors");
  let newColor = document.createElement("li");
  newColor.innerText = color;
  newColor.style.backgroundColor = color;
  colorList.appendChild(newColor);
});
