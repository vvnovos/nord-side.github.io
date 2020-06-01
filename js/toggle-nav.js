var mainMenu = document.querySelector(".main-nav");
var topMenu = document.querySelector(".top-nav");
var buttonMenu = document.querySelector(".page-header__nav-button");
var mql = window.matchMedia("(min-width: 768px)")

topMenu.classList.add("visually-hidden");
mainMenu.classList.add("visually-hidden");
buttonMenu.classList.remove("visually-hidden");
// buttonMenu.classList.remove("page-header__nav-button--closed");

buttonMenu.onclick = function() {
  topMenu.classList.toggle("visually-hidden");
  mainMenu.classList.toggle("visually-hidden");
  buttonMenu.classList.toggle("page-header__nav-button--closed");
};

mediaqueryresponse(mql);
mql.addListener(mediaqueryresponse);

function mediaqueryresponse(mql) {
  if (mql.matches){
    topMenu.classList.remove("visually-hidden");
    mainMenu.classList.remove("visually-hidden");
  }else{
    topMenu.classList.add("visually-hidden");
    mainMenu.classList.add("visually-hidden");
  }
}

//http://www.javascriptkit.com/dhtmltutors/cssmediaqueries4.shtml
