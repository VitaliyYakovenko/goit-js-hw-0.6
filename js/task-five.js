const inputEl = document.getElementById("name-input");
const textEl = document.getElementById("name-output");


inputEl.addEventListener("input", onChangeInput);

function onChangeInput(e) {

   textEl.textContent = e.currentTarget.value;
    if (textEl.textContent === "") {
        textEl.textContent = "Anonymous";
     }
     

};
