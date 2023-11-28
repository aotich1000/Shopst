// import 'slide.js';
function currency(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '$';
}

var current_page = 1;
var limit = 15;
var count_page;
// var current_action = 'showall';
var productArray = JSON.parse(localStorage.getItem('product'));
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
                                <a href="#"> Chi tiết
                            </div>
                        </div> */}
//show produc 
//có hai dạng xem thử và xem theo sản phảm/phân loại/tìm kiếm có phân trang
function showProduct(listitem){
  var s ='';
  var a =''
  var productArray = JSON.parse(localStorage.getItem(`${listitem}`));
  if (productArray && productArray.length > 0) {
  for (var i = 0; i < productArray.length; i++) {
      a+= '<div class="card">'+
          '<div class="card-header"></div>'+
          '<div class="card-body">'+
          '<img src="./img/'+ productArray[i].img +'" alt="anh1"></img>'+
          '</div>'+
          '<div class="card-footer">'+
              '<p><a href=""><b>'+ productArray[i].nameP +'</b></p>'+
              '<p>'+ productArray[i].price +'$</a></p>'+
          '</div>'+
          '<div class="card-overlay hidden">'+
              '<div class="overlay-item">'+
                  '<a onclick="showProductInfo('+productArray[i].productId+')"> Xem chi tiết </a>'+
              '</div>'+
              '<div class="overlay-item">'+
                  '<a href="#" onclick=addcart('+productArray[i].productId+',1)> + Thêm vào giỏ hàng</a>'+
              '</div>'+
          '</div> </div>';
  }
  // console.log(current_page);
  s +=  '<div class="container"><div class="flex-container listcard flex-wrap">' + a +'</div>' + loadPage() + blockProductInfo() + '</div>';

  return s;
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
          '<input type="hidden" name="idp" id="idp" value="1">'+
          '<button class="addtocart" onclick=getquantity()>Thêm vào giỏ</button>'+
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
      document.getElementById('idp').value = productArray[i].productId;
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



function showArray(array){
  var getItemP = localStorage.getItem(`${array}`);
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
// 

function searchProducts(id,category) {
  var productArray = JSON.parse(localStorage.getItem('product'));
  var searchName = document.getElementById(`${id}`).value.toLowerCase();
  var searchCategory = document.getElementById("searchCategory").value;
  var searchMinPrice = parseFloat(document.getElementById("searchMinPrice").value);
  var searchMaxPrice = parseFloat(document.getElementById("searchMaxPrice").value);
  
  
  // console.log(searchName);
  // console.log(searchName);

  if(category != null){
    searchCategory = category;
  }
  
  var filteredProducts = productArray.filter(function(product) {
    var nameMatch = product.nameP.toLowerCase().includes(searchName);
    var categoryMatch = (searchCategory === "" || product.category === searchCategory);
    var priceMatch = (isNaN(searchMinPrice) || product.price >= searchMinPrice) &&
                     (isNaN(searchMaxPrice) || product.price <= searchMaxPrice);

    return nameMatch && categoryMatch && priceMatch;
  });

  console.log(filteredProducts);
  if(filteredProducts.length == 0){
    document.getElementById(`${id}`).value = '';
    alert('Không tìm thấy kết quả');
  }else{
    localStorage.setItem("searchResults", JSON.stringify(filteredProducts));
    current_action = 'search';
    list_product_pagi(1,`main`,current_action);
  }

}

function list_product_pagi(page_num,id,action){
    start_point = (page_num - 1)*limit;
    end_point = page_num*limit;
    var productArrayPagi = [];

    var temp = 0;
    if(action == `search`){
      var productArray = JSON.parse(localStorage.getItem(`searchResults`));
      count_page = Math.ceil(productArray.length/limit);
    }else{
      var productArray = JSON.parse(localStorage.getItem(`product`));
      count_page = Math.ceil(productArray.length/limit);
    }


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
    showArray('productpagi');
    current_page = page_num;
    
    document.getElementById(`${id}`).innerHTML = showProduct('productpagi');
    // console.log(loadPage(current_page));
    // loadPage(1);
    // console.log(current_page);
    localStorage.removeItem('productpagi');
}

function loadPage(){
  var s='';
  console.log(count_page);
  if(count_page != '1'){
  for(i=1;i<=count_page;i++){
    if(i==current_page){
      s+= '<button class="pagi-item active" id="'+i+'">'+ i +'</button>';
    }
    else{
      s+= '<button class="pagi-item" id="'+i+'">'+ i +'</button>';
    }
  } 
  }
  s = '<div class="pagination">' + s + '</div>';
  // }
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
    // console.log(event.target.value);
    if(targetElement.id === 'action' && targetElement.value === 'showall'){
      searchProducts('searchNameA');
    }
    if(targetElement.id === 'action' && targetElement.value === 'index'){
      document.getElementById('main').innerHTML = "";
      showBanner('main');
      showPreviewProduct();
    }
    if(event.target.className === 'pagi-item') {
       list_product_pagi(targetElementId,'main',current_action);
    }
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
function showBanner(id){
  var Banner = this.document.createElement('div');
    Banner.id = 'banner';
    Banner.className = 'banner';
    this.document.getElementById(`${id}`).appendChild(Banner);
  var s='<div class="container flex-container">'+
        '<div class="slideshow-container">';
  var j = 1;
  var BannerArray = JSON.parse(localStorage.getItem('banner'));
  for(var i=1;i<=limit_banner;i++){
      s += '<div class="mySlides fade">'+
      '<div class="numbertext">'+ i +' / 3</div>'+
      '<img src="./img/'+BannerArray[i-1].img +'" style="width:100%">'+
      // '<div class="text">Caption Text</div>'+
      '</div>';
  }
      s+= '</div>'+
          '<div style="text-align:center" class="dot-place">';
  for(var i=0; i < limit_banner;i++){
    s+= '<span class="dot" onclick="currentSlide('+j+')"></span>';
    j++;
  }
    s+= '</div>';
    document.getElementById('banner').innerHTML=s;
    showSlides();
    
}
function showProduct_none_pagi(listitem){
  var s ='';
  var a =''
  var productArray = JSON.parse(localStorage.getItem(`${listitem}`));
  if (productArray && productArray.length > 0) {
  for (var i = 0; i < productArray.length; i++) {
      a+= '<div class="card">'+
          '<div class="card-header"></div>'+
          '<div class="card-body">'+
          '<img src="./img/'+ productArray[i].img +'" alt="anh1"></img>'+
          '</div>'+
          '<div class="card-footer">'+
              '<p><a href=""><b>'+ productArray[i].nameP +'</b></p>'+
              '<p>'+ currency(productArray[i].price) +'</a></p>'+
          '</div>'+
          '<div class="card-overlay hidden">'+
              '<div class="overlay-item">'+
                  '<a onclick="showProductInfo('+productArray[i].productId+')"> Xem chi tiết </a>'+
              '</div>'+
              '<div class="overlay-item">'+
                  '<a href="#" onclick=addcart('+productArray[i].productId+',1)> + Thêm vào giỏ hàng</a>'+
              '</div>'+
          '</div> </div>';
  }
  // console.log(current_page);
  s +=  '<div class="container"><div class="flex-container listcard flex-wrap">' + a +'</div>' + blockProductInfo() + '</div>';

  return s;
  }
}

function showPreviewProduct(){
    var previewP = this.document.createElement('div');
    previewP.id = 'previewProduct';
    previewP.className = 'container';
    this.document.getElementById('main').appendChild(previewP);
    var productArray = JSON.parse(localStorage.getItem('product'));
    var preProduct = shuffleArray(productArray);
    localStorage.setItem('preProduct', JSON.stringify(preProduct));
    var s = showTitle('Gợi ý hôm nay') + showProduct_none_pagi('preProduct');
    document.getElementById('previewProduct').innerHTML = s;
}

function showTitle(title){
  var s = '';
  s += '<div class="title-content middle-content">'+
      '<h2>' + title +'</h2>'+
      '<a href="#" onclick="list_product_pagi(1,`main`)">Xem thêm >></a>'+
      '</div>';
  return s;
}

loadWebsite();

function loadWebsite(){
  window.addEventListener('load', function(){
    checkOnline();
    showBanner('main');
    showPreviewProduct();
  })
}

function quantityup(){
  var newquan = document.getElementById('quantity');
      newquan.value =  parseInt(newquan.value) + 1;
}

function quantitydown(){
  var newquan = document.getElementById('quantity');
  if(newquan.value > 1)
      newquan.value =  parseInt(newquan.value) - 1;
}

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.slice(0,15);
}
showMenu();
function showMenu(){
  var s = `<div class="container flex-container abc" style="background-color: #04AA6D;"> 
      <div class="menu-item"><button class="activeMenu" id="action" value="index">Trang chủ </button> </div>
      <div class="menu-item"><button id="action" value="showall">Sản phẩm</button> </div>
      <div class="menu-item"><button onclick="searchProducts('searchNameA','chó')">Chó cảnh</button> </div>
      <div class="menu-item"><button onclick="searchProducts('searchNameA','mèo')">Mèo cảnh</button> </div>
      <div class="menu-item"><button onclick="searchProducts('searchNameA','Đồ chơi')">Đồ chơi</button> </div>
      <div class="menu-item"><button onclick="searchProducts('searchNameA','Đồ Ăn')">Đồ ăn</button> </div>
      <div class="menu-item"><button onclick="opensearch()">Tìm kiếm nâng cao</button> </div>
      <div class="menu-item hidden-menu"><button onclick="opencart()">Giỏ hàng</button> </div>
      <div class="menu-item hidden-menu" id='dangnhapmenu'><button onclick = "openlogin()"> Đang nhập</button> </div>
      <div class="menu-item hidden-menu" id='qltk'></div>
</div>`
  document.getElementById('mainmenu').innerHTML = s;
}
var a = JSON.parse(localStorage.getItem('user-list'));
console.log(a);



function breadcrumb(action,content){
  if(action == "search"){
    var s = `<li>Trang chủ</li>
            <li>Sản phẩm</li>
            <li>Tìm kiếm</li>
            <li>${content}</li>`;
  }
  document.getElementById('breadcrumb').innerHTML = s;
}


let buttons = document.querySelectorAll('.menu-item button');

function reloadActive(activeMenuIndex) {
    let lastActive = document.querySelector(".menu-item button.activeMenu");
    if (lastActive) {
        lastActive.classList.remove("activeMenu");
    }
    buttons[activeMenuIndex].classList.add("activeMenu");
}

function handleButtonClick(key) {
    reloadActive(key);
}

buttons.forEach((button, key) => {
    button.addEventListener("click", function () {
        handleButtonClick(key);
    });
});

var userArray =[];

function checkOnline() {
  userArray = JSON.parse(localStorage.getItem('userlogin'));
  if (userArray) {
    var welcomeMessageElement = document.getElementById("welcome-message");
    welcomeMessageElement.style.display = "block";
    document.querySelector("#welcome-message .showname").innerHTML = "Xin chào: " + userArray.username + "!";
    document.getElementById('login-icon').style.display = "none";
    return true;
  }
}