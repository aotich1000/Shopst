// function checkLogin() {
// 	if(localStorage.getItem('userlogin'))
// 	{
// 		var user = JSON.parse(localStorage.getItem('userlogin'));
// 		welcomeMessageElement.style.display="block";
// 		document.querySelector("#welcome-message .showname").innerHTML = "Xin chào: " + a.username + "!";
// 		document.getElementById("login-icon").style.display = "none";
// 	}
// 	else {
// 		return;
// 	}
// }

function add1()
{
	var s='';
	s='<div id="st-container">'+
	'<div class="st-left-col">'+
		'<div class="block-menu">'+


			'<div class="block-item-menu">'+
				'<a onclick="add2(\'info\')" href="#" id="info">'+
				'<div class="item-menu">'+
					'<i class="fa-solid fa-house fa-lg"></i>'+
					'<p>Thông tin khách hàng</p>'+
				'</div>'+
			'</a>'+
			'</div>'+
		   
			'<div class="block-item-menu">'+
				'<a onclick="add2(\'invoice\')" href="#" id="invoice">'+
				'<div class="item-menu">'+
					'<i class="fa-solid fa-clock-rotate-left fa-lg"></i>'+
					'<p>Hóa đơn đã mua</p>'+
				'</div>'+
			'</a>'+
			'</div>'+

			'<div class="block-item-menu">'+
				'<a onclick="add2(\'exit\')" href="#" id="exit">'+
				'<div class="item-menu">'+
					'<i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i>'+
					'<p>Thoát</p>'+
				'</div>'+
			'</a>'+
			'</div>'+
		  
		'</div>'+
	'</div>'+
	'<div class="st-right-col">'+'</div>'+
'</div>';
	s = `<div class="container"> ${s} </div>`
 document.getElementById("main").innerHTML=s;
//  document.getElementById("main").style.display="none";
}




function add2(id)
{
   var s='';
   var user = JSON.parse(localStorage.getItem('userlogin'));
   if(id=='page')
   {
   s='<p>'+'Xin chào '+user.fullname+'</p>';
   document.querySelector('#st-container .st-right-col').innerHTML=s;
   }
   else {
    if(id=='info')
	{
    s='<div class="from-group"><label for="name">Họ và tên</label>'+
	'<input type="text" id="name" disabled value="'+user.fullname+'"><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

	'<div class="from-group"><label for="address">Email</label>'+
	'<input type="text" id="address" disabled value="'+user.email+'"><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

    
	'<div class="from-group"><label for="address">Số điện thoại</label>'+
	'<input type="text" id="address" disabled value="'+user.phonenumber+'"><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

	'<div class="from-group">'+
	'<button class="block-1-pass" onclick="password()"> Đổi mật khẩu ?</button>'+
	'<div class="block-2-pass"><div class="block-2-passDT"></div>'+
	'</div></div>'+

	'<div onclick="updateInfo()" class="btn-from-submit-update">Cập nhật thông tin</div>';
    document.querySelector('#st-container .st-right-col').innerHTML=s;
	} 
	else if (id=='invoice')
	{
		var x='<div class="block-1">'+

		'</div>'+

		'<div class="block-2">'+

		'</div>'+

		'<div class="block-3 modal">'+
			'<div class="bill-dt">'+

		   '</div>'+
		'</div>';
		document.querySelector('#st-container .st-right-col').innerHTML=x;
		showbill();
	} 
	else if(id=='exit')

	{
		location.reload();
	}
}

 }


 function showbill(){
	if(localStorage.getItem('order-list')===null && localStorage.getItem('order-detail')===null){
		document.querySelector('#st-container .st-right-col .block-2').innerHTML = 'Xin lỗi bạn chưa có đơn hàng nào';
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var billArray = JSON.parse(localStorage.getItem('order-list'));
		var productArray = JSON.parse(localStorage.getItem('product'))
		var billDTArray = JSON.parse(localStorage.getItem('order-detail'));

		var sum=0;
		var sodonhang=0;
		let tientichluy = 0;
		var s='<h2>Đơn hàng đã đặt</h2>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username ==billArray[i].user){
				s+=`<div class="billcontent">
						<div><p>Bạn đã mua đơn hàng  ${billArray[i].id}</p></div> 
						<div> ${billArray[i].status} <button onclick="showDT(${billArray[i].id})" title="Chi tiết đơn hàng">Chi tiết đơn hàng</button></div>
					</div>`;

            sodonhang++;

			// TÍNH SỐ TIỀN TÍCH LŨY
			for ( let j=0; j < billDTArray.length; j++){
				if ( billArray[i].id == billDTArray[j].id){
					let productID = billDTArray[j].product_id
					for ( let k =0; k< productArray.length; k++){
						if ( productID == productArray[k].productId){
							tientichluy += productArray[k].price
						}
					}
				}
			}
			}
		}

		console.log(tientichluy)

        var x= '<div class="block-1-text"><p>'+sodonhang+'</p> <p>Đơn hàng</p> </div>'+'<div class="block-1-text"> <p>'+ tientichluy+' $</p> <p>Số tiền tích lũy</p></div>';
		console.log(sum);
		document.querySelector('#st-container .st-right-col .block-1').innerHTML =x;
		document.querySelector('#st-container .st-right-col .block-2').innerHTML =s;
	}
}


