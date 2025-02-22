const inputRef = document.getElementById("validation-input");
const MIN_LENGHT = inputRef.dataset.length;




inputRef.addEventListener("blur", onChangeText);


function onChangeText(e) {
    const currentLenght = e.currentTarget.value.length;

    if (MIN_LENGHT > currentLenght) {
        console.log("мало символов");

        inputRef.classList.add("invalid")
        return
    }
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
};