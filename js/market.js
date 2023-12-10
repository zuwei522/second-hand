// 检测用户是否登录
isLogin();



// 页面加载完毕后执行以下函数
$(document).ready(function () {
    $.getJSON("./data/item.json", function (data) {
        // 获取URL中的参数，获取当前要显示的类别
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        let itemListOutput = '';

        // 根据参数值判断要显示的类别
        switch (Number(category)) {
            case 1:
                // 如果类别为1，则只显示数码类商品
                printItems(data, '数码');
                break;
            case 2:
                // 如果类别为2，则只显示书籍类商品
                printItems(data, '书籍');
                break;
            case 3:
                // 如果类别为3，则只显示零食类商品
                printItems(data, '零食');
                break;
            case 4:
                // 如果类别为4，则只显示生活类商品
                printItems(data, '生活');
                break;
            case 5:
                // 如果类别为5，则显示所有类商品
                printItems(data, '其他');
                break;
            default:
                // 如果类别为其他，则显示所有类商品
                printItems(data, '数码');
                printItems(data, '书籍');
                printItems(data, '零食');
                printItems(data, '生活');
                printItems(data, '其他');
        }
    });
});