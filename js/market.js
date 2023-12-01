window.onload = () => {
    $.getJSON("./data/item.json", function (data) {
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        let itemListOutput = '';
        switch (Number(category)) {
            case 1:
                for (i = 12; i < 24; i++) {
                    itemListOutput = itemListOutput +
                        `<a href="item.html?id=${data[i].id}" class="size1 item">
                <div class="col-lg-3 col-sm-6 mt-4">
                    <img src="${data[i].src}" class="img-fluid">
                    <div class="text-center">${data[i].name}</div>
                    <div class="text-center sizecolor">￥${data[i].price}</div>
                    <a href="./item.html?id=5" class="btn btn-light btn-block text-left">${data[i].description}</a>
                    <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
                </div>
            </a>`;
                }
                $('.item-list').html(itemListOutput);
                break;
            case 2:
                for (i = 0; i < 12; i++) {
                    itemListOutput = itemListOutput +
                        `<a href="item.html?id=${data[i].id}" class="size1 item">
                <div class="col-lg-3 col-sm-6 mt-4">
                    <img src="${data[i].src}" class="img-fluid">
                    <div class="text-center">${data[i].name}</div>
                    <div class="text-center sizecolor">￥${data[i].price}</div>
                    <a href="./item.html?id=5" class="btn btn-light btn-block text-left">${data[i].description}</a>
                    <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
                </div>
            </a>`;
                }
                $('.item-list').html(itemListOutput);
                break;
            case 3:
                for (i = 48; i < 60; i++) {
                    itemListOutput = itemListOutput +
                        `<a href="item.html?id=${data[i].id}" class="size1 item">
                <div class="col-lg-3 col-sm-6 mt-4">
                    <img src="${data[i].src}" class="img-fluid">
                    <div class="text-center">${data[i].name}</div>
                    <div class="text-center sizecolor">￥${data[i].price}</div>
                    <a href="./item.html?id=5" class="btn btn-light btn-block text-left">${data[i].description}</a>
                    <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
                </div>
            </a>`;
                }
                $('.item-list').html(itemListOutput);
                break;
            case 4:
                for (i = 24; i < 36; i++) {
                    itemListOutput = itemListOutput +
                        `<a href="item.html?id=${data[i].id}" class="size1 item">
                <div class="col-lg-3 col-sm-6 mt-4">
                    <img src="${data[i].src}" class="img-fluid">
                    <div class="text-center">${data[i].name}</div>
                    <div class="text-center sizecolor">￥${data[i].price}</div>
                    <a href="./item.html?id=5" class="btn btn-light btn-block text-left">${data[i].description}</a>
                    <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
                </div>
            </a>`;
                }
                $('.item-list').html(itemListOutput);
                break;
            case 5:
                for (i = 36; i < 48; i++) {
                    itemListOutput = itemListOutput +
                        `<a href="item.html?id=${data[i].id}" class="size1 item">
                <div class="col-lg-3 col-sm-6 mt-4">
                    <img src="${data[i].src}" class="img-fluid">
                    <div class="text-center">${data[i].name}</div>
                    <div class="text-center sizecolor">￥${data[i].price}</div>
                    <a href="./item.html?id=5" class="btn btn-light btn-block text-left">${data[i].description}</a>
                    <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
                </div>
            </a>`;
                }
                $('.item-list').html(itemListOutput);
                break;
            default:
                for (i = 0; i < 60; i++) {
                    itemListOutput = itemListOutput +
                        `<a href="item.html?id=${data[i].id}" class="size1 item">
                <div class="col-lg-3 col-sm-6 mt-4">
                    <img src="${data[i].src}" class="img-fluid">
                    <div class="text-center">${data[i].name}</div>
                    <div class="text-center sizecolor">￥${data[i].price}</div>
                    <a href="./item.html?id=5" class="btn btn-light btn-block text-left">${data[i].description}</a>
                    <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
                </div>
            </a>`;
                }
                $('.item-list').html(itemListOutput);
        }

    });
}

