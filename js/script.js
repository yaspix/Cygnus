function init() {
    if (localStorage.name == null) {
        console.log("Name:null");
    } else {
        console.log("Name:" + localStorage.name);
    }
}

function disp(value) {
    let contents = document.getElementsByClassName("content");
    for (let content of contents) {
        content.style.display = "none";
    }
    let dispItem = document.getElementById(value);
    dispItem.style.display = "block";
};
