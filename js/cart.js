
// var cart = [
//     { productId: 1, category: '1', img: 'anh-cho-Akita-5.jpg', nameP: 'Chó Akita', price: 452, quantity : 2},
//     { productId: 2, category: '1', img: 'anh-cho-alaska-182921.jpg', nameP: 'Chó alaska', price: 682 , quantity : 2},
//     { productId: 3, category: '1', img: 'anh-cho-bac-ha-8.jpg', nameP: 'Chó Bắc Hà', price: 782, quantity : 2},
//     { productId: 4, category: '1', img: 'anh-cho-Becgie-2.jpg', nameP: 'Chó Becgie', price: 479, quantity : 2},
//     { productId: 5, category: '2', img: '2-bengal-1252-1247x1496.jpg', nameP: 'Mèo Bengal', price: 641, quantity : 2},
//     { productId: 6, category: '2', img: '2-nhan-su-ma-1257-1-1247x1496.jpg', nameP: 'Mèo nhân sư', price: 990, quantity : 2},
//     { productId: 7, category: '2', img: 'aln-xam-trang-chan-lun-tai-cup-1247x1496.jpg', nameP: 'Mèo xám trắng chân lùn tai cụt', price: 699, quantity : 2}
// ];

var cart = [];

function addcart(id, soluong) {
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

}

function loadCart() {
  var s = ``;
  totalcost = 0;
  var totalQuantity = 0; // Tổng số lượng sản phẩm

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
    totalQuantity += Number(cart[i].quantity); // Cập nhật tổng số lượng sản phẩm
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

  // Gán tổng số lượng sản phẩm vào class "cart-count"
  document.querySelector('.cart-count').textContent = totalQuantity;
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
  addcart(idp, quan);
  loadCart(); // Cập nhật giỏ hàng sau khi thêm sản phẩm
}
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