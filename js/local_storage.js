let product =JSON.parse(localStorage.getItem('product')) ?? [];
if(product.length==0){
  let ProductArray = [
    { productId: 1, category: 'chó', img: 'anh-cho-Akita-5.jpg', nameP: 'Chó Akita', price: 452},
    { productId: 2, category: 'chó', img: 'anh-cho-alaska-182921.jpg', nameP: 'Chó alaska', price: 682 },
    { productId: 3, category: 'chó', img: 'anh-cho-bac-ha-8.jpg', nameP: 'Chó Bắc Hà', price: 782},
    { productId: 4, category: 'chó', img: 'anh-cho-Becgie-2.jpg', nameP: 'Chó Becgie', price: 479},
    { productId: 5, category: 'mèo', img: '2-bengal-1252-1247x1496.jpg', nameP: 'Mèo Bengal', price: 641},
    { productId: 6, category: 'mèo', img: '2-nhan-su-ma-1257-1-1247x1496.jpg', nameP: 'Mèo nhân sư', price: 990},
    { productId: 7, category: 'mèo', img: 'aln-xam-trang-chan-lun-tai-cup-1247x1496.jpg', nameP: 'Mèo xám trắng chân lùn', price: 699},
    { productId: 8, category: 'mèo', img: 'anh-meo-anh-long-ngan-822929228899-1247x956.jpg', nameP: 'Mèo Anh lông ngắn', price: 711},
    { productId: 9, category: 'mèo', img: 'anh-meo-ba-tu-29292988977.jpg', nameP: 'Mèo Ba Tư', price: 624},
    { productId: 10, category: 'mèo', img: 'anh-meo-bengal-940404000944-1247x1496.jpg', nameP: 'Mèo bengal', price: 545},
    { productId: 11, category: 'chó', img: 'anh-cho-Boder-Collie.jpg', nameP: 'Chó Boder Clollie', price:656},
    { productId: 12, category: 'chó', img: 'anh-cho-bully.jpg', nameP: 'Chó Bully', price: 731},
    { productId: 13, category: 'chó', img: 'anh-cho-Dom-7.jpg', nameP: 'Chó Dom', price: 821},
    { productId: 14, category: 'chó', img: 'anh-cho-Phu-Quoc.jpg', nameP: 'Chó Phú Quốc', price: 510},
    { productId: 15, category: 'mèo', img: 'anh-meo-himalaya-888838-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 530},
    { productId: 16, category: 'mèo', img: 'anh-meo-mi-long-ngan-9929929292.jpg', nameP: 'Mèo mi lông ngắn', price: 610},
    { productId: 17, category: 'mèo', img: 'anh-meo-Munchkin-94949-1247x956.jpg', nameP: 'Mèo Munchkin', price: 620},
    { productId: 18, category: 'mèo', img: 'anh-meo-Muop-3.jpg', nameP: 'Mèo Mướp', price: 661},
    { productId: 19, category: 'mèo', img: 'anh-meo-ragdoll-9393939a-1247x1496.jpg', nameP: 'Mèo Ragdoll', price: 499},
    { productId: 20, category: 'mèo', img: 'anh-meo-tai-xoan-929299a88824.jpg', nameP: 'Mèo tai xoắn', price: 475},
    { productId: 21, category: 'chó', img: 'anh-cho-Pitbull-3.jpg', nameP: 'Chó Pitbull', price: 644},
    { productId: 22, category: 'chó', img: 'anh-cho-pug-mat-xe.jpg', nameP: 'Chó Pug mặt xệ', price: 788},
    { productId: 23, category: 'chó', img: 'anh-cho-Rottweiler-4-1.jpg', nameP: 'Chó Rottweiler', price: 669},
    { productId: 24, category: 'chó', img: 'anh-cho-Samoyed.jpg', nameP: 'Chó Samoyed', price: 622},
    { productId: 25, category: 'mèo', img: 'anhlongdaitruongthanh1533-1247x1496.jpg', nameP: 'Mèo lông dài', price: 533},
    { productId: 26, category: 'mèo', img: 'anh-meo-mi-long-ngan-992992929288999-1080x1496.jpg', nameP: 'Mèo mi lông ngắn', price: 478},
    { productId: 27, category: 'mèo', img: 'anh-meo-Muop-5.jpg', nameP: 'Mèo Mướp', price: 612},
    { productId: 28, category: 'mèo', img: 'anh-meo-ragdoll-2002020090900-1242x1496.jpg', nameP: 'Mèo Rangdoll', price: 810},
    { productId: 29, category: 'mèo', img: 'anhlongngantabby1522a-1247x1496.jpg', nameP: 'Mèo lông ngắn Tabby', price: 478},
    { productId: 30, category: 'mèo', img: 'meo-himalaya-90030303-1216x1496.jpg', nameP: 'Mèo Himalaya', price: 617},
    { productId: 31, category: 'chó', img: 'anh-cho-Shiba-5.jpg', nameP: 'Chó Shiba', price: 638},
    { productId: 32, category: 'chó', img: 'cho-beagle.jpg', nameP: 'Chó Beagle', price: 952},
    { productId: 33, category: 'chó', img: 'cho-chihuahua.jpg', nameP: 'Chó chihuahua', price: 645},
    { productId: 34, category: 'chó', img: 'cho-chow-chow.jpg', nameP: 'Chó Chow CHow', price: 799},
    { productId: 35, category: 'mèo', img: 'meo-maincoon-9299992992920000099-1247x1496.jpg', nameP: 'Mèo Maincoon', price: 461},
    { productId: 36, category: 'mèo', img: 'meo-himalaya-9200202020890-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 681},
    { productId: 37, category: 'mèo', img: 'anh-meo-ba-tu-29292988977.jpg', nameP: 'Mèo Ba Tư', price: 641},
    { productId: 38, category: 'mèo', img: 'anh-meo-mi-long-ngan-992992929288999-1080x1496.jpg', nameP: 'Mèo mi lông ngắn', price: 514},
    { productId: 39, category: 'mèo', img: 'anh-meo-himalaya-888838-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 481},
    { productId: 40, category: 'mèo', img: 'anh-meo-Munchkin-94949-1247x956.jpg', nameP: 'Mèo Munchkin', price: 884},
    { productId: 41, category: 'chó', img: 'cho-corgi-chanlun.jpg', nameP: 'Chó Corgi chân lùn', price: 611},
    { productId: 42, category: 'chó', img: 'cho-doberman-1-1.jpg', nameP: 'Chó doberman', price: 573},
    { productId: 43, category: 'chó', img: 'cho-golden.jpg', nameP: 'Chó goldem', price: 546},
    { productId: 44, category: 'chó', img: 'cho-husky.jpg', nameP: 'Chó husky', price: 712},
    { productId: 45, category: 'mèo', img: 'anh-meo-ragdoll-9393939a-1247x1496.jpg', nameP: 'Mèo Rangdoll', price: 461},
    { productId: 46, category: 'mèo', img: 'anh-meo-Muop-5.jpg', nameP: 'Mèo Mướp', price: 593},
    { productId: 47, category: 'mèo', img: 'anh-meo-tai-xoan-929299a88824.jpg', nameP: 'Mèo tai xoắn', price: 541},
    { productId: 48, category: 'mèo', img: 'anhlongngantabby1522a-1247x1496.jpg', nameP: 'Mèo lông ngắn Tabby', price: 477},
    { productId: 49, category: 'chó', img: 'cho-labrador.jpg', nameP: 'Chó labrador', price: 818},
    { productId: 50, category: 'chó', img: 'cho-lapxuong.jpg', nameP: 'Chó lạp xưởng', price: 433},
    { productId: 51, category: 'Đồ chơi', img: 'Bộ đồ chơi cho mèo 170k.PNG', nameP: 'Bộ đồ chơi cho mèo', price: 6},
    { productId: 52, category: 'Đồ chơi', img: 'Bóng Cao Su Đồ Chơi Cho Chó Mèo Hình Mặt Cún Đáng Yêu 45k.PNG', nameP: 'Bóng Cao Su Đồ Chơi Cho Chó ', price: 2},
    { productId: 53, category: 'Đồ chơi', img: 'Đồ chơi cần câu cán nhựa cho mèo 25k.PNG', nameP: 'Đồ chơi cần câu cán nhựa', price: 1},
    { productId: 54, category: 'Đồ chơi', img: 'Đồ chơi cho chó cắn gặm hình đùi gà phát âm thanh 30k.PNG', nameP: 'Đùi gà phát âm thanh ', price: 1.5},
    { productId: 55, category: 'Đồ chơi', img: 'Đồ chơi cho chó đùi gà vải Cutepets.PNG', nameP: 'Đồ chơi cho chó đùi gà vải', price: 2},
    { productId: 56, category: 'Đồ chơi', img: 'Đồ Chơi Tháp Banh 4 Tầng Cho Mèo 109k.PNG', nameP: 'Đồ Chơi Tháp Banh 4 Tầng Cho Mèo', price: 5},
    { productId: 57, category: 'Đồ chơi', img: 'Đồ Chơi Trụ Cào Móng Có Bóng Treo Cho Mèo 59k.PNG', nameP: 'Trụ Cào Móng Có Bóng Treo', price: 3},
    { productId: 58, category: 'Đồ chơi', img: 'ĐÙI GÀ ĐỒ CHƠI NHAI GẶM CHO THÚ CƯNG.PNG', nameP: 'Đùi gà gặm cho thú cưng', price: 2},
    { productId: 59, category: 'Đồ Ăn', img: 'NEKKO JELLY (70g) Pate Cho Mèo Trưởng Thành Vị Cá Ngừ Nhiều Topping 12k.PNG', nameP: 'NEKKO JELLY (70g) ', price: 1},
    { productId: 60, category: 'Đồ Ăn', img: 'Pate Cho Chó Pedigree Vị Gà, Gan và Rau Củ 18k.PNG', nameP: 'Pate Cho Chó Pedigree', price: 1},
    { productId: 61, category: 'Đồ Ăn', img: 'Pate cho chó Royal Canin Medium Puppy 140g 410k.PNG', nameP: 'Royal Canin Medium Puppy 140g', price: 21},
    { productId: 62, category: 'Đồ Ăn', img: 'Pate chó Mckelly 400g 55k.PNG', nameP: 'Pate chó Mckelly 400g', price: 2},
    { productId: 63, category: 'Đồ Ăn', img: 'Pate cho mèo Catchy cá ngừ và cá hồi trong thạch 15k.PNG', nameP: 'Pate cho mèo Catchy', price: 1},
    { productId: 64, category: 'Đồ Ăn', img: 'Pate cho mèo Ciao 60g 10k.PNG', nameP: 'Pate cho mèo Ciao 60g', price: 1},
    { productId: 65, category: 'Đồ Ăn', img: 'Pate Cho Mèo Con Whiskas Vị Cá Ngừ 12k.PNG', nameP: 'Pate Cho Mèo Con Whiskas Vị Cá Ngừ', price: 1},
    { productId: 66, category: 'Đồ Ăn', img: 'Pate Cho Mèo Lớn Whiskas 1+ 10k.PNG', nameP: 'Pate Cho Mèo Lớn Whiskas 1+', price: 1},
    { productId: 67, category: 'Đồ Ăn', img: 'Pate cho mèo thức ăn mèo dạng mềm thức ăn thưởng cho mèo mọi lứa tuổi-170g  30k.PNG', nameP: 'Pate cho mèo thức ăn mèo dạng mềm', price: 3},
    { productId: 68, category: 'Đồ Ăn', img: 'Pedigree - Patê cho chó con 400g 48k.PNG', nameP: 'Pedigree - Patê cho chó con 400g', price: 3},
    { productId: 69, category: 'Đồ Ăn', img: 'Royal canin kitten - Thức ăn cho mèo từ 4-12 tháng tuổi 400gr 120k.PNG', nameP: 'Royal canin kitten 400gr', price: 5},
    { productId: 70, category: 'Đồ Ăn', img: 'Thức Ăn Cho Chó Classic Vị Thịt Bò & Sữa Hạt Khô 400g  69k.PNG', nameP: 'Thức Ăn Cho Chó Classic 400g', price: 3},
    { productId: 71, category: 'Đồ Ăn', img: 'Thức Ăn Cho Mèo Me-O Tuna Adult 1.2kg 125k.PNG', nameP: 'Me-O Tuna Adult 1.2kg', price: 4},
    { productId: 72, category: 'Đồ Ăn', img: 'Thức ăn hạt cho mèo mọi lứa tuổi CATSRANG - 2kg 270k.PNG', nameP: 'Thức ăn hạt CATSRANG - 2kg', price: 9},
    { productId: 73, category: 'Đồ Ăn', img: 'Thức ăn hạt mềm cho chó già Zenith 1.2kg - Hàn Quốc 77k.PNG', nameP: 'Thức ăn hạt mềm cho chó già Zenith', price: 3},
    { productId: 74, category: 'Đồ Ăn', img: 'Thức ăn hạt mềm cho chó giống nhỏ Zenith 300g - Hàn Quốc 66k.PNG', nameP: 'Thức ăn hạt mềm cho chó nhỏ Zenith 300g', price: 3},
    { productId: 75, category: 'Đồ Ăn', img: 'THỨC ĂN HẠT WHISKAS CHO MÈO 130k.PNG', nameP: 'Thức ăn hạt Whiskas cho mèo', price: 4},
  ];
  product = ProductArray;
  localStorage.setItem('product', JSON.stringify(ProductArray));
}

let htmlProduct = [...product];

  var BannerArray = [
    { BannerId: 1, img: 'bannerpetshop.png', nameP: 'Banner 1'},
    { BannerId: 2, img: 'bannerpet1.png', nameP: 'Banner 2'},
    { BannerId: 3, img: 'bannerpet3.jpg', nameP: 'Banner 3'}
  ];
  localStorage.setItem('banner', JSON.stringify(BannerArray));

  

let account =JSON.parse(localStorage.getItem('account')) ?? [];
if(account.length==0){
var adminAcc = {
  username: "admin123",
  password: "admin123", 
  email: "nhom16@gmail.com",
  phonenumber: "0123456789"
}
account = adminAcc
localStorage.setItem('account', JSON.stringify(adminAcc))
}
// let htmladminAcc = [...account];


let order =JSON.parse(localStorage.getItem('order-list')) ?? [];
if(order.length==0){
var orderArr = [

    {id: 101 , user:'A00001', date: '17-12-2004', status: "Chưa xử lý"   },
    {id: 102 , user:'A00002', date: '18-12-2004', status: "Chưa xử lý"   },
    {id: 103 , user:'A00003', date: '19-12-2004', status: "Chưa xử lý"   },
    {id: 104 , user:'A00001', date: '20-12-2004', status: "Chưa xử lý"   },
    {id: 105 , user:'A00001', date: '21-12-2004', status: "Chưa xử lý"   },
    {id: 106 , user:'A00001', date: '22-12-2004', status: "Chưa xử lý"   },
    {id: 107 , user:'A00001', date: '23-12-2004', status: "Chưa xử lý"   },
    {id: 108, user:'A00001', date: '24-12-2004', status: "Chưa xử lý"},
    {id: 109, user:'A00001', date: '25-12-2004', status: "Chưa xử lý"},
    {id: 110, user:'A00001', date: '26-12-2004', status: "Chưa xử lý"},
];
localStorage.setItem('order-list', JSON.stringify(orderArr))
}

let detail =JSON.parse(localStorage.getItem('order-detail')) ?? [];
if(detail.length==0){
var detailArr = [
    {id:101, numof_product: 2, product_id: '1', quantity: 1, unit_price: 452   },
    {id:101, numof_product: 2, product_id: '2', quantity: 1, unit_price: 682   },
    {id:103, numof_product: 3, product_id: '3', quantity: 1, unit_price: 782   },
    {id:103, numof_product: 3, product_id: '4', quantity: 1, unit_price: 479  },
    {id:103, numof_product: 3, product_id: '5', quantity: 1, unit_price: 641  },
    {id:104, numof_product: 2, product_id: '6', quantity: 1, unit_price: 990  },
    {id:104, numof_product: 2, product_id: '7', quantity: 1, unit_price: 699   },
    {id:105, numof_product: 1, product_id: '8', quantity: 1, unit_price: 711  },
    {id:106, numof_product: 1, product_id: '9', quantity: 1, unit_price: 624   },
    {id:107, numof_product: 1, product_id: '10', quantity: 1, unit_price: 545  },
    {id:108, numof_product: 3, product_id: '5', quantity: 1, unit_price: 641  },
    {id:108, numof_product: 3, product_id: '9', quantity: 1, unit_price: 624},
    {id:108, numof_product: 3, product_id: '8', quantity: 1, unit_price: 711  },
    {id:109, numof_product: 2, product_id: '3', quantity: 1, unit_price: 782   },
    {id:109, numof_product: 2, product_id: '4', quantity: 1, unit_price: 479  },
    {id:110, numof_product: 1, product_id: '11', quantity: 1, unit_price: 656   },

];
localStorage.setItem('order-detail', JSON.stringify(detailArr));
}
let userArrlocal =JSON.parse(localStorage.getItem('user-list')) ?? [];
if(userArrlocal.length==0){
var userArr = [
    {id: "A00001", fullname: "Customer1", username: "C00001", password: "CA00001", email: "C1@gmail.com", phonenumber:"0111111110" },
    {id: "A00002", fullname: "Customer2", username: "C00002", password: "CA00002", email: "C2@gmail.com", phonenumber:"0222222220" },
    {id: "A00003", fullname: "Customer3", username: "C00003", password: "CA00003", email: "C3@gmail.com", phonenumber:"0333333330" },
    {id: "A00004", fullname: "Customer4", username: "C00004", password: "CA00004", email: "C4@gmail.com", phonenumber:"0444444440" },
    {id: "A00005", fullname: "Customer5", username: "C00005", password: "CA00005", email: "C5@gmail.com", phonenumber:"0555555550" },
    {id: "A00006", fullname: "Customer6", username: "C00006", password: "CA00006", email: "C6@gmail.com", phonenumber:"0666666660" },
    {id: "A00007", fullname: "Customer7", username: "C00007", password: "CA00007", email: "C7@gmail.com", phonenumber:"0777777770" },
    {id: "A00008", fullname: "Customer8", username: "C00008", password: "CA00008", email: "C8@gmail.com", phonenumber:"0888888880" },
    {id: "A00009", fullname: "Customer9", username: "C00009", password: "CA00009", email: "C9@gmail.com", phonenumber:"0999999990" },
    {id: "A00010", fullname: "Customer10", username: "C00010", password: "CA00010", email: "C10@gmail.com", phonenumber:"0101010100" },
];
localStorage.setItem('user-list', JSON.stringify(userArr));}
