function checkLogin()
{
    if(localStorage.getItem('userlogin')){
    var user=JSON.parse(localStorage.getItem('userlogin'));
    document.getElementById("login-icon").style.display = "none";
    welcomeMessageElement.style.display="block";
    document.querySelector("#welcome-message .showname").innerHTML = "Xin chào: " + user.username + "!";
    }
}