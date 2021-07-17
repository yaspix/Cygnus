function licenseAuth() {
    const productKey = document.querySelector("#productKey").value;
    console.log(productKey);

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

    const name = document.querySelector("#name").value;
    const studentNum = Number(document.querySelector("#studentNum").value);

    let individualData = {
        name: name,
        homeroom: hraList[Math.floor(studentNum / 100)],
        studentNumTwoDigit: studentNum % 100,
    };
    console.log(individualData);
}

document.querySelector(".doneBtn").addEventListener("click", licenseAuth());
    