// 检测用户是否登录
isLogin();

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
                       <div class="cot">
                           <img src="${data[category].src}" class="img-fluid img-item" />
                       </div>
                       <div class="cot-price">
                           <div class="size-price">￥${data[category].price}</div>
                       </div>
                       <div class="cot-name">
                           <div class="size-name">${data[category].name}</div>
                       </div>
                       <div class="cot-description">
                           <div class="size-description">${data[category].description}</div>
                       </div>
                   </div>
               </a >
          </div >`);
        }
    }
}

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