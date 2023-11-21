// Kiểm tra xem đã đăng nhập hay chưa
function checkLoggedIn() {
    var username = localStorage.getItem('username');
      document.getElementById("welcome-message").textContent = "Xin chào " + username + "!";
      document.getElementById("logout-button").style.display = "block";
      
  };
  // Xử lý sự kiện nút đăng xuất
  document.getElementById("logout-button").addEventListener("click", function() {
    // Xóa thông tin đăng nhập trong LocalStorage
    localStorage.removeItem('username');
  
    // Chuyển hướng về trang "test.html"
    window.location.href = "test.html";
  });
  
  // Kiểm tra trạng thái đăng nhập khi trang được tải
  checkLoggedIn();
// import 'slide.js';
function currency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
  }
  createProduct();
  createBanner();
  // list_product_pagi(1); 
  function createProduct() {
   
      var ProductArray = [
        { productId: 1, category: '1', img: 'logo.jpg', nameP: 'Product 1', price: 100000000 },
        { productId: 2, category: '1', img: 'logo.jpg', nameP: 'Product 2', price: 100000000 },
        { productId: 3, category: '1', img: 'logo.jpg', nameP: 'Product 3', price: 100000000 },
        { productId: 4, category: '1', img: 'logo.jpg', nameP: 'Product 4', price: 100000000 },
        { productId: 5, category: '2', img: 'logo.jpg', nameP: 'Product 5', price: 100000000 },
        { productId: 6, category: '2', img: 'logo.jpg', nameP: 'Product 6', price: 100000000 },
        { productId: 7, category: '2', img: 'logo.jpg', nameP: 'Product 7', price: 100000000 },
        { productId: 8, category: '2', img: 'logo.jpg', nameP: 'Product 8', price: 100000000 },
        { productId: 9, category: '2', img: 'logo.jpg', nameP: 'Product 9', price: 100000000 },
        { productId: 10, category: '2', img: 'logo.jpg', nameP: 'Product 10', price: 100000000 },
      ];
      localStorage.setItem('product', JSON.stringify(ProductArray));
  }
  function createBanner() {
   
    var BannerArray = [
      { BannerId: 1, img: 'Banner_1.jpg', nameP: 'Banner 1'},
      { BannerId: 2, img: 'Banner_2.jpg', nameP: 'Banner 2'},
      { BannerId: 3, img: 'Banner_3.jpg', nameP: 'Banner 3'}
    ];
    localStorage.setItem('banner', JSON.stringify(BannerArray));
  }
  
  var current_page = 1;
  var limit = 5;
  var count_page;
  var current_category;
  var productArray = JSON.parse(localStorage.getItem('product'));
  count_page = Math.ceil(productArray.length/limit);
  {/*                   <div class="card">
                          <div class="card-header"></div>
                          <div class="card-body">
                              <img src="./img/logo.jpg" alt="anh1">
                          </div>
                          <div class="card-footer">
                              <p><a href=""><b>Whotao?</b></p>
                              <p>None Price</a></p>
                          </div>
                          <div class="card-overlay hidden">
                              <div class="overlay-item">
                                  <a href="#">Thêm vào giỏ hàng</a>
                              </div>
                              <div class="overlay-item">
                                  <a href="#"> Chi tiết
                              </div>
                          </div> */}
  function showProduct(id){
    var s ='';
    var a =''
    var productArray = JSON.parse(localStorage.getItem('productpagi'));
    if (productArray && productArray.length > 0) {
    for (var i = 0; i < productArray.length; i++) {
        a+= '<div class="card">'+
            '<div class="card-header"></div>'+
            '<div class="card-body">'+
            '<img src="./img/'+ productArray[i].img +'" alt="anh1"></img>'+
            '</div>'+
            '<div class="card-footer">'+
                '<p><a href=""><b>'+ productArray[i].nameP +'</b></p>'+
                '<p>'+ productArray[i].price +'</a></p>'+
            '</div>'+
            '<div class="card-overlay hidden">'+
                '<div class="overlay-item">'+
                    '<a href="#">Thêm vào giỏ hàng</a>'+
                '</div>'+
                '<div class="overlay-item">'+
                    '<a onclick="showProductInfo('+productArray[i].productId+')"> Chi tiết </a>'+
                '</div>'+
            '</div> </div>';
    }
    // console.log(current_page);
    s +=  '<div class="container"><div class="flex-container middle-content flex-wrap">' + a +'</div>' + loadPage() + blockProductInfo() + '</div>';
  
    document.getElementById(id).innerHTML=s;
    }
  }
  
  
  function blockProductInfo()
  {
    var s='';
    var a= '<div id="info">'+
       '<button type="button" class="close" onClick="closeProductInfo()">+</button>'+
        '<div class="left">'+
            '<img id="imgbig" src="">'+
        '</div>'+
        '<div class="right">'+
            '<h2 id="productname"></h2>'+
            '<h4 id="productprice"></h4>'+
            '<div class="right-flex">'+
            '<h4>Số lượng</h4>'+
            '<div>'+
            '<button class="quantitydown" onClick="quantitydown()">-</button><input type="text" id="quantity" value="1"><button class="quantityup" onClick="quantityup()">+</button>'+
           '</div>'+
            '</div>'+
            '<button class="addtocart">Thêm vào giỏ</button>'+
            '<div id="share-buttons">'+
                '<a class="facebook" target="blank"><i class="fab fa-facebook"></i></a>'+
                '<a class="twitter" target="blank"><i class="fab fa-twitter"></i></a>'+                          
                '<a class="reddit" target="blank"><i class="fab fa-reddit"></i></a>'+                         
                '<a class="telegram" target="blank"><i class="fab fa-telegram"></i></a>'+          
            '</div>'+
  
              '<div class="callphone">'+
                '<p>Gọi mua hàng:'+
                  '<a>1111.1111.111</a>'+
                  '<span>(9h-16h)</span>'+
                '</p>'+
              '</div>'+
                  '<div class="r-note"><i class="fa-solid fa-truck-fast fa-lg"></i><p>Giao hàng tận nơi</p></div>'+
                  '<div class="r-note"><i class="fa-solid fa-hand-holding-dollar fa-lg"></i><p>Ưu đãi mỗi ngày</p></div>'+
                  '<div class="r-note"><i class="fa-regular fa-credit-card fa-lg"></i></i><p>Thanh toán COD,BANK,MOMO</p></div>'+
        '</div>'+
    '</div>';
  s='<div id="productInfo" class="modal">'+a+'</div>';
  return s;
  }
  
  
  function showProductInfo(productid)
  {
    document.getElementById('productInfo').style.display = 'block';
    var productArray=JSON.parse(localStorage.getItem('product'));
    for(var i=0;i<productArray.length;i++){
          if(productArray[i].productId==productid){
              document.getElementById('productname').innerHTML = productArray[i].nameP;
              document.getElementById('productprice').innerHTML = 'Giá: '+ currency(productArray[i].price);
              document.getElementById('imgbig').src='./img/'+productArray[i].img;
              document.getElementById('quantity').value = 1;
              //document.querySelector('#info .right button.addtocart').setAttribute();
          }
      }
  const link = encodeURI(window.location.href);
  const msg = encodeURIComponent('Product here');
  const title = encodeURIComponent('Welcome');
  
  const fb = document.querySelector('.facebook');
  fb.href = `https://www.facebook.com/share.php?u=${link}`;
  
  const twitter = document.querySelector('.twitter');
  twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;
  
  const reddit = document.querySelector('.reddit');
  reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
  
  const telegram = document.querySelector('.telegram');
  telegram.href = `https://telegram.me/share/url?url=${link}&text=${msg}`;
  }
  function closeProductInfo(){
  
      document.getElementById('productInfo').style.display = 'none';
  }
  
  
  
  function showArray(){
    var getItemP = localStorage.getItem('productpagi');
    var showItem = JSON.parse(getItemP);
    console.log(showItem);
    // for(i=0; i<showItem.length;i++){
    //   console.log(showItem[i].img);
    // }
    
  }
  
  //Phần trang
  // page_num = 1 trang hiện tại
  // limit = 10 số phần tử tối đa cho mỗi trang
  // start_point điểm bắt đầu
  // các trạng thái điểm bắt đầu gồm
  // 1, khởi đầu với trang đầu tiên start_point = 1
  // 2, khời đầu với trang thứ n start_point = (page_num-1)*limit
  // VD: page_num = 2
  // với công thức ta có start_point =  (2-1)*10 = 10
  // page_num = 3
  // với công thức ta có start_point =  (3-1)*10 = 20
  // khi load trang mặc định pagi = 1
  // được quy định ở hàm showProduct
  // để hiển thị được sản phẩm theo phân loại
  // cần lọc mảng sản phẩm theo phân loại
  // tính toán lại số trang
  // set lại trang ban đầu 
  
  function ArrayProductForCategory(category){
    var productArray = JSON.parse(localStorage.getItem('product'));
    var productArrayCategory = [];
    var temp = 0;
    for(i = 0; i <  productArray.length; i++){
      if(productArray[i].category === category){
        productArrayCategory[temp] = productArray[i];
        temp = temp +  1;
      }
    }
    localStorage.setItem('productcategory', JSON.stringify(productArrayCategory));
    count_page = Math.ceil(productArrayCategory.length/limit);
  }
  
  function list_product_pagi(page_num,id,category){
      start_point = (page_num - 1)*limit;
      end_point = page_num*limit;
      var productArrayPagi = [];
      // console.log(start_point);
      var temp = 0;
  
      if(category != null){
        ArrayProductForCategory(category);
        var productArray = JSON.parse(localStorage.getItem('productcategory'));
        // console.log(productArray);
      }else
        var productArray = JSON.parse(localStorage.getItem('product'));
  
      if( productArray.length < end_point){
        end_point = productArray.length + start_point;
      }
      if ( productArray.length < end_point && productArray.length > limit ){
        end_point = productArray.length;
      }
  
      for(i = start_point; i <  end_point; i++){
        productArrayPagi[temp] = productArray[i];
        temp = temp +  1;
      }
      localStorage.setItem('productpagi', JSON.stringify(productArrayPagi));
      showArray();
      
      current_category = category;
      current_page = page_num;
      showProduct(id);
      // console.log(loadPage(current_page));
      // loadPage(1);
      // console.log(current_page);
      localStorage.removeItem('productpagi');
  }
  
  function loadPage(){
    var s='';
    for(i=1;i<=count_page;i++){
      if(i==current_page){
        s+= '<button class="pagi-item active" id="'+i+'">'+ i +'</button>';
      }
      else{
        s+= '<button class="pagi-item" id="'+i+'">'+ i +'</button>';
      }
    } 
    s = '<div class="pagination">' + s + '</div>';
  
    // document.getElementById('pagi').innerHTML=s;
    return s;
  }
  // xemThem();
  
  function xemThem(){
    var xt = document.getElementById('xemthem').addEventListener('click', function(event){
      event.preventDefault();
      console.log('check');
    });
  }
  
  changePage();
  
  function changePage(){
    document.addEventListener('click', function(event){
      var targetElement = event.target;
      var targetElementId = targetElement.id;
      if(targetElementId === 'showall'){
        list_product_pagi(1,'main');
      }
      if(event.target.className === 'pagi-item') 
         list_product_pagi(targetElementId,'main',current_category);
    });
  }
  
  {/* <div class="banner">
                  <div class="container flex-container">
                      <div class="slideshow-container">
  
                          <!-- Full-width images with number and caption text -->
                          <div class="mySlides fade">
                              <div class="numbertext">1 / 3</div>
                              <img src="./img/illust_86644511_20220711_152248.jpg" style="width:100%">
                              <div class="text">Caption Text</div>
                          </div>
  
                          <div class="mySlides fade">
                              <div class="numbertext">2 / 3</div>
                              <img src="./img/illust_86644511_20220711_152252.jpg" style="width:100%">
                              <div class="text">Caption Two</div>
                          </div>
  
                          <div class="mySlides fade">
                              <div class="numbertext">3 / 3</div>
                              <img src="./img/illust_86644511_20220711_152255.jpg" style="width:100%">
                              <div class="text">Caption Three</div>
                          </div>
  
                          <!-- Next and previous buttons -->
                          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                          <a class="next" onclick="plusSlides(1)">&#10095;</a>
                      </div>
  
  
                      <!-- The dots/circles -->
                      <div style="text-align:center" class="dot-place">
                          <span class="dot" onclick="currentSlide(1)"></span>
                          <span class="dot" onclick="currentSlide(2)"></span>
                          <span class="dot" onclick="currentSlide(3)"></span>
                      </div>
                  </div>
              </div> */}
  
  // Limit banner là 3
  // tạo một banner mới là 
  
  var limit_banner = 3;
  // showBanner();
  function showBanner(){
    var s='<div class="banner">'+
          '<div class="container flex-container">'+
          '<div class="slideshow-container">';
    var j = 1;
    var BannerArray = JSON.parse(localStorage.getItem('banner'));
    for(var i=1;i<=limit_banner;i++){
        s += '<div class="mySlides fade">'+
        '<div class="numbertext">'+ i +' / 3</div>'+
        '<img src="./img/'+BannerArray[i-1].img +'" style="width:100%">'+
        '<div class="text">Caption Text</div>'+
        '</div>';
    }
        s+= '</div>'+
            '<div style="text-align:center" class="dot-place">';
    for(var i=0; i < limit_banner;i++){
      s+= '<span class="dot" onclick="currentSlide('+j+')"></span>';
      j++;
    }
      s+= '</div></div>';
      document.getElementById('banner').innerHTML=s;
      showSlides();
      
  }
  
  function showTitle(title){
    var s = '';
    s += '<div class="title-content middle-content">'+
        '<h2>' + title +'</h2>'+
        '<a href="#" id="xemthem">Xem thêm >></a>'+
        '</div>';
    return s;
  }
  
  loadWebsite();
  
  function loadWebsite(){
    window.addEventListener('load', function(){
      var Banner = this.document.createElement('div');
      Banner.id = 'banner';
      this.document.getElementById('main').appendChild(Banner);
      showBanner();
      
    })
  }

