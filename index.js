const modalEl = document.getElementById("modal");
const closeBtnEl = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("login-form");
const modalTextEl = document.getElementById("modal-text");

setTimeout(function () {
  modalEl.style.display = "inline";
}, 1500);

closeBtnEl.addEventListener("click", function () {
  modalEl.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modalTextEl.innerHTML = `
    <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="uploadText">
        Uploading your data to the dark web...
      </p>
    </div>
  `;
});
