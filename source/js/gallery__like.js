let contentLikeWrapper = document.querySelectorAll('.content__like-wrapper');
let contentLikeIcon = document.querySelectorAll('.content__like-icon');

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
