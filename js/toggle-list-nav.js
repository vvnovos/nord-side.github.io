var transportLink = document.querySelector('.main-nav__link--transport');
var districtsLink = document.querySelector('.main-nav__link--districts');
var beachesLink = document.querySelector('.main-nav__link--beaches');
var routesLink = document.querySelector('.main-nav__link--routes');
var arrowLink = document.querySelector('.main-nav__link-arrow');

var subMenuTransport = document.querySelector('.submenu--transport');
var subMenuDistricts = document.querySelector('.submenu--districts');
var subMenuBeaches = document.querySelector('.submenu--beaches');
var subMenuRoutes = document.querySelector('.submenu--routes');

transportLink.onclick = function() {
  transportLink.classList.toggle('main-nav__link-arrow');
  districtsLink.classList.remove('main-nav__link-arrow');
  beachesLink.classList.remove('main-nav__link-arrow');
  routesLink.classList.remove('main-nav__link-arrow');

  subMenuTransport.classList.toggle('visually-hidden');
  subMenuDistricts.classList.add('visually-hidden');
  subMenuBeaches.classList.add('visually-hidden');
  subMenuRoutes.classList.add('visually-hidden');
  return false;
}

districtsLink.onclick = function() {
  districtsLink.classList.toggle('main-nav__link-arrow');
  transportLink.classList.remove('main-nav__link-arrow');
  beachesLink.classList.remove('main-nav__link-arrow');
  routesLink.classList.remove('main-nav__link-arrow');

  subMenuDistricts.classList.toggle('visually-hidden');
  subMenuTransport.classList.add('visually-hidden');
  subMenuBeaches.classList.add('visually-hidden');
  subMenuRoutes.classList.add('visually-hidden');
  return false;
}

beachesLink.onclick = function() {
  beachesLink.classList.toggle('main-nav__link-arrow');
  transportLink.classList.remove('main-nav__link-arrow');
  districtsLink.classList.remove('main-nav__link-arrow');
  routesLink.classList.remove('main-nav__link-arrow');

  subMenuBeaches.classList.toggle('visually-hidden');
  subMenuTransport.classList.add('visually-hidden');
  subMenuDistricts.classList.add('visually-hidden');
  subMenuRoutes.classList.add('visually-hidden');
  return false;
}

routesLink.onclick = function() {
  routesLink.classList.toggle('main-nav__link-arrow');
  transportLink.classList.remove('main-nav__link-arrow');
  districtsLink.classList.remove('main-nav__link-arrow');
  beachesLink.classList.remove('main-nav__link-arrow');

  subMenuRoutes.classList.toggle('visually-hidden');
  subMenuTransport.classList.add('visually-hidden');
  subMenuDistricts.classList.add('visually-hidden');
  subMenuBeaches.classList.add('visually-hidden');
  return false;
}

//----------------------------

// var menuNavLinks =document.querySelectorAll('.main-nav__link--list');
// var menuNav;
// var i;
// var menuNavSubMenu;


// for (i = 0; i < menuNavLinks.length; i++) {
//   menuNav = menuNavLinks[i];
//   menuNav.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     menuNavSubMenu = this.nextElementSibling;
//     this.classList.toggle('main-nav__link-arrow');
//     menuNavSubMenu.classList.toggle('visually-hidden');
//   });
// }

//---------------------------------
// alert(this.innerHTML);

