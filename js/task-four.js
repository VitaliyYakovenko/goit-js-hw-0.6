const refs = {
    bntIncrement: document.querySelector("[data-action=increment]"),
    counter: document.getElementById("value"),
    bntDecrement:document.querySelector("[data-action=decrement]")
};
let sum = 0



refs.bntIncrement.addEventListener("click", onIncrement);
refs.bntDecrement.addEventListener("click", onDecremet);



function onIncrement() {
    sum += 1;
    refs.counter.textContent = sum;
};

function onDecremet() {
    sum -= 1;
    refs.counter.textContent  = sum;
};