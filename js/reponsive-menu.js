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
var array=JSON.parse(localStorage.getItem('userlogin'));
function checkonline(){
  // var array=JSON.parse(localStorage.getItem('userlogin'));

  console.log(array);
  if(array.length == 1){
    var welcomeMessageElement = document.getElementById("welcome-message");
    welcomeMessageElement.style.display="block";
    document.querySelector("#welcome-message .showname").innerHTML = "Xin chào: " + a.username + "!";
    document.getElementById('login-icon').style.display = "none";
  }
}