// 读取 json 文件
$('.recommend')[0].addEventListener('click', function () {
    $.getJSON("./data/item.json", function (data) {
        let itemListOutput = '';
        for (i = 0; i < 60; i++) {
            itemListOutput = itemListOutput +
                `<a href="item.html?id=${data[i].id}" class="size1 item"><div class="col-lg-3 col-sm-6 mt-4">
        <img src="${data[i].src}" class="img-fluid">
        <div class="text-center">${data[i].name}</div>
        <div class="text-center sizecolor">￥${data[i].price}</div>
        <a href="./item.html?id=5" class="btn btn-light btn-block text-left">${data[i].description}</a>
        <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
    </div></a>`;
        }
        $('.item-list').html(itemListOutput);
    })
});

$('.tech')[0].addEventListener('click', function () {
    $.getJSON("./data/item.json", function (data) {
        let itemListOutput = '';
        for (i = 12; i < 24; i++) {
            itemListOutput = itemListOutput +
                `<a href="item.html?id=${data[i].id}" class="size1 item"> <div class="col-lg-3 col-sm-6 mt-4 ">
        <img src="${data[i].src}" class="img-fluid">
        <div class="text-center">${data[i].name}</div>
        <div class="text-center sizecolor">￥${data[i].price}</div>
        <a href="./item.html?id=5" class="btn btn-light btn-block">查看详情</a>
        <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
    </div></a> `;
        }
        $('.item-list').html(itemListOutput);
    })
});
$('.Stacks')[0].addEventListener('click', function () {
    $.getJSON("./data/item.json", function (data) {
        let itemListOutput = '';
        for (i = 0; i < 12; i++) {
            itemListOutput = itemListOutput +
                `<a href="item.html?id=${data[i].id}" class="size1 item"> <div class="col-lg-3 col-sm-6 mt-4 item">
        <img src="${data[i].src}" class="img-fluid">
        <div class="text-center">${data[i].name}</div>
        <div class="text-center sizecolor">￥${data[i].price}</div>
        <a href="./item.html?id=5" class="btn btn-light btn-block">查看详情</a>
        <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
    </div></a>`;
        }
        $('.item-list').html(itemListOutput);
    })
});
$('.snacks1')[0].addEventListener('click', function () {
    $.getJSON("./data/item.json", function (data) {
        let itemListOutput = '';
        for (i = 48; i < 60; i++) {
            itemListOutput = itemListOutput +
                `<a href="item.html?id=${data[i].id}" class="size1 item"><div class="col-lg-3 col-sm-6 mt-4 item">
        <img src="${data[i].src}" class="img-fluid">
        <div class="text-center">${data[i].name}</div>
        <div class="text-center sizecolor">￥${data[i].price}</div>
        <a href="./item.html?id=5" class="btn btn-light btn-block">${data[i].description}</a>
        <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
    </div></a>`;
        }
        $('.item-list').html(itemListOutput);
    })
});
$('.life1')[0].addEventListener('click', function () {
    $.getJSON("./data/item.json", function (data) {
        let itemListOutput = '';
        for (i = 24; i < 36; i++) {
            itemListOutput = itemListOutput +
                `<a href="item.html?id=${data[i].id}" class="size1 item"><div class="col-lg-3 col-sm-6 mt-4 item">
        <img src="${data[i].src}" class="img-fluid">
        <div class="text-center">${data[i].name}</div>
        <div class="text-center sizecolor">￥${data[i].price}</div>
        <a href="./item.html?id=5" class="btn btn-light btn-block">查看详情</a>
        <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
        </div>
        </a> `;
        }
        $('.item-list').html(itemListOutput);
    })
});
$('.other1')[0].addEventListener('click', function () {
    $.getJSON("./data/item.json", function (data) {
        let itemListOutput = '';
        for (i = 36; i < 48; i++) {
            itemListOutput = itemListOutput +
                `<a href="item.html?id=${data[i].id}" class="size1 item"> <div class="col-lg-3 col-sm-6 mt-4 item">
        <img src="${data[i].src}" class="img-fluid">
        <div class="text-center">${data[i].name}</div>
        <div class="text-center sizecolor">￥${data[i].price}</div>
        <a href="./item.html?id=5" class="btn btn-light btn-block">查看详情</a>
        <button type="button" class="btn btn-danger btn-block badge-primary">添加到购物车</button>
    </div>
    </a> `;
        }
        $('.item-list').html(itemListOutput);
    })
});