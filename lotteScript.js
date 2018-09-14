// LOTTE TEAM PROJEKT SCRIPT
window.onload = function() {

  //Mobile navbar popup variables
  var hamburger = document.getElementById('hamburger')
  var mobileNavbar = document.getElementById("navbar");

  //Scroll effect variables
  var hero = document.getElementById('hero-image-container');
  var heroHeight = 812; //70px compensates for body TopMargin
  var scrollPosition;


  //Scroll effect function
  function transformHero(e) {
    scrollPosition = document.scrollingElement.scrollTop;
    if (scrollPosition < heroHeight) {
      hero.style.opacity = 1 - (scrollPosition / heroHeight);
    }
  }

  //Mobile navbar popuop function
  function navbarFunction() {
    if (mobileNavbar.className === "navbar") {
      mobileNavbar.className = "navbar responsive"
    } else {
      mobileNavbar.className = "navbar"
    }
  }

  document.addEventListener('scroll', transformHero) //runs transformhero on scroll
  window.addEventListener('resize', transformHero) //runs transfomrhero on resize
  transformHero(); //runs tranformhero on load and re-load

  hamburger.addEventListener("click", navbarFunction); //pops up fullscreen menu when clicking hamburger in mobile view
}

// ADDING GOOGLE MAP

// Initialize and add the map
function initMap() {
// The location of LotteMainStore
var LotteMainStore = {lat: 37.564463, lng: 126.981608};
var LotteOutletStore= {lat: 37.571638, lng: 126.966565};
// The map, centered at LotteMainStore
var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 12, center: LotteMainStore});
// The marker, positioned at LotteMainStore
var marker = new google.maps.Marker({position: LotteMainStore, map: map});
var marker2 = new google.maps.Marker({position: LotteOutletStore, map: map});
}
