const modalEl = document.getElementById("modal");
const closeBtnEl = document.getElementById("modal-close-btn");

setTimeout(function () {
  modalEl.style.display = "inline";
}, 1500);

closeBtnEl.addEventListener("click", function () {
  modalEl.style.display = "none";
});
