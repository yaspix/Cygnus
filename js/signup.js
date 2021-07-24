const name = document.querySelector("#name");
const studentNum = document.querySelector("#studentNum");
const productKey = document.querySelector("#productKey");
const doneBtn = document.querySelector(".doneBtn");
const studentNumPettern = new RegExp("2[0-9]{3}");

function validation(condition, element, errMsg) {
    if (condition) {
        return true;
    } else {
        console.log("err: " + errMsg);
        element.value = "";
        return false;
    }
}

function removeFormData() {
    localStorage.removeItem("formData");
    location.reload();
}

function storeData() {
    const hraList = {
        21: "２１Ｈ（加護ホーム）",
        22: "２２Ｈ（橘ホーム）",
        23: "２３Ｈ（土田ホーム）",
        24: "２４Ｈ（表ホーム）",
        25: "２５Ｈ（道上ホーム）",
        26: "２６Ｈ（寺口ホーム）",
        27: "２７Ｈ（亀倉ホーム）",
        28: "２８Ｈ（徳田ホーム）",
        29: "２９Ｈ（宮前ホーム）",
        20: "２０Ｈ（中村ホーム）",
    };

    let formData = {
        name: name.value,
        homeroom: hraList[Math.floor(Number(studentNum.value) / 100)],
        studentNumTwoDigit: Number(studentNum.value) % 100,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
}
