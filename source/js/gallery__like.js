let likeWrappers = document.querySelectorAll('.gallery-card__like-wrapper');

likeWrappers.forEach(likeWrapper => {
  let likeIcon = likeWrapper.querySelector('.gallery-card__like-icon');
  let likeCounter = likeWrapper.querySelector('.gallery-card__like-counter');

  likeWrapper.onclick = function() {
    if (likeIcon.classList.contains('gallery-card__like-icon--activated')) {
      likeCounter.textContent--;
    } else {
      likeCounter.textContent++;
    };

    likeIcon.classList.toggle('gallery-card__like-icon--activated');
  }
})
