var productArrays = [
    {id: 1, img:'img/1.jpg', name:'Ảnh 1',  cost:'200$'},
    {id: 2, img:'img/1.jpg', name:'anh2',  cost: '200$'},
    {id: 3, img:'img/1.jpg', name:'anh3',  cost: '200$'},
    {id: 4, img:'img/1.jpg', name:'anh4',  cost:'200$'},
    {id: 5, img:'img/1.jpg', name:'anh5',  cost:'200$'},
    {id: 6, img:'img/1.jpg', name:'anh6',  cost:'200$'},
    {id: 7, img:'img/1.jpg', name:'Ảnh 1',  cost:'200$'},
    {id: 8, img:'img/1.jpg', name:'anh2',  cost: '200$'},
    {id: 9, img:'img/1.jpg', name:'anh3',  cost: '200$'},
    {id: 10, img:'img/1.jpg', name:'anh4',  cost:'200$'},
    {id: 11, img:'img/1.jpg', name:'anh5',  cost:'200$'},
    {id: 12, img:'img/1.jpg', name:'anh6',  cost:'200$'},
    {id: 13, img:'img/1.jpg', name:'Ảnh 1',  cost:'200$'},
    {id: 14, img:'img/1.jpg', name:'anh2',  cost: '200$'},
    {id: 15, img:'img/1.jpg', name:'anh3',  cost: '200$'},
    {id: 16, img:'img/1.jpg', name:'anh4',  cost:'200$'},
    {id: 17, img:'img/1.jpg', name:'anh5',  cost:'200$'},
    {id: 18, img:'img/1.jpg', name:'anh6',  cost:'200$'},

];
localStorage.setItem('product', JSON.stringify(productArrays));    


function loadTable(index){
    var s=`<table id="itemTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Cost</th>   
                        <th>Thao tác</th>
                    </tr>
                </thead><tbody id="itemTableBody">`;
    for(var i=0; i<index.length;i++){
        s+=` 
        <tr>
            <th>${index[i].id}</th>
            <th><img src="${index[i].img}" alt="a"></th>
            <th>${index[i].name}</th>
            <th>${index[i].cost}</th>
            <th>
                <button id="${index[i].id}">Sửa</button>
                <button id="${index[i].id}"> Xóa</button> 
            </th>
        </tr>`;
    }
    s+= `</tbody></table>`;
    document.getElementById('productList').innerHTML = s;
}


function exitWebsite() {
    // Chuyển hướng người dùng đến một trang khác hoặc trang chính
    window.location.href = 'https://www.youtube.com/';
}

// --------------Thêm sản phẩm ------------







window.onload = function(){
    existingProducts = JSON.parse(localStorage.getItem('product')) || [];


    var addProductForm = document.getElementById('addProductForm');
    addProductForm.addEventListener('submit', function(event) {
        if (event.submitter && event.submitter.id === 'add-submit') {
            
            event.preventDefault(); // Ngăn chặn form tự động gửi dữ liệu và làm tải lại trang

            var productId = document.getElementById('productId').value;
            var productName = document.getElementById('productName').value;
            var productImg = document.getElementById('productImg').files[0]; // Lấy file hình ảnh
            var productCost = document.getElementById('productCost').value;

            // Kiểm tra xem có hình ảnh được chọn không
            if (productImg) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    var newProduct = {
                        id: productId,
                        name: productName,
                        img: e.target.result, // Đường dẫn hình ảnh
                        cost: productCost + "$",
                    };
                    existingProducts.push(newProduct);
                    localStorage.setItem('product', JSON.stringify(existingProducts));
                    renderPageNumber(); 

                    clearValueProduct();
                    alert('Sản phẩm đã được thêm thành công!');
                };
                reader.readAsDataURL(productImg); // Đọc hình ảnh dưới dạng URL data
            } else {
                alert('Vui lòng chọn hình ảnh sản phẩm!');
            }
        }
       
    });

    


    
// -------------------Xóa sản phẩm--------------------

    // Update the deleteProduct function
    function deleteProduct(productId) {
        var confirmation = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
    
        if (confirmation) {
            var index = existingProducts.findIndex(function (product) {
                return product.id == productId;
            });
    
            if (index !== -1) {
                existingProducts.splice(index, 1);
                localStorage.setItem('product', JSON.stringify(existingProducts));
                renderPageNumber();
                
                alert('Hãy nhấn vào Số trang bên dưới để load lại danh sách sản phẩm!');
            } else {
                alert('Không tìm thấy sản phẩm để xóa!');
            }
        } else {
            alert('Xóa sản phẩm đã bị hủy.');
        }
    }

    // Update the event listener for delete buttons
    document.getElementById('productList').addEventListener('click', function (event) {
        var target = event.target;

        if (target.tagName === 'BUTTON' && target.textContent.trim() === 'Xóa') {
            var productId = target.parentElement.parentElement.querySelector('th:first-child').textContent;
            deleteProduct(productId);
        }
    });





