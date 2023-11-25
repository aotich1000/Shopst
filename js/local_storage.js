var ProductArray = [
    { productId: 1, category: '1', img: 'logo.jpg', nameP: 'Product 1', price: 100 },
    { productId: 2, category: '1', img: 'logo.jpg', nameP: 'Product 2', price: 200 },
    { productId: 3, category: '1', img: 'logo.jpg', nameP: 'Product 3', price: 300 },
    { productId: 4, category: '1', img: 'logo.jpg', nameP: 'Product 4', price: 100000000 },
    { productId: 5, category: '2', img: 'logo.jpg', nameP: 'Product 5', price: 100000000 },
    { productId: 6, category: '2', img: 'logo.jpg', nameP: 'Product 6', price: 100000000 },
    { productId: 7, category: '2', img: 'logo.jpg', nameP: 'Product 7', price: 100000000 },
    { productId: 8, category: '2', img: 'logo.jpg', nameP: 'Product 8', price: 100000000 },
    { productId: 9, category: '2', img: 'logo.jpg', nameP: 'Product 9', price: 100000000 },
    { productId: 10, category: '2', img: 'logo.jpg', nameP: 'Product 10', price: 100000000 },
    { productId: 11, category: '1', img: 'logo.jpg', nameP: 'Product 1', price: 100000000 },
    { productId: 12, category: '1', img: 'logo.jpg', nameP: 'Product 2', price: 100000000 },
    { productId: 13, category: '1', img: 'logo.jpg', nameP: 'Product 3', price: 100000000 },
    { productId: 14, category: '1', img: 'logo.jpg', nameP: 'Product 4', price: 100000000 },
    { productId: 15, category: '2', img: 'logo.jpg', nameP: 'Product 5', price: 100000000 },
    { productId: 16, category: '2', img: 'logo.jpg', nameP: 'Product 6', price: 100000000 },
    { productId: 17, category: '2', img: 'logo.jpg', nameP: 'Product 7', price: 100000000 },
    { productId: 18, category: '2', img: 'logo.jpg', nameP: 'Product 8', price: 100000000 },
    { productId: 19, category: '2', img: 'logo.jpg', nameP: 'Product 9', price: 100000000 },
    { productId: 20, category: '2', img: 'logo.jpg', nameP: 'Product 10', price: 100000000 },
    { productId: 21, category: '1', img: 'logo.jpg', nameP: 'Product 1', price: 100000000 },
    { productId: 22, category: '1', img: 'logo.jpg', nameP: 'Product 2', price: 100000000 },
    { productId: 23, category: '1', img: 'logo.jpg', nameP: 'Product 3', price: 100000000 },
    { productId: 24, category: '1', img: 'logo.jpg', nameP: 'Product 4', price: 100000000 },
    { productId: 25, category: '2', img: 'logo.jpg', nameP: 'Product 5', price: 100000000 },
    { productId: 26, category: '2', img: 'logo.jpg', nameP: 'Product 6', price: 100000000 },
    { productId: 27, category: '2', img: 'logo.jpg', nameP: 'Product 7', price: 100000000 },
    { productId: 28, category: '2', img: 'logo.jpg', nameP: 'Product 8', price: 100000000 },
    { productId: 29, category: '2', img: 'logo.jpg', nameP: 'Product 9', price: 100000000 },
    { productId: 30, category: '2', img: 'logo.jpg', nameP: 'Product 10', price: 100000000 },
    { productId: 31, category: '1', img: 'logo.jpg', nameP: 'Product 1', price: 100000000 },
    { productId: 32, category: '1', img: 'logo.jpg', nameP: 'Product 2', price: 100000000 },
    { productId: 33, category: '1', img: 'logo.jpg', nameP: 'Product 3', price: 100000000 },
    { productId: 34, category: '1', img: 'logo.jpg', nameP: 'Product 4', price: 100000000 },
    { productId: 35, category: '2', img: 'logo.jpg', nameP: 'Product 5', price: 100000000 },
    { productId: 36, category: '2', img: 'logo.jpg', nameP: 'Product 6', price: 100000000 },
    { productId: 37, category: '2', img: 'logo.jpg', nameP: 'Product 7', price: 100000000 },
    { productId: 38, category: '2', img: 'logo.jpg', nameP: 'Product 8', price: 100000000 },
    { productId: 39, category: '2', img: 'logo.jpg', nameP: 'Product 9', price: 100000000 },
    { productId: 40, category: '2', img: 'logo.jpg', nameP: 'Product 10', price: 100000000 },
    { productId: 41, category: '1', img: 'logo.jpg', nameP: 'Product 1', price: 100000000 },
    { productId: 42, category: '1', img: 'logo.jpg', nameP: 'Product 2', price: 100000000 },
    { productId: 43, category: '1', img: 'logo.jpg', nameP: 'Product 3', price: 100000000 },
    { productId: 44, category: '1', img: 'logo.jpg', nameP: 'Product 4', price: 100000000 },
    { productId: 45, category: '2', img: 'logo.jpg', nameP: 'Product 5', price: 100000000 },
    { productId: 46, category: '2', img: 'logo.jpg', nameP: 'Product 6', price: 100000000 },
    { productId: 47, category: '2', img: 'logo.jpg', nameP: 'Product 7', price: 100000000 },
    { productId: 48, category: '2', img: 'logo.jpg', nameP: 'Product 8', price: 100000000 },
    { productId: 49, category: '2', img: 'logo.jpg', nameP: 'Product 9', price: 100000000 },
    { productId: 50, category: '2', img: 'logo.jpg', nameP: 'Product 10', price: 100000000 },
  ];
  localStorage.setItem('product', JSON.stringify(ProductArray));


  var BannerArray = [
    { BannerId: 1, img: 'Banner_1.jpg', nameP: 'Banner 1'},
    { BannerId: 2, img: 'Banner_2.jpg', nameP: 'Banner 2'},
    { BannerId: 3, img: 'Banner_3.jpg', nameP: 'Banner 3'}
  ];
  localStorage.setItem('banner', JSON.stringify(BannerArray));


  var adminAcc = {
    username: "laptrinhweb123",
    password: "admin123", 
    email: "nhom16@gmail.com",
    phonenumber: "0123456789"
}
localStorage.setItem('account', JSON.stringify(adminAcc))

