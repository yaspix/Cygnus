const resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", () => {
    if (window.confirm("Are you sure?")) {
        removeFormData();
    }
});
