const token = localStorage.getItem("token");

$(document).ready(() => {
    // 若当前为已登录状态，隐藏导航栏的登录按钮，并显示退出登录按钮
    if (token) {
        $(".navbar-nav > .nav-item:last > a:first").addClass("nav-item-hide");
        $(".navbar-nav > .nav-item:last > a:last").removeClass("nav-item-hide");
    }

    // 监听退出登录按钮的点击事件
    $("#logoutBtn").click(function () {
        logout("./");
    });

    // 跳转随机物品详情页
    $(".random-item")[0].addEventListener("click", jumpRandomItem, false);
    function jumpRandomItem() {
        let random = Math.floor((Math.random() * 10000000) % 60) + 1;
        window.location.href = "./item.html?id=" + random;
    }
});

function logout(target) {
    // 登出并跳转到指定页面
    localStorage.removeItem("token");
    window.location.href = target;
}

function isLogin() {
    // 判断当前是否为登录状态，在需要登录的页面加载时执行此函数
    if (!token) {
        window.location.href = "./noLogin.html"; // 若未登录，则跳转至登录页面
    }
}

// 定义一个函数，用于打印商品列表
function printItems(data, targetCategory) {
    // 遍历数据中的每个商品
    for (category in data) {
        // 如果商品的类别等于目标类别，则将商品添加到列表中
        if (data[category].category == targetCategory) {
            // 创建一个包含商品信息的HTML元素
            $('.item-list').append(`<div class="col-lg-3 col-md-4 col-6 mt-3">
               <a class="text-decoration-none" href = "item.html?id=${data[category].id}" >
                   <div class="other-item">
                       <div class="picture_frame">
                           <img src="${data[category].src}" class="img-fluid img-item" />
                       </div>
                       <div class="commodity-price">
                           <div class="size-price">￥${data[category].price}</div>
                       </div>
                       <div class="commodity-name">
                           <div class="size-name">${data[category].name}</div>
                       </div>
                       <div class="commodity-description">
                           <div class="size-description">${data[category].description}</div>
                       </div>
                   </div>
               </a >
          </div >`);
        }
    }
}