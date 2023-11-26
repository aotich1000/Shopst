function openmenu(){
  var menu = document.getElementById('mainmenu');
  var style = window.getComputedStyle(menu);
  if(style.display == "block")
    menu.style.display = "none";
  else
    menu.style.display = "block";
}