function showDT(id)
{
	var billArray = JSON.parse(localStorage.getItem('order-list'));
	var billDTArray = JSON.parse(localStorage.getItem('order-detail'));
	var productArray=JSON.parse(localStorage.getItem('product'));
	var x=[];
	var s=0;
    for(var i=0;i<billDTArray.length;i++)
	{
		if(id==billDTArray[i].id)
		{
			//Lấy thông tin sản phẩm trong đơn hàng
			for ( let j=0; j< productArray.length; j++){
				if ( billDTArray[i].product_id == productArray[j].productId){
					nameP = productArray[j].nameP
					img = productArray[j].img
				}
			}
           var newItem={
			numofProduct:billDTArray[i].numof_product,
			nameP : nameP,
		    soluong:billDTArray[i].quantity,
			tonggia:billDTArray[i].quantity*billDTArray[i].unit_price,
			image:img
		   };
           x.unshift(newItem);
		}
	}
	var text='';
	for(var i=0;i<billArray.length;i++)
	{    if(id==billArray[i].id){
	    text+='<p>Ngày đặt hàng:  '+billArray[i].date+'</p>';
        break;
	   }
	}
	for (var i=0;i<x.length;i++)
	{
		s+=x[i].tonggia;
		text+='<div class="blockDT">'+
		'<div class="blockDT-left"><p>Tên sản phẩm : '+ x[i].nameP +'</p></div>'+
		'<div class="blockDT-left"><img src="./img/'+x[i].image+'"></div>'+
		'<div class="blockDT-right"><p>Số lượng mua : '+x[i].soluong+'</p>   <div> <p>Tổng giá: '+currency(x[i].tonggia)+'</p></div></div>'+	
		'</div>';
	}

	for(var i=0;i<billDTArray.length;i++)
	{
		if(id==billDTArray[i].id)
		{
			text+='<div class="invoice"><p>Thanh Toán</p> <div class="totalInvoice"><p>Tổng đơn hàng: </p> <p>' +currency(s)+'</p></div> </div>'
			break;
		}
	}

	text+= '<button type="button" class="close" onClick="closebillDT()">Thoát</button>';
    document.querySelector('#st-container .st-right-col .block-3').style.display='block';
    document.querySelector('#st-container .st-right-col .block-3 .bill-dt').innerHTML=text;
}

function closebillDT()
{
	document.querySelector('#st-container .st-right-col .block-3').style.display='none';
}