// ý tưởng : truyền vào tham số cho loadTable

    //------------- Phân trang -------------------

    var perPage = 6;
    var perexProduct = [];  

    function getExProduct() {
        try {
            perexProduct = existingProducts.slice(
                (currentPage - 1) * perPage,
                (currentPage - 1) * perPage + perPage
            );
            loadTable(perexProduct);
        } catch (e) {
            console.log(e);
        }
    }
    function handPageNumber(num) {
        existingProducts = JSON.parse(localStorage.getItem('product')) || [];
        currentPage = num;
        getExProduct();
    }

    function renderPageNumber() {
        existingProducts = JSON.parse(localStorage.getItem('product')) || [];
        totalPage = Math.ceil(existingProducts.length / perPage);
        let paginationContainer = document.querySelector('#pagination');
    
        paginationContainer.innerHTML = '';
    
        for (let i = 1; i <= totalPage; i++) {
            let li = document.createElement('li');
            li.textContent = i;
            if (i === 1) {
                li.classList.add('selected-page');
            }
    
            li.addEventListener('click', function () {
                document.querySelectorAll('#pagination li').forEach(function (el) {
                    el.classList.remove('selected-page');
                });
    
                li.classList.add('selected-page');
                handPageNumber(i);
            });
    
            paginationContainer.appendChild(li);
        }
    }
    renderPageNumber();
    currentPage = 1;
    getExProduct(); 

}

//--------------------- phân vùng content--------------------------------

document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.sidebar li');

    // Bắt sự kiện click cho mỗi mục menu
    menuItems.forEach(function(item, index) {
        item.addEventListener('click', function(event) {
            document.getElementById('add-submit').style.display = 'none';
            document.getElementById('addProduct').style.display = 'none';
            document.getElementById('add-update').style.display = 'block';
            document.getElementById('h2-cha').style.display = 'block';
            document.getElementById('h2-add').style.display = 'none';

            

            if (index === 1) {
                clearValueProduct();
                document.getElementById('addProduct').style.display = 'block'; 
                document.getElementById('h2-add').style.display = 'block';
                document.getElementById('h2-cha').style.display = 'none';
                document.getElementById('add-update').style.display = 'none';
                document.getElementById('add-submit').style.display = 'block';
            }
        });
    });
});
document.getElementById('add-submit').style.display = 'none';
document.getElementById('addProduct').style.display = 'none';
document.getElementById('add-update').style.display = 'block';
document.getElementById('h2-cha').style.display = 'block';
document.getElementById('h2-add').style.display = 'none';







let select = document.querySelectorAll('.menu li');

function reloadActive(){
    let lastActive = document.querySelector(".menu li.active");
    if (lastActive) {
        lastActive.classList.remove("active");
    }
    console.log(select);  
    select[active].classList.add("active");
}

select.forEach((li,key) => {
    li.addEventListener("click" , function() {
        active = key;
        reloadActive();
    });
});



//-------------------- sửa dữ liệu --------------------------------



document.getElementById('productList').addEventListener('click', function (event) {
    var target = event.target;

    if (target.tagName === 'BUTTON' && target.textContent.trim() === 'Sửa') {
        var productId = target.parentElement.parentElement.querySelector('th:first-child').textContent;
        editProduct(productId);
    }
});

function editProduct(productId) {
    var existingProducts = JSON.parse(localStorage.getItem('product')) || [];
    document.getElementById('index').value = productId - 1;
    document.getElementById('productId').value = existingProducts[productId-1].id;
    document.getElementById('productName').value = existingProducts[productId-1].name;
    document.getElementById('productCost').value = existingProducts[productId-1].cost.replace('$', '');
    document.getElementById('addProduct').style.display = "block";
    document.getElementById('h2-add').style.display = "none"
    document.getElementById('h2-cha').style.display = "block"
    document.getElementById('add-submit').style.display = "none"
    document.getElementById('add-update').style.display = "block"
}


function changeProduct(){

    var existingProducts = JSON.parse(localStorage.getItem('product')) || [];
    var index = document.getElementById('index').value;
    var tempProduct =[];
    var productImg = document.getElementById('productImg').files[0];
    var reader = new FileReader();
    reader.onload = function(e){
        tempProduct = {
            id : document.getElementById('productId').value,
            name : document.getElementById('productName').value,
            img : e.target.result,
            cost : document.getElementById('productCost').value + "$"
        }
        existingProducts[index] = tempProduct;
        localStorage.setItem("product", JSON.stringify(existingProducts));
        renderPageNumber();
        document.getElementById('addProduct').style.display = "none";
        clearValueProduct();
    }
    reader.readAsDataURL(productImg);

}



function clearValueProduct(){
    document.getElementById('productId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productImg').value = '';
    document.getElementById('productCost').value = '';
}