var mq = window.matchMedia("(min-width: 768px)");
// var scrollHeight = document.body.clientHeight;
var menuFixed = document.querySelector('.main-nav')


mediaqueryresponse(mq);
mq.addListener(mediaqueryresponse);

function mediaqueryresponse(mq) {
  if (mq.matches){
    window.addEventListener('scroll', function (menuScroll) {
      if (window.pageYOffset > 200) {
        menuFixed.classList.add('main-nav--fixed');
      } else {
        menuFixed.classList.remove('main-nav--fixed');
      }
    });
  }
}
