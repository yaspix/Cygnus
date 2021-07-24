const submitBtn = document.querySelector(".submitBtn");
const moreVertBtn = document.querySelector(".moreVertBtn");
const form = document.querySelector("form");
const iframe = document.querySelector("#hiddenIframe");
const btnIcon = document.querySelector("#btnIcon");

const date = new Date();
const googleFormsUrl = "https://docs.google.com/forms/d/e/";

function generateFormDataToSend() {
    let storedData = JSON.parse(localStorage.getItem("formData"));
    let formDataToSend = {
        "entry.2001787292_year": date.getFullYear(),
        "entry.2001787292_month": date.getMonth() + 1,
        "entry.2001787292_day": date.getDate(),
        "entry.1893219725": storedData.homeroom,
        "entry.1301531773": storedData.studentNumTwoDigit,
        "entry.2096025471": storedData.name,
        "entry.2071193908": "熱はありません",
        "entry.1616853833": "風邪症状はありません",
    };
    return formDataToSend;
}

function generateFormUrl(formId) {
    let url = new URL(googleFormsUrl + getParam("formId") + "/formResponse");
    // let url = new URL(googleFormsUrl + getParam("formId") + "/viewform");
    for (let key in generateFormDataToSend()) {
        url.searchParams.append(key, generateFormDataToSend()[key]);
    }
    return url.href;
}

function isSendSucceeded() {
    let resLocation = iframe.contentWindow.location;
    console.log(resLocation);
}
