const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubminForm);


function onSubminForm(e) {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const result = {
        email,
        password,
    };

    if (email === "") {
        alert("Введите свою почту");
        return;
    }
    if (password === "") {
        alert("Введите свою пароль");
        return;
    }
  
    console.log(result);

    formEl.reset();
};