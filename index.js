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

  const consentFormData = new FormData(consentForm);
  const userName = consentFormData.get("fullName");

  modalTextEl.innerHTML = `
    <div class="modal-inner-loading">
      <img src="images/loading.svg" class="loading">
      <p id="upload-text">
        Uploading your data to the dark web...
      </p>
    </div>
  `;

  setTimeout(function () {
    document.getElementById("upload-text").innerText = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thank you <span class="modal-display-name">${userName}</span></h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 3000);
});
