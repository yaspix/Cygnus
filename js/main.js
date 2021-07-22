function init() {
    if (!localStorage.getItem("formData")) {
        disp("signUp");
    } else {
        disp("main");
    }
}

function disp(value) {
    let contents = document.getElementsByClassName("content");
    for (let content of contents) {
        content.style.display = "none";
    }
    let dispItem = document.getElementById(value);
    dispItem.style.display = "block";
}

// process when window is loaded

window.onload = init();

// sign up window

doneBtn.addEventListener("click", () => {
    let nameValidation = validation(name.value != "", name, "name is blank");
    let studentNumValidation = validation(
        studentNumPettern.test(studentNum.value) && studentNum.value.length == 4,
        studentNum,
        "invalid student number."
    );
    let licenseAuth = validation(productKey.value === "Cygnus", productKey, "invalid product key");

    if (nameValidation && studentNumValidation && licenseAuth) {
        storeData();
        disp("main");
    }
});

// main window

moreVertBtn.addEventListener("click", () => {
    disp("config");
});

// config window

resetBtn.addEventListener("click", () => {
    if (window.confirm("Are you sure?")) {
        removeFormData();
    }
});
