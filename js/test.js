
var cart = [
    { productId: 1, category: '1', img: 'anh-cho-Akita-5.jpg', nameP: 'Chó Akita', price: 452, quantity : 2},
    { productId: 2, category: '1', img: 'anh-cho-alaska-182921.jpg', nameP: 'Chó alaska', price: 682 , quantity : 2},
    { productId: 3, category: '1', img: 'anh-cho-bac-ha-8.jpg', nameP: 'Chó Bắc Hà', price: 782, quantity : 2},
    { productId: 4, category: '1', img: 'anh-cho-Becgie-2.jpg', nameP: 'Chó Becgie', price: 479, quantity : 2},
    { productId: 5, category: '2', img: '2-bengal-1252-1247x1496.jpg', nameP: 'Mèo Bengal', price: 641, quantity : 2},
    { productId: 6, category: '2', img: '2-nhan-su-ma-1257-1-1247x1496.jpg', nameP: 'Mèo nhân sư', price: 990, quantity : 2},
    { productId: 7, category: '2', img: 'aln-xam-trang-chan-lun-tai-cup-1247x1496.jpg', nameP: 'Mèo xám trắng chân lùn tai cụt', price: 699, quantity : 2}
];

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
}

function loadCart(){
    var s = ``;
    for(var i = 0; i<cart.length; i++){
        s += `<tr>
                <th>${cart[i].productId}</th>
                <th>${cart[i].nameP}</th>
                <th><img src="./img/${cart[i].img}" alt="a"></th>
                <th>${cart[i].quantity}</th>
                <th></th>
            </tr>`
    }
    var a = `<table>
                <thead>
                    <th>ID sản phẩm</th>
                    <th>Tên</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Chọn</th>
                </thead>
                <tbody>
                    ${s}
                </tbody>
            </table>
            `
    document.getElementById('cart-table').innerHTML = a;
}
