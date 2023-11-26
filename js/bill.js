function checkLogin()
{
    if(localStorage.getItem('userlogin')){
    var user=JSON.parse(localStorage.getItem('userlogin'));
    document.getElementById("login-icon").style.display = "none";
    welcomeMessageElement.style.display="block";
    document.querySelector("#welcome-message .showname").innerHTML = "Xin chào: " + user.username + "!";
    }
}

function add()
{
   var url = document.location.href;
   var temp = url.split("?");
   console.log(temp);
   var s='';
   var user = JSON.parse(localStorage.getItem('userlogin'));
   if(temp[1]=='' || temp[1]==undefined || temp[1].search('all')==0)
   {
   s='<p>'+'Xin chào '+user.fullname+'</p>';
   document.querySelector('#st-container .st-right-col').innerHTML=s;
   }
   else {
    if(temp[1]=='Info'){
    s='<div class="from-group"><label for="name">Họ và tên</label>'+
	'<input type="text" id="name" disabled value="'+user.fullname+'"><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

	'<div class="from-group"><label for="address">Email</label>'+
	'<input type="text" id="address" disabled value="'+user.email+'"><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

	'<div class="from-group"><label for="pass">Mật khẩu</label>'+
	'<div class="eye"><input type="password" id="pass" disabled value="'+user.password+'"><button class="btn-2" onclick="eshow()"><i class="fa-regular fa-eye fa-lg"></i></button></div><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

	'<div onclick="updateInfo()" class="btn-from-submit-update">Cập nhật thông tin</div>';
    document.querySelector('#st-container .st-right-col').innerHTML=s;
	}
	if(temp[1]=='Invoice')
	{
		//showbill()
	}
}

 }
