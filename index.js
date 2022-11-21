const modalEl = document.getElementById("modal");
const closeBtnEl = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("login-form");

setTimeout(function () {
  modalEl.style.display = "inline";
}, 1500);

closeBtnEl.addEventListener("click", function () {
  modalEl.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
});