var orderArr = [
    {id: 101 , user:'A1', date: '17-12-2004', status: "Chưa xử lý"   },
    {id: 102 , user:'A2', date: '18-12-2004', status: "Chưa xử lý"   },
    {id: 103 , user:'A3', date: '19-12-2004', status: "Chưa xử lý"   },
    {id: 104 , user:'A4', date: '20-12-2004', status: "Chưa xử lý"   },
    {id: 105 , user:'A5', date: '21-12-2004', status: "Chưa xử lý"   },
    {id: 106 , user:'A6', date: '22-12-2004', status: "Chưa xử lý"   },
    {id: 107 , user:'A7', date: '23-12-2004', status: "Chưa xử lý"   },
    {id: 108, user:'A8', date: '24-12-2004', status: "Chưa xử lý"},
    {id: 109, user:'A9', date: '25-12-2004', status: "Chưa xử lý"},
    {id: 110, user:'A19', date: '26-12-2004', status: "Chưa xử lý"}
];
localStorage.setItem('order-list', JSON.stringify(orderArr))

var detailArr = [
    {id:101, numof_product: 2, product_id: '001', quantity: 10, unit_price: "10000", img: "img/1.jpg"  },
    {id:101, numof_product: 2, product_id: '002', quantity: 10, unit_price: "10000", img: "img/1.jpg" },
    {id:103, numof_product: 3, product_id: '003', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:103, numof_product: 3, product_id: '004', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:103, numof_product: 3, product_id: '005', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:104, numof_product: 2, product_id: '006', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:104, numof_product: 2, product_id: '007', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:105, numof_product: 1, product_id: '008', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:106, numof_product: 1, product_id: '009', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:107, numof_product: 1, product_id: '010', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:108, numof_product: 3, product_id: '005', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:108, numof_product: 3, product_id: '009', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:108, numof_product: 3, product_id: '008', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:109, numof_product: 2, product_id: '003', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:109, numof_product: 2, product_id: '004', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:110, numof_product: 1, product_id: '011', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },

];
localStorage.setItem('order-detail', JSON.stringify(detailArr))


var userArr = [
    {id: "A01", fullname: "Customer1", username: "1", password: "1", email: "C1@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A02", fullname: "Customer2", username: "C2", password: "CA2", email: "C2@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A03", fullname: "Customer3", username: "C3", password: "CA3", email: "C3@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A04", fullname: "Customer4", username: "C4", password: "CA4", email: "C4@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A05", fullname: "Customer5", username: "C5", password: "CA5", email: "C5@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A06", fullname: "Customer6", username: "C6", password: "CA6", email: "C6@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A07", fullname: "Customer7", username: "C7", password: "CA7", email: "C7@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A08", fullname: "Customer8", username: "C8", password: "CA8", email: "C8@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A09", fullname: "Customer9", username: "C9", password: "CA9", email: "C9@gmail.com", phonenumber:"0xxxxxxxx0" },
    {id: "A10", fullname: "Customer10", username: "C10", password: "CA10", email: "C10@gmail.com", phonenumber:"0xxxxxxxx0" },

];
localStorage.setItem('user-list', JSON.stringify(userArr));
