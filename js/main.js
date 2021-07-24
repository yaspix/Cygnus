function init() {
    if (!localStorage.getItem("formData")) {
        chDisp("signUp");
    } else {
        chDisp("main");
    }
}

function chDisp(value) {
    let contents = document.getElementsByClassName("content");
    for (let content of contents) {
        content.style.display = "none";
    }
    let dispItem = document.getElementById(value);
    dispItem.style.display = "block";
}

function getParam(param) {
    let params = new URL(window.location.href).searchParams;
    return params.get(param);
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
        chDisp("main");
    }
});

// main window
submitBtn.addEventListener("click", () => {
    btnIcon.textContent = "done";
    btnIcon.style.color = "#16c79a"
    let url = generateFormUrl(getParam("formId"), "formResponse");
    form.action = url;
    form.submit();
    
});

moreVertBtn.addEventListener("click", () => {
    chDisp("config");
});

// config window
closeConfigBtn.addEventListener("click", () => {
    chDisp("main");
});

resetBtn.addEventListener("click", () => {
    if (window.confirm("Are you sure?")) {
        removeFormData();
    }
});

openInGoogleForms.addEventListener("click", () => {
    let url = generateFormUrl(getParam("formId"), "viewform");
    window.location.href = url;
})