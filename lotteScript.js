// LOTTE TEAM PROJEKT SCRIPT
window.onload = function() {

  var hero = document.getElementById('hero-image');
  var heroHeight = hero.height + 50; //70px compensates for body TopMargin
  var scrollPosition;

  function transformHero(e) {
    scrollPosition = parseInt(document.documentElement.scrollTop);
    if (scrollPosition < heroHeight) {
      hero.style.opacity = 1 - (scrollPosition / heroHeight);
    }
  }
  document.addEventListener('scroll', transformHero)
  transformHero();
}
