const submitBtn = document.querySelector("#submitBtn");
const moreVertBtn = document.querySelector(".moreVert");
const date = new Date();

function getParam(param) {
    let params = new URL(window.location.href).searchParams;
    return params.get(param);
}

function getFormData() {
    return JSON.parse(localStorage.getItem("formData"));
}

let sendInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
};

moreVertBtn.addEventListener("click", () => {
    disp("config");
});
