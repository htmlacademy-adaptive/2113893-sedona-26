let headerList = document.querySelector('.header__list');
let headerToggle = document.querySelector('.header__toggle-button-wrapper');
let headerToggleButton = document.querySelector('.header__toggle-button');
let contentLikeWrapper = document.querySelectorAll('.content__like-wrapper');
let contentLikeIcon = document.querySelectorAll('.content__like-icon');

// Показываем меню и скрываем бюргер, если JS не загрузился
headerList.classList.remove('header__list--nojs');
headerToggleButton.classList.remove('header__toggle-button--nojs');

// Открываем/закрываем меню навигации по нажатию на бургер, анимируем бургер
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

// Красим лайк по нажатию
for (let i of contentLikeIcon) {
  i.addEventListener('click', function () {
    if (i.classList.contains('content__like-icon--activated')) {
      i.classList.remove('content__like-icon--activated');
    } else {
      i.classList.add('content__like-icon--activated');
    }
  });
};


