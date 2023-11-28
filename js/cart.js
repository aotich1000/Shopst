
// var cart = [
//     { productId: 1, category: '1', img: 'anh-cho-Akita-5.jpg', nameP: 'Chó Akita', price: 452, quantity : 2},
//     { productId: 2, category: '1', img: 'anh-cho-alaska-182921.jpg', nameP: 'Chó alaska', price: 682 , quantity : 2},
//     { productId: 3, category: '1', img: 'anh-cho-bac-ha-8.jpg', nameP: 'Chó Bắc Hà', price: 782, quantity : 2},
//     { productId: 4, category: '1', img: 'anh-cho-Becgie-2.jpg', nameP: 'Chó Becgie', price: 479, quantity : 2},
//     { productId: 5, category: '2', img: '2-bengal-1252-1247x1496.jpg', nameP: 'Mèo Bengal', price: 641, quantity : 2},
//     { productId: 6, category: '2', img: '2-nhan-su-ma-1257-1-1247x1496.jpg', nameP: 'Mèo nhân sư', price: 990, quantity : 2},
//     { productId: 7, category: '2', img: 'aln-xam-trang-chan-lun-tai-cup-1247x1496.jpg', nameP: 'Mèo xám trắng chân lùn tai cụt', price: 699, quantity : 2}
// ];
//-----------------------Exits------------------------
const cartexit = document.querySelector(".exit-cart")
const carticon = document.querySelector(".cart-iconn")
const cartshow = document.querySelector(".cart-table")
const overlay2 = document.querySelector(".background-overlay2");
// var userArray = [];
// userArray = JSON.parse(localStorage.getItem('userlogin'));

carticon.addEventListener("click",function opencart() {
  if ( checkOnline()) {
 
  cartshow.style.display="block"
  overlay2.style.display = "block";

}
else {
  alert("Bạn cần đăng nhập để thao tác với giỏ hàng!");
  openlogin();
}
});


cartexit.addEventListener("click",function() {
cartshow.style.display="none"
overlay2.style.display = "none";

});
//----------------------------------------------------------------
var cart = [];

function addcart(id, soluong) {
  if (checkOnline()) {
  var productArray = JSON.parse(localStorage.getItem('product'));

  var productExists = false; // Biến kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa

  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].productId == id) {
      productExists = true;

      if (cart.length === 0) {
        cart.push(productArray[i]);
        cart[0]['quantity'] = `${soluong}`;
        
      } else {
        var foundInCart = false; // Biến kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa

        for (var j = 0; j < cart.length; j++) {
          if (cart[j].productId == id) {
            cart[j]['quantity'] = `${Number(cart[j]['quantity']) + Number(soluong)}`;
            foundInCart = true;
            break;
          }
        }

        if (!foundInCart) {
          cart.push(productArray[i]);
          cart[cart.length - 1]['quantity'] = `${soluong}`;
          break;
        }
      }

      break;
    }
    
  }

  if (!productExists) {
    console.log("Sản phẩm không tồn tại");
  }

  console.log(cart);
  loadCart();
} else {
  // Người dùng chưa đăng nhập, hiển thị thông báo yêu cầu đăng nhập
  alert('Vui lòng đăng nhập để thêm vào giỏ hàng');
  loginForm.style.display="block"
  overlay.style.display="block"
}
}

function loadCart() {
    var s = ``;
    totalcost = 0;
  
    for (var i = 0; i < cart.length; i++) {
      s += `<tr>
              <th>${i + 1}</th>
              <th>${cart[i].nameP}</th>
              <th><img src="./img/${cart[i].img}" alt="a"></th>
              <th><input type="number" value="${cart[i].quantity}" min="1" onchange="updateQuantity(${i}, this.value)"></th>
              <th>${currency(cart[i].quantity * cart[i].price)}</th>
              <td><button onclick="removeItem(${i})" style="">Xoá</button></td>
              <th></th>
            </tr>`;
      totalcost += Number(cart[i].quantity * cart[i].price);
    }
  
    var a = `<table>
                <thead>
                    <th>ID sản phẩm</th>
                    <th>Tên</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Chọn</th>
                </thead>
                <tbody>
                    ${s}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Tổng tiền: ${currency(totalcost)}</th>
                    <th></th>
                  </tr>
                </tfoot>
            </table>`;
  
    console.log(totalcost);
    document.getElementById('cart-table').innerHTML = a;
  
    // Gán số lượng sản phẩm vào class "cart-count"
    document.querySelector('.cart-count').textContent = cart.length;
    var invoice = {
        items: cart,
        date: new Date().toISOString(),
      };
      saveInvoiceToLocalStorage(invoice);
  }
