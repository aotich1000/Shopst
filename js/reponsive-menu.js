function openmenu(){
  var menu = document.getElementById('mainmenu');
  var style = window.getComputedStyle(menu);
  if(style.display == "block")
    menu.style.display = "none";
  else
    menu.style.display = "block";
}

function opensearch(){
  var menu = document.getElementById('advand-search');
  var style = window.getComputedStyle(menu);
  if(style.display == "block"){
    menu.style.display = "none";
  }
  else{
    menu.style.display = "block";
  }
}


function openlogin(){
  const loginform = document.querySelector(".login-form");
  const overlay = document.querySelector(".background-overlay");
  loginform.style.display = "block";
  overlay.style.display = "block";
}

