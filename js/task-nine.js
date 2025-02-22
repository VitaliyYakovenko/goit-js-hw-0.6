import getRandomHexColor from "./utils.js";
const btnEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");


btnEl.addEventListener("click", onChangeBodyBgColor);


function onChangeBodyBgColor() {
    const randomColor = getRandomHexColor();

    document.body.style.backgroundColor = randomColor;
    textEl.textContent = randomColor;
};