function password()
 {
	document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass').style.display="block";
	var s='';
	s='<div class="pass-form">'+
	'<div class="eye"><input type="password" placeholder="Mật khẩu cũ" id="pass1"><button  id="btn-2-pass1" class="btn-2" onclick="eshow(\'pass1\',\'btn-2-pass1\')"><i class="fa-regular fa-eye fa-lg"></i></button></div></div>'+
	'<div class="pass-form">'+
	'<div class="eye"><input type="password" placeholder="Mật khẩu mới" id="pass2"><button  id="btn-2-pass2" class="btn-2" onclick="eshow(\'pass2\',\'btn-2-pass2\')"><i class="fa-regular fa-eye fa-lg"></i></button></div></div>'+
	'<div class="pass-form">'+
	'<div class="eye"><input type="password" placeholder="Nhập lại mật khẩu mới" id="pass3"><button  id="btn-2-pass3" class="btn-2" onclick="eshow(\'pass3\',\'btn-2-pass3\')"><i class="fa-regular fa-eye fa-lg"></i></button></div>'+
	'</div> <div class="btn-pw"><button class="confirm" onclick="outCP()">Xác Nhận</button><button onclick="closeBlockPass()" class="close">Thoát</button></div>';
    document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass .block-2-passDT').innerHTML=s;
 }


 var usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
 var passwordRegex = /^[\w!@#$%^&*]{6,}$/;
 var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 var phoneRegex = /^\d{10}$/;
 function outCP()
 {
	var user = JSON.parse(localStorage.getItem('userlogin'));
	var x=document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass .block-2-passDT input#pass1').value;
	var y=document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass .block-2-passDT input#pass2').value;
	var z=document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass .block-2-passDT input#pass2').value;
	if(x=='' || y=='' || z=='')
	{
		customAlert('Mời bạn nhập đầy đủ','warning');
		return;
	} else if(user.password!=x)
	{
       customAlert('Bạn nhập sai mật khẩu mời nhập lại','warning');
	   return;
	}
	
	else if(!passwordRegex.test(y))
	{
	   customAlert('Mật khẩu không hợp lệ! Mật khẩu phải chứa ít nhất 6 ký tự và có thể bao gồm chữ cái, số và các ký tự đặc biệt','warning');
	   return;
	}
	else if(z!=y)
	{
	   customAlert('Mật khẩu nhập lại không khớp','warning');
	   return;
	}
	else{
      customAlert('Cập nhật mật khẩu thành công','success');
	  user.password=y;
      var userlist = JSON.parse(localStorage.getItem('user-list'));
      var userlogin = JSON.parse(localStorage.getItem('userlogin'));
      for(var i=0; i<userlist.length ;i++)
      {
        if(userlogin.username == userlist[i].username)
        {
            if(userlogin.password == userlist[i].password)
        {
           userlist[i].password=user.password;
           localStorage.setItem('userlogin',JSON.stringify(user));
           break;
        }
        }
      }
      localStorage.setItem('user-list',JSON.stringify(userlist));
	  document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass').style.display="none";
	}
 }


 function eshow(inputId, iconId) {
	const passwordInput = document.getElementById(inputId);
	const icon = document.getElementById(iconId);
	// Toggle giữa type là password và text
	passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

	// Toggle giữa eye và eye-slash
	if (passwordInput.type === 'password') {
		icon.innerHTML = '<i class="fa-regular fa-eye fa-lg"></i>';
	} else {
		icon.innerHTML = '<i class="fa-regular fa-eye-slash fa-lg"></i>';
	}
}

function closeBlockPass(){
	document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass').style.display="none";
}


function ishow()
{
   var add1=document.querySelector("#st-container .st-right-col .from-group:nth-child(1) .btn-1");
   var add2=document.querySelector("#st-container .st-right-col .from-group:nth-child(2) .btn-1");
   var add3=document.querySelector("#st-container .st-right-col .from-group:nth-child(3) .btn-1");
   
   add1.addEventListener('click',function()
   {
	document.querySelector("#st-container .st-right-col .from-group:nth-child(1) input").disabled=false;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(2) input").disabled=true;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(3) input").disabled=true;
   }
   );

   add2.addEventListener('click',function()
   {
	document.querySelector("#st-container .st-right-col .from-group:nth-child(1) input").disabled=true;
    document.querySelector("#st-container .st-right-col .from-group:nth-child(2) input").disabled=false;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(3) input").disabled=true;
   }
   );

   add3.addEventListener('click',function()
   {
	document.querySelector("#st-container .st-right-col .from-group:nth-child(1) input").disabled=true;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(2) input").disabled=true;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(3) input").disabled=false;
   }
   );
}

function updateInfo()
{
	var user = JSON.parse(localStorage.getItem('userlogin'));
	var s='';
	s=document.querySelector('#st-container .st-right-col .from-group:nth-child(1) input').value;
	user.fullname=s;

	s=document.querySelector('#st-container .st-right-col .from-group:nth-child(2) input').value;
	if(!emailRegex.test(s))
	{
        customAlert('Enail không hợp lệ!', 'warning');
		return;
	}
	else{
		user.email=s;
}	
    s=document.querySelector('#st-container .st-right-col .from-group:nth-child(3) input').value;
	if(!phoneRegex.test(s))
	{
        customAlert('Số điện thoại không hợp lệ!', 'warning');
		return;
	}
	else{
		user.phonenumber=s;
	}
	
    console.log(user);
    var userlist = JSON.parse(localStorage.getItem('user-list'));
    var userlogin = JSON.parse(localStorage.getItem('userlogin'));
    for(var i=0; i<userlist.length ;i++)
    {
      if(userlogin.username == userlist[i].username)
      {
          if(userlogin.password == userlist[i].password)
      {
         userlist[i].fullname=user.fullname;
         userlist[i].email=user.email;
         userlist[i].phonenumber=user.phonenumber;
         localStorage.setItem('userlogin',JSON.stringify(user));
         break;
      }
      }
    }
    localStorage.setItem('user-list',JSON.stringify(userlist));
	customAlert('Bạn đã cập nhật thành công','success');
    var s=document.querySelectorAll('#st-container .st-right-col .from-group input');
	for(var i=0;i<s.length;i++)
	{
		s[i].disabled=true;
	}
    var a = JSON.parse(localStorage.getItem('user-list'));
    console.log(a);
}

function customAlert(message,type) {
	if (type=='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type=='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 3500);
}