//---------update tổng tiền----------
function updateTotal() {
  totalcost = 0;

  for (var i = 0; i < cart.length; i++) {
    totalcost += Number(cart[i].quantity * cart[i].price);
  }
}
function getquantity() {
    var quan = document.getElementById('quantity').value;
    var idp = document.getElementById('idp').value;
    closeProductInfo();
    opencart();
    addcart(idp, quan);
    loadCart(); // Cập nhật giỏ hàng sau khi thêm sản phẩm
  
  var invoice = {
    items: cart,
    date: new Date().toISOString(),
  };

  // Lưu hóa đơn vào local storage
  saveInvoiceToLocalStorage(invoice);
}

function saveInvoiceToLocalStorage2(){

   var invoice = JSON.parse(localStorage.getItem('invoice'))
   // Tạo id cho đơn hàng mới
   var orderList = JSON.parse(localStorage.getItem("order-list"));
   var userlogin = JSON.parse(localStorage.getItem("userlogin"));

   
const date = new Date(); // Lấy ngày hiện tại
const day = date.getDate(); // Lấy ngày trong tháng (1-31)
const month = date.getMonth() + 1; // Lấy tháng (0-11)
const year = date.getFullYear(); // Lấy năm (đầy đủ 4 chữ số)
const purchase_date = `${day}-${month}-${year}`;
console.log(purchase_date);
 
   var Id = orderList[orderList.length - 1].id + 1;
   orderList.push({
     id : Id,
     user :  userlogin.username,
     date : purchase_date,
     status : "Chưa xử lý"
   })
   localStorage.setItem("order-list", JSON.stringify(orderList));
   createInvoiceDetails(invoice, Id);
   alert("Mua hàng thành công !")
   cartshow.style.display="none"
   overlay2.style.display = "none";
   document.getElementById('cart-table').innerHTML = "";
   document.querySelector('.cart-count').textContent = 0;
 }

 function createInvoiceDetails(invoice, invoiceId){

  
   var orderDetails = JSON.parse(localStorage.getItem("order-detail"))
   for ( let i=0; i < invoice.items.length; i++){
        orderDetails.push({
         id : invoiceId,
         numof_product : invoice.items.length,
         product_id : invoice.items[i].productId,
         quantity : invoice.items[i].quantity,
         unit_price : invoice.items[i].price,
         img : invoice.items[i].img
        })
   }
   localStorage.setItem("order-detail", JSON.stringify(orderDetails));
 }



function saveInvoiceToLocalStorage(invoice) {
    // Chuyển đổi đối tượng hóa đơn thành chuỗi JSON

    const invoiceJSON = JSON.stringify(invoice);
  
    // Lưu chuỗi JSON vào local storage
    localStorage.setItem('invoice', invoiceJSON);

}
  // Lấy chuỗi JSON từ local storage
const invoiceJSON = localStorage.getItem('invoice');

// Chuyển đổi chuỗi JSON thành đối tượng hóa đơn
const invoice = JSON.parse(invoiceJSON);

// Sử dụng thông tin hóa đơn
console.log(invoice.items);
console.log(invoice.date);
//-------Xóa sản phẩm----------
function removeItem(index) {
  cart.splice(index, 1)[0]; // Xoá sản phẩm khỏi giỏ hàng 
  updateTotal();
  loadCart(); 
}
//-------Thay đổi số lượng -----
function updateQuantity(index, quantity) {
  cart[index].quantity = Number(quantity);
  updateTotal();
  loadCart();
}
getquantity();

function opencart() {
  if (checkOnline()) {

cartshow.style.display="block"
overlay2.style.display = "block";

}
else {
  alert("Bạn cần đăng nhập để thao tác với giỏ hàng!");
  loginForm.style.display="block"
  overlay.style.display="block"
}
}