/*---------------------Cart--------------------*/
const btn=document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
  var btnitem=event.target
  var product=btnitem.parentElement
  var productimg=product.querySelector("img").src
  var productname=product.querySelector("h1").innerText
  var productprice=product.querySelector("span").innerText
  // console.log(productprice);
  addcart(productprice, productname,productimg)
}})
})

function addcart(productprice, productname, productimg){
  var addtr=document.createElement("tr")
  var cartitem=document.querySelectorAll("tbody tr")
  for(var i=0; i<cartitem.length; i++){
    var productt = document.querySelectorAll(".title")
      if(productt[i].innerHTML==productname){
        alert("Sản phẩm đã tồn tại trong giỏ hàng, hãy điều chỉnh số lưọng!")
        return
  }
}
  var trcontent='<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productimg+'" alt=""><span class="title">'+productname+'</span></td><td><p><span class="prices">'+productprice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="delete-cart">Xóa</span></td></tr>'
  addtr.innerHTML=trcontent
  var carttable=document.querySelector("tbody")
  carttable.append(addtr)
  // Lấy số lượng sản phẩm hiện tại từ phần tử hiển thị số lượng
var currentCount = parseInt(document.querySelector('.cart-count').textContent);

// Tăng số lượng sản phẩm khi thêm vào giỏ hàng
currentCount++;

// Cập nhật số lượng sản phẩm trong phần tử hiển thị số lượng
document.querySelector('.cart-count').textContent = currentCount.toString();
  carttotal()
  deletecart()
}
//---------------------Delete------------------------
function deletecart(){
  var cartitem=document.querySelectorAll("tbody tr")
  for(var i=0; i<cartitem.length; i++){
    var productt = document.querySelectorAll(".delete-cart") 
    productt[i].addEventListener("click",function(event){
      var cartdelete=event.target
      var cartitemx=cartdelete.parentElement.parentElement
      cartitemx.remove()
     // Lấy số lượng sản phẩm hiện tại từ phần tử hiển thị số lượng
var currentCount = parseInt(document.querySelector('.cart-count').textContent);

// Giảm số lượng sản phẩm khi xóa khỏi giỏ hàng
currentCount--;
// Đảm bảo số lượng sản phẩm không nhỏ hơn 0
if (currentCount < 0) {
  currentCount = 0;
}
// Cập nhật số lượng sản phẩm trong phần tử hiển thị số lượng
document.querySelector('.cart-count').textContent = currentCount.toString();
      carttotal()
})

}
}
//---------------------thaydoisoluong-------------------------
function chanceSL(){
  var cartitem=document.querySelectorAll("tbody tr")
  for(var i=0; i<cartitem.length;i++){
    var inputchance= cartitem[i].querySelector("input")
    inputchance.addEventListener("change",function(){
      carttotal()
    })
  }
}
//---------------------Totals------------------------
function carttotal(){
  var cartitem=document.querySelectorAll("tbody tr")
  var totalall=0
  for (var i=0; i<cartitem.length; i++) {
    var inputvalue = cartitem[i].querySelector("input").value
    var productprice = cartitem[i].querySelector(".prices").innerHTML
    time=inputvalue*productprice
    // plus=time.toLocaleString('de-DE')
    totalall=totalall+time

}
  var carttotalall=document.querySelector(".total-price span")
  // var carticon = document.querySelector(".cart-icon span")
  carttotalall.innerHTML=totalall
  // carticon.innerHTML=totalall
  chanceSL()
}
//-----------------------Exits------------------------
const cartexit = document.querySelector(".exit-cart")
const carticon = document.querySelector(".cart-iconn")
const cartshow = document.querySelector(".cart")
const overplay = document.querySelector(".background-overlay2");

carticon.addEventListener("click",function() {
cartshow.style.display="block"
overplay.style.display = "block";

})
cartexit.addEventListener("click",function() {
cartshow.style.display="none"
overplay.style.display = "none";

})
document.addEventListener("click", function(event) {
  if (!carticon.contains(event.target) && event.target !== cartshow && event.target !== cart) {
    cartshow.style.display="none"
    overplay.style.display = "none";
  }
});