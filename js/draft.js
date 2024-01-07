let inputElement = document.querySelector("#input-box");

inputElement.addEventListener("input", function () {
  let inputValue = parseInt(inputElement.value);

  let childBoxContainer = document.querySelector(".child-box-container");
  let adultBoxContainer = document.querySelector(".adult-box-container");

  if (inputValue === "") {
    adultBoxContainer.style.display = "block";
    childBoxContainer.style.display = "block";
  } else {
    if (inputValue >= 18) {
      adultBoxContainer.style.display = "block";
      childBoxContainer.style.display = "none";
    } else {
      adultBoxContainer.style.display = "none";
      childBoxContainer.style.display = "block";
    }
  }
});