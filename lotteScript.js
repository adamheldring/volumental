// LOTTE TEAM PROJEKT SCRIPT
window.onload = function() {

  var hero = document.getElementById('hero-image');
  var heroHeight = hero.height + 50; //70px compensates for body TopMargin
  var scrollPosition;

  function transformHero(e) {
    heroHeight = hero.height + 50;
    scrollPosition = document.scrollingElement.scrollTop;
    if (scrollPosition < heroHeight) {
      hero.style.opacity = 1 - (scrollPosition / heroHeight);
    }
  }

  document.addEventListener('scroll', transformHero) //runs transformhero on scroll
  window.addEventListener('resize', transformHero) //runs transfomrhero on resize
  transformHero(); //runs tranformhero on load and re-load
}
