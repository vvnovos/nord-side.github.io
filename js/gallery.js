var photos = document.querySelectorAll('.gallery__img');
var photo;
var linkPositions = document.querySelectorAll('.gallery__link');
var linkOverlay;
var i;
var gallery = document.querySelector('.gallery')
var closeGalleryEsc = function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    for (i = 0; i < photos.length; i++) {
      photo = photos[i];
      photo.classList.remove('gallery-zoom');
    }
    for (i = 0; i < linkPositions.length; i++) {
      linkOverlay = linkPositions[i];
      linkOverlay.classList.remove('gallery-overlay');
    }
  }
}

for (i = 0; i < linkPositions.length; i++) {
  linkOverlay = linkPositions[i];
  linkOverlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    photo = this.childNodes[1];
    this.classList.toggle('gallery-overlay');
    photo.classList.toggle('gallery-zoom');
  });
}

window.addEventListener('keydown', closeGalleryEsc);

//--------------------------------

// object-fit: cover;
// element.style.color = 'green';
