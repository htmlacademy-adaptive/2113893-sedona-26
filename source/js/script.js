let headerList = document.querySelector('.header__list');
let headerToggle = document.querySelector('.header__toggle-button-wrapper');
let headerToggleButton = document.querySelector('.header__toggle-button');

headerList.classList.remove('header__list--nojs');

headerToggle.addEventListener('click', function () {
  if (headerList.classList.contains('header__list--closed')) {
    headerList.classList.remove('header__list--closed');
    headerToggleButton.classList.remove('header__toggle-button--closed');
    headerList.classList.add('header__list--opened');
    headerToggleButton.classList.add('header__toggle-button--opened');
  } else {
    headerList.classList.add('header__list--closed');
    headerToggleButton.classList.add('header__toggle-button--closed');
    headerList.classList.remove('header__list--opened');
    headerToggleButton.classList.remove('header__toggle-button--opened');
  }
});
