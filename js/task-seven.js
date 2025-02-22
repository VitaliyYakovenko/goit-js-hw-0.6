const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", onChangeRange);


function onChangeRange(e) {
    console.log(e.currentTarget.value);

    textEl.style.fontSize = e.currentTarget.value + "px";
}