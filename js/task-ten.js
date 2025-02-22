import getRandomHexColor from "./utils.js";

const refs = {
    input: document.getElementById("input"),
    buttonCreate: document.querySelector("[data-create]"),
    buttonDestroy: document.querySelector("[data-destroy]"),
    divEl: document.getElementById("boxes"),
};

let number = 0;


refs.input.addEventListener("input", onGetNumber);
refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxex);


function onGetNumber(e) {
    number = Number(e.currentTarget.value);

    if (isNaN(number) || number <= 0) {
        alert("Необходимо ввести число и число больше 0")
    };
};


function createBoxes() {
    let width = 20;
    let height = 20;

    for (let i = 0; i < number; i += 1) {
         
        const element = document.createElement("div");
        element.style.backgroundColor = getRandomHexColor();
        element.style.width = `${width += 10}px`;
        element.style.height = `${height += 10}px`;
    
        refs.divEl.append(element);
    };
};


function destroyBoxex() {
    refs.divEl.innerHTML = "";
    refs.input.value = "";
};

