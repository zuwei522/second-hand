const token = localStorage.getItem("token");

$("#logoutBtn").click(function () {
    logout("./");
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

if (token) {
    $(".navbar-nav > .nav-item:last > a:first").addClass("nav-item-hide");
    $(".navbar-nav > .nav-item:last > a:last").removeClass("nav-item-hide");
}

// 跳转随机物品详情页
$(".random-item")[0].addEventListener("click", jumpRandomItem, false);
function jumpRandomItem() {
    let random = Math.floor((Math.random() * 10000000) % 50) + 1;
    window.location.href = "./item.html?id=" + random;
}
