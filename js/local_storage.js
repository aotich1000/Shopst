var ProductArray = [
    { productId: 1, category: '1', img: 'anh-cho-Akita-5.jpg', nameP: 'Chó Akita', price: 452},
    { productId: 2, category: '1', img: 'anh-cho-alaska-182921.jpg', nameP: 'Chó alaska', price: 682 },
    { productId: 3, category: '1', img: 'anh-cho-bac-ha-8.jpg', nameP: 'Chó Bắc Hà', price: 782},
    { productId: 4, category: '1', img: 'anh-cho-Becgie-2.jpg', nameP: 'Chó Becgie', price: 479},
    { productId: 5, category: '2', img: '2-bengal-1252-1247x1496.jpg', nameP: 'Mèo Bengal', price: 641},
    { productId: 6, category: '2', img: '2-nhan-su-ma-1257-1-1247x1496.jpg', nameP: 'Mèo nhân sư', price: 990},
    { productId: 7, category: '2', img: 'aln-xam-trang-chan-lun-tai-cup-1247x1496.jpg', nameP: 'Mèo xám trắng chân lùn tai cụt', price: 699},
    { productId: 8, category: '2', img: 'anh-meo-anh-long-ngan-822929228899-1247x956.jpg', nameP: 'Mèo Anh lông ngắn', price: 711},
    { productId: 9, category: '2', img: 'anh-meo-ba-tu-29292988977.jpg', nameP: 'Mèo Ba Tư', price: 624},
    { productId: 10, category: '2', img: 'anh-meo-bengal-940404000944-1247x1496.jpg', nameP: 'Mèo bengal', price: 545},
    { productId: 11, category: '1', img: 'anh-cho-Boder-Collie.jpg', nameP: 'Chó Boder Clollie', price:656},
    { productId: 12, category: '1', img: 'anh-cho-bully.jpg', nameP: 'Chó Bully', price: 731},
    { productId: 13, category: '1', img: 'anh-cho-Dom-7.jpg', nameP: 'Chó Dom', price: 821},
    { productId: 14, category: '1', img: 'anh-cho-Phu-Quoc.jpg', nameP: 'Chó Phú Quốc', price: 510},
    { productId: 15, category: '2', img: 'anh-meo-himalaya-888838-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 530},
    { productId: 16, category: '2', img: 'anh-meo-mi-long-ngan-9929929292.jpg', nameP: 'Mèo mi lông ngắn', price: 610},
    { productId: 17, category: '2', img: 'anh-meo-Munchkin-94949-1247x956.jpg', nameP: 'Mèo Munchkin', price: 620},
    { productId: 18, category: '2', img: 'anh-meo-Muop-3.jpg', nameP: 'Mèo Mướp', price: 661},
    { productId: 19, category: '2', img: 'anh-meo-ragdoll-9393939a-1247x1496.jpg', nameP: 'Mèo Ragdoll', price: 499},
    { productId: 20, category: '2', img: 'anh-meo-tai-xoan-929299a88824.jpg', nameP: 'Mèo tai xoắn', price: 475},
    { productId: 21, category: '1', img: 'anh-cho-Pitbull-3.jpg', nameP: 'Chó Pitbull', price: 644},
    { productId: 22, category: '1', img: 'anh-cho-pug-mat-xe.jpg', nameP: 'Chó Pug mặt xệ', price: 788},
    { productId: 23, category: '1', img: 'anh-cho-Rottweiler-4-1.jpg', nameP: 'Chó Rottweiler', price: 669},
    { productId: 24, category: '1', img: 'anh-cho-Samoyed.jpg', nameP: 'Chó Samoyed', price: 622},
    { productId: 25, category: '2', img: 'anhlongdaitruongthanh1533-1247x1496.jpg', nameP: 'Mèo lông dài', price: 533},
    { productId: 26, category: '2', img: 'anh-meo-mi-long-ngan-992992929288999-1080x1496.jpg', nameP: 'Mèo mi lông ngắn', price: 478},
    { productId: 27, category: '2', img: 'anh-meo-Muop-5.jpg', nameP: 'Mèo Mướp', price: 612},
    { productId: 28, category: '2', img: 'anh-meo-ragdoll-2002020090900-1242x1496.jpg', nameP: 'Mèo Rangdoll', price: 810},
    { productId: 29, category: '2', img: 'anhlongngantabby1522a-1247x1496.jpg', nameP: 'Mèo lông ngắn Tabby', price: 478},
    { productId: 30, category: '2', img: 'meo-himalaya-90030303-1216x1496.jpg', nameP: 'Mèo Himalaya', price: 617},
    { productId: 31, category: '1', img: 'anh-cho-Shiba-5.jpg', nameP: 'Chó Shiba', price: 638},
    { productId: 32, category: '1', img: 'cho-beagle.jpg', nameP: 'Chó Beagle', price: 952},
    { productId: 33, category: '1', img: 'cho-chihuahua.jpg', nameP: 'Chó chihuahua', price: 645},
    { productId: 34, category: '1', img: 'cho-chow-chow.jpg', nameP: 'Chó Chow CHow', price: 799},
    { productId: 35, category: '2', img: 'meo-maincoon-9299992992920000099-1247x1496.jpg', nameP: 'Mèo Maincoon', price: 461},
    { productId: 36, category: '2', img: 'meo-himalaya-9200202020890-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 681},
    { productId: 37, category: '2', img: 'anh-meo-ba-tu-29292988977.jpg', nameP: 'Mèo Ba Tư', price: 641},
    { productId: 38, category: '2', img: 'anh-meo-mi-long-ngan-992992929288999-1080x1496.jpg', nameP: 'Mèo mi lông ngắn', price: 514},
    { productId: 39, category: '2', img: 'anh-meo-himalaya-888838-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 481},
    { productId: 40, category: '2', img: 'anh-meo-Munchkin-94949-1247x956.jpg', nameP: 'Mèo Munchkin', price: 884},
    { productId: 41, category: '1', img: 'cho-corgi-chanlun.jpg', nameP: 'Chó Corgi chân lùn', price: 611},
    { productId: 42, category: '1', img: 'cho-doberman-1-1.jpg', nameP: 'Chó doberman', price: 573},
    { productId: 43, category: '1', img: 'cho-golden.jpg', nameP: 'Chó goldem', price: 546},
    { productId: 44, category: '1', img: 'cho-husky.jpg', nameP: 'Chó husky', price: 712},
    { productId: 45, category: '2', img: 'anh-meo-ragdoll-9393939a-1247x1496.jpg', nameP: 'Mèo Rangdoll', price: 461},
    { productId: 46, category: '2', img: 'anh-meo-Muop-5.jpg', nameP: 'Mèo Mướp', price: 593},
    { productId: 47, category: '2', img: 'anh-meo-tai-xoan-929299a88824.jpg', nameP: 'Mèo tai xoắn', price: 541},
    { productId: 48, category: '2', img: 'anhlongngantabby1522a-1247x1496.jpg', nameP: 'Mèo lông ngắn Tabby', price: 477},
    { productId: 49, category: '1', img: 'cho-labrador.jpg', nameP: 'Chó labrador', price: 818},
    { productId: 50, category: '1', img: 'cho-lapxuong.jpg', nameP: 'Chó lạp xưởng', price: 433},
  ];
  localStorage.setItem('product', JSON.stringify(ProductArray));


  var BannerArray = [
    { BannerId: 1, img: 'Banner_1.jpg', nameP: 'Banner 1'},
    { BannerId: 2, img: 'Banner_2.jpg', nameP: 'Banner 2'},
    { BannerId: 3, img: 'Banner_3.jpg', nameP: 'Banner 3'}
  ];
  localStorage.setItem('banner', JSON.stringify(BannerArray));


  var adminAcc = {
    username: "admin123",
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
    {id:101, numof_product: 2, product_id: '001', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
    {id:101, numof_product: 2, product_id: '002', quantity: 10, unit_price: "10000", img: "img/1.jpg"   },
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
