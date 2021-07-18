const name = document.querySelector("#name").value;
const studentNum = Number(document.querySelector("#studentNum").value);
const productKey = document.querySelector("#productKey").value;
const doneBtn = document.querySelector(".doneBtn");

function validation() {
    const studentNumPettern = new RegExp("2[0-9]{3}");
}

function licenseAuth() {
    if (productKey == "Cygnus") {
        storeData();
    } else {
        productKey.textContent = "";
        console.log("invalid Key");
    }
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
    };

    let individualData = {
        name: name,
        homeroom: hraList[Math.floor(studentNum / 100)],
        studentNumTwoDigit: studentNum % 100,
    };
    console.log(individualData);
}

doneBtn.addEventListener("click", function () {});
