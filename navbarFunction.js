window.onload = function () {
  var hamburger = document.getElementById('hamburger')
  var mobileNavbar = document.getElementById("navbar");
  console.log(mobileNavbar);

  function navbarFunction() {
    console.log(mobileNavbar);
    if (mobileNavbar.className === "sticky navbar") {
      console.log("yes");
      console.log(mobileNavbar.className);
        mobileNavbar.className = "sticky navbar responsive"
    //     x.className += " responsive";
    // } else {
    //     x.className = "navbar";
    } else {
      console.log("no");
      console.log(mobileNavbar.className);
      mobileNavbar.className = "sticky navbar"
    }
  }
  hamburger.addEventListener("click", navbarFunction);
}
