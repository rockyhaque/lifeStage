let inputElement = document.querySelector("#input-box");

inputElement.addEventListener("input", function () {
    let inputValue = inputElement.value; 

    let childBoxContainer = document.querySelector(".child-box-container");
    let adultBoxContainer = document.querySelector(".adult-box-container");

    if (inputValue === "") {
        adultBoxContainer.style.display = "block";
        childBoxContainer.style.display = "block";
    } else {
        let age = parseInt(inputValue);

        if (age >= 18) {
            adultBoxContainer.style.display = "block";
            childBoxContainer.style.display = "none";
        } else {
            adultBoxContainer.style.display = "none";
            childBoxContainer.style.display = "block";
        }
    }
});
