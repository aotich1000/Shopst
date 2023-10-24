function myFunction(x) {
    var topbar = document.getElementsByClassName("topbar");
    if (x.matches) { // If media query matches
      topbar.style.display = "none";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 500px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes