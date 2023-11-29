const token = localStorage.getItem("token");

function logout(target) {
    // 登出并跳转到指定页面
    localStorage.removeItem("token");
    window.location.href = target;
}

function isLogin() {
    // 判断当前是否为登录状态，在需要登录的页面加载时执行此函数
    if (!token) {
        window.location.href = "./noLogin.html"; // 若未登录，则跳转至登录页面

        // document.write('
        //     <a href="./">
        //         <img src="./image/logo.png" alt="logo" width="600px">
        //     </a>
        //     <h1>您尚未登录，请登录后再尝试~</h1>
        //     <a href="./login.html">三秒后自动跳转至登录页面，若未跳转请点击此处</a>
        // ');
        // setTimeout(function() { // 延迟三秒再跳转到登录页面
        //     window.location.href = './noLogin.html';
        // }, 3000);
    }
    // document.getElementById("user").innerHTML = localStorage.getItem("usrname");
}

if (token) {
    $(".navbar-nav > .nav-item:last > a:first").addClass("nav-item-hide");
    $(".navbar-nav > .nav-item:last > a:last").removeClass("nav-item-hide");
}

// 跳转随机物品详情页
$('.random-item')[0].addEventListener("click", jumpRandomItem, false);
function jumpRandomItem() {
    let random = Math.floor((Math.random() * 10000000) % 50);
    window.location.href = "./item.html?id=" + random;
}
