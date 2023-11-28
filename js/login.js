
/*---------------------------dang ki dang nhap--------------------*/
//chuyen form
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("register-link").addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("login-form").style.display = "none";
      document.getElementById("register-form").style.display = "block";
    });

    document.getElementById("login-link").addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("register-form").style.display = "none";
      document.getElementById("login-form").style.display = "block";
    });
  });
//thong tin dang ki
var registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var userlist = JSON.parse(localStorage.getItem('user-list')); 
  var id = 1;
  id = userlist.length+1;
  var username = document.getElementById("register-username").value;
  var password = document.getElementById("register-password").value;
  var email = document.getElementById("register-email").value;
  var phone = document.getElementById("register-phone").value;

  var usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
  var passwordRegex = /^[\w!@#$%^&*]{6,}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^\d{10}$/;
  var errorElement = document.getElementById('register-error');
  errorElement.innerHTML = '';

  if (!usernameRegex.test(username)) {
    errorElement.innerHTML += '*Tên đăng nhập không hợp lệ! Tên đăng nhập phải chứa ít nhất 3 ký tự và chỉ bao gồm chữ cái, số và dấu gạch dưới.<br>';
  }

  if (!passwordRegex.test(password)) {
    errorElement.innerHTML += '*Mật khẩu không hợp lệ! Mật khẩu phải chứa ít nhất 6 ký tự và có thể bao gồm chữ cái, số và các ký tự đặc biệt: !@#$%^&*<br>';
  }

  if (!emailRegex.test(email)) {
    errorElement.innerHTML += '*Email không hợp lệ! Vui lòng nhập đúng định dạng email (ví dụ: example@example.com)<br>';
  }

  if (!phoneRegex.test(phone)) {
    errorElement.innerHTML += '*Số điện thoại không hợp lệ! Vui lòng nhập 10 chữ số.<br>';
  }

  if (errorElement.innerHTML === '') {
    // Lấy danh sách người dùng từ LocalStorage (nếu có)
    var userlist = JSON.parse(localStorage.getItem('user-list')) || [];

    
    // Tạo một đối tượng người dùng mới
    var newUser = {
      id : userlist[userlist.length -1],
      username: username,
      password: password,
      email: email,
      phone: phone
    };
   
    // Thêm người dùng mới vào danh sách
    userlist.push(newUser);

    // Cập nhật danh sách người dùng trong LocalStorage
    localStorage.setItem('user-list', JSON.stringify(userlist));

    alert('Đăng ký thành công');
    document.getElementById('register-form').style.display = 'none';
    loginForm.style.display = 'block';
  }
});
//dang nhap tai khoan
var loginForm = document.getElementById("login-form");
var messageElement = document.getElementById("login-message");
var welcomeMessageElement = document.getElementById("welcome-message");
var logoutButton = document.getElementById("logout-button");

var loggedInUser;

var loginForm = document.getElementById("login-form");
var messageElement = document.getElementById("login-message");
var welcomeMessageElement = document.getElementById("welcome-message");
var logoutButton = document.getElementById("logout-button");

var adminAcc = JSON.parse(localStorage.getItem('account')) ;

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  // Kiểm tra tài khoản admin
  if (username === adminAcc.username && password === adminAcc.password) {
    messageElement.innerHTML = "Đăng nhập thành công. Đang chuyển hướng...";
    setTimeout(function() {
      window.location.href = "./admin/index.html";
    }, 1000);
    // Chuyển hướng đến trang "admin.html"
  } else {
    // Lấy danh sách người dùng từ LocalStorage
    var userlist = JSON.parse(localStorage.getItem('user-list')) || [];

   //lấy thông tin user đang đăng nhập
    for(var i=0;i<userlist.length;i++){
      if(username==userlist[i].username){
        if(password==userlist[i].password){
          localStorage.setItem('userlogin',JSON.stringify(userlist[i]));
          break;
        }
      }
    } 
    var a=JSON.parse(localStorage.getItem('userlogin'));
    console.log(a);
    


    // Kiểm tra thông tin đăng nhập
    for (var i = 0; i < userlist.length; i++) {
      if (userlist[i].username === username && userlist[i].password === password) {
        loggedInUser = userlist[i];
        break;
      }
    }

    if (a.length != 0) {
      // Hiển thị thông báo đăng nhập thành công
      messageElement.innerHTML = "Đăng nhập thành công. Đang chuyển hướng...";
      // Hiển thị thông báo chào mừng
      welcomeMessageElement.style.display="block";
      document.querySelector("#welcome-message .showname").innerHTML = "Xin chào: " + a.username + "!";
      // Chuyển hướng đến trang "test.html" sau 1 giây (để người dùng có thời gian nhìn thấy thông báo)
      setTimeout(function() {
        // Ẩn nút Đăng nhập, hiển thị nút Đăng xuất
      loginForm.style.display = "none";
      logoutButton.style.display = "block";
      overlay.style.display = "none";
      document.getElementById("login-icon").style.display = "none";
      document.getElementById("logout-icon").style.display = "block";
      document.getElementById("dangnhapmenu").innerHTML = "";
      document.getElementById("qltk").innerHTML = `<button onclick="add1()">Quản lý tài khoản</button>`;
      }, 1000);
    } else {
      // Hiển thị thông báo đăng nhập không thành công
      messageElement.innerHTML = "Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.";
    }
  }
});

logoutButton.addEventListener("click", function() {
  // Xóa thông tin người dùng đã đăng nhập
  localStorage.removeItem('userlogin');
  // Xóa thông báo chào mừng
  welcomeMessageElement.innerHTML = "";
  location.reload();
  document.getElementById("login-icon").style.display = "block";
  document.getElementById("logout-icon").style.display = "none";
  
});

//-----Hien mk------------
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

  const loginIcon = document.querySelector(".login-icon");
  const closeButtonlogin = document.querySelector(".login-exit ");
  const closeButtonregister = document.querySelector(".register-exit ");
  const loginform = document.querySelector(".login-form");
  const registerform = document.querySelector(".register-form");
  const overlay = document.querySelector(".background-overlay");
  
  // Hiển thị overlay và form khi nhấp vào biểu tượng đăng nhập
  loginIcon.addEventListener("click", function openlogin() {
    loginform.style.display = "block";
    overlay.style.display = "block";
  });
  
  // Đóng form khi nhấp vào nút "x"
  closeButtonregister.addEventListener("click", function() {
    registerform.style.display = "none";
    overlay.style.display = "none";
  
  });
  closeButtonlogin.addEventListener("click", function() {
    loginform.style.display = "none";
    overlay.style.display = "none";
  
  });

