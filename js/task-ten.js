import getRandomHexColor from "./utils.js";

const refs = {
    input: document.getElementById("input"),
    buttonCreate: document.querySelector("[data-create]"),
    buttonDestroy: document.querySelector("[data-destroy]"),
    divEl: document.getElementById("boxes"),
};

let number = 0;
const box = [];

refs.input.addEventListener("input", onGetNumber);
refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxex);


function onGetNumber(e) {
    number = e.currentTarget.value;
};


function createBoxes() {
    let width = 20;
    let height = 20;

    for (let i = 0; i < number; i += 1) {
         
        const element = document.createElement("div");
        element.style.backgroundColor = getRandomHexColor();
        element.style.width = `${width += 10}px`;
        element.style.height = `${height += 10}px`;
       
        box.push(element);
    };

    refs.divEl.append(...box);

    console.log(box)
};


function destroyBoxex() {
    refs.divEl.innerHTML = "";
    refs.input.value = "";
    box.length = 0;
};

