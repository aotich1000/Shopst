function currency(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
createProduct();
list_product_pagi(1);
function createProduct() {
 
    var ProductArray = [
      { productId: 1, category: '1', img: 'logo.jpg', nameP: 'Product 1', price: 100000000 },
      { productId: 2, category: '1', img: 'logo.jpg', nameP: 'Product 2', price: 100000000 },
      { productId: 3, category: '1', img: 'logo.jpg', nameP: 'Product 3', price: 100000000 },
      { productId: 4, category: '1', img: 'logo.jpg', nameP: 'Product 4', price: 100000000 },
      { productId: 5, category: '1', img: 'logo.jpg', nameP: 'Product 5', price: 100000000 },
      { productId: 6, category: '1', img: 'logo.jpg', nameP: 'Product 6', price: 100000000 },
      { productId: 7, category: '1', img: 'logo.jpg', nameP: 'Product 7', price: 100000000 },
      { productId: 8, category: '1', img: 'logo.jpg', nameP: 'Product 8', price: 100000000 },
      { productId: 9, category: '1', img: 'logo.jpg', nameP: 'Product 9', price: 100000000 },
      { productId: 10, category: '1', img: 'logo.jpg', nameP: 'Product 10', price: 100000000 },
    ];
    localStorage.setItem('product', JSON.stringify(ProductArray));
}
var current_page = 1;
var limit = 10;
var count_page;
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
function showProduct(title){
  var s ='';
  s += '<div class="title-content middle-content">'+
      '<h2>' + title +'</h2>'+
      '<button>Xem thêm</button>'+
      '</div>';

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
                  '<a href="#"> Chi tiết </a>'+
              '</div>'+
          '</div> </div>';
  }
  s +=  '<div class="flex-container middle-content flex-wrap">' + a +'</div>' + loadPage(current_page);

  document.getElementById('test_product').innerHTML=s;
  }
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
// 
function list_product_pagi(page_num){
    start_point = (page_num - 1)*limit;
    end_point = page_num*limit;
    var productArray = JSON.parse(localStorage.getItem('product'));
    var productArrayPagi = [];
    // console.log(start_point);
    var temp = 0;
    for(i = start_point; i <  end_point; i++){
      productArrayPagi[temp] = productArray[i];
      temp = temp +  1;
    }
    localStorage.setItem('productpagi', JSON.stringify(productArrayPagi));
    showArray();
    showProduct('Sản phẩm test');
    current_page = page_num;
    // console.log(loadPage(current_page));
    // loadPage(1);
    // console.log(current_page);
    localStorage.removeItem('productpagi');
}

function loadPage(num_page){
  var s='';
  for(i=1;i<=count_page;i++){
    if(i===num_page){
      s+= '<button class="pagi-item active">'+ i +'</button>';
    }
    else{
      s+= '<button class="pagi-item">'+ i +'</button>';
    }
  } 
  s = '<div class="pagination">' + s + '</div>';

  // document.getElementById('pagi').innerHTML=s;
  return s;
}