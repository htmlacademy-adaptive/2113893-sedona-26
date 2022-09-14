let form = document.querySelector(".form__grid");
let modalSuccess = document.querySelector(".modal--success");
let modalButton = document.querySelector(".modal__button");

form.onsubmit = function (evt) {
  evt.preventDefault();
  modalSuccess.classList.remove("visually-hidden");
}

modalButton.onclick = function() {
  modalSuccess.classList.add("visually-hidden");
}
