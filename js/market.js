// 读取 json 文件
$.getJSON("./data/item.json", function (data) {
    let itemListOutput = '';
    for (i = 0; i < 37; i++) {
        itemListOutput = itemListOutput + `<div class="col-lg-3 col-sm-6 mt-4 item">
        <img src="./image/Findpiece/${data[i].id}.jpg" class="img-fluid">
        <div class="text-center">${data[i].name}</div>
        <div class="text-center sizecolor">￥${data[i].price}</div>
        <a href="./item.html?id=5" class="btn btn-light btn-block">查看详情</a>
        <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
    </div>`;

    }
    $('.item-list').html(itemListOutput);
});

$('.tech')[0].addEventListener('click', function () {
    $.getJSON("./data/item.json", function (data) {
        let itemListOutput = '';
        for (i = 11; i < 21; i++) {
            itemListOutput = itemListOutput + `<div class="col-lg-3 col-sm-6 mt-4 item">
        <img src="./image/Findpiece/${data[i].id}.jpg" class="img-fluid">
        <div class="text-center">${data[i].name}</div>
        <div class="text-center sizecolor">￥${data[i].price}</div>
        <a href="./item.html?id=5" class="btn btn-light btn-block">查看详情</a>
        <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
    </div>`;

        }
        $('.item-list').html(itemListOutput);
    })
});