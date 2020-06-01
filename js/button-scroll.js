let upButton = document.querySelector('.button-scroll--up');
let downButton = document.querySelector('.button-scroll--down');
let scrollHeight = document.body.clientHeight;
let moveUp = function () {
  window.scrollTo(0, 0);
};
let = moveDown = function () {
  window.scrollTo(0, scrollHeight);
};


window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
    downButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
    downButton.classList.remove('shown');
  }
});

upButton.addEventListener('click', moveUp);
downButton.addEventListener('click', moveDown);


// element.style.color = 'green';
