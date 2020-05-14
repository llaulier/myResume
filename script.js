//////////
// FORM //
//////////

const openPopup = document.querySelector("#pop");
const openButton = document.querySelector(".openPopup");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", () => {
  openPopup.style.display = "block";
});

closeButton.addEventListener("click", () => {
  openPopup.style.display = "none";
});
