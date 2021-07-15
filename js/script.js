function init() {
    if (localStorage.name == null) {
        console.log("Name:null");
    } else {
        console.log("Name:" + localStorage.name);
    }
}

function changeDisp(element) {
    let pages = document.querySelectorAll("page");

    for (let i = 0; i < pages.length; i++) {
        pages.item(i).getElementsByClassName.display = "none";
    }
}
