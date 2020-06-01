
var topNavList = document.querySelector('.top-nav__list');
var mainNav = document.querySelector('.main-nav');
var topNav = document.querySelector('.top-nav');

// mainNav.insertAdjacentElement('beforeend', topNavList);
// topNav.insertAdjacentElement('afterbegin', topNavList);


if (window.matchMedia("(min-width: 768px)").matches) {
  topNav.insertAdjacentElement('afterbegin', topNavList);
} else {
  mainNav.insertAdjacentElement('beforeend', topNavList);
}
