isLogin();
window.onload = () => {
    $.getJSON("./data/item.json", function (data) {
        const params = new URLSearchParams(location.search);//
        const category = params.get('category');
        let itemListOutput = '';
        switch (Number(category)) {
            case 1:
                for (i = 12; i < 24; i++) {
                    itemListOutput = itemListOutput +
                    `<div class="col-lg-3 col-md-4 col-6 mt-3">
                    <a class="text-decoration-none" href = "item.html?id=${data[i].id}" >
                        <div class="other-item">
                            <div class="cot">
                                <img src="${data[i].src}" class="img-fluid img-item" />
                            </div>
                            <div class="cot-price">
                                <div class="size-price">￥${data[i].price}</div>
                            </div>
                            <div class="cot-name">
                                <div class="size-name">${data[i].name}</div>
                            </div>
                            <div class="cot-description">
                                <div class="size-description">${data[i].description}</div>
                            </div>
                        </div>
                    </a >
               </div >`;
                }
                $('.item-list').html(itemListOutput);
                break;
            case 2:
                for (i = 0; i < 12; i++) {
                    itemListOutput = itemListOutput +
                    `<div class="col-lg-3 col-md-4 col-6 mt-3">
                    <a class="text-decoration-none" href = "item.html?id=${data[i].id}" >
                        <div class="other-item">
                            <div class="cot">
                                <img src="${data[i].src}" class="img-fluid img-item" />
                            </div>
                            <div class="cot-price">
                                <div class="size-price">￥${data[i].price}</div>
                            </div>
                            <div class="cot-name">
                                <div class="size-name">${data[i].name}</div>
                            </div>
                            <div class="cot-description">
                                <div class="size-description">${data[i].description}</div>
                            </div>
                        </div>
                    </a >
               </div >`;    
                }
                $('.item-list').html(itemListOutput);
                break;
            case 3:
                for (i = 48; i < 60; i++) {
                    itemListOutput = itemListOutput +
                    `<div class="col-lg-3 col-md-4 col-6 mt-3">
                    <a class="text-decoration-none" href = "item.html?id=${data[i].id}" >
                        <div class="other-item">
                            <div class="cot">
                                <img src="${data[i].src}" class="img-fluid img-item" />
                            </div>
                            <div class="cot-price">
                                <div class="size-price">￥${data[i].price}</div>
                            </div>
                            <div class="cot-name">
                                <div class="size-name">${data[i].name}</div>
                            </div>
                            <div class="cot-description">
                                <div class="size-description">${data[i].description}</div>
                            </div>
                        </div>
                    </a >
               </div >`;    
                }
                $('.item-list').html(itemListOutput);
                break;
            case 4:
                for (i = 24; i < 36; i++) {
                    itemListOutput = itemListOutput +
                    `<div class="col-lg-3 col-md-4 col-6 mt-3">
                    <a class="text-decoration-none" href = "item.html?id=${data[i].id}" >
                        <div class="other-item">
                            <div class="cot">
                                <img src="${data[i].src}" class="img-fluid img-item" />
                            </div>
                            <div class="cot-price">
                                <div class="size-price">￥${data[i].price}</div>
                            </div>
                            <div class="cot-name">
                                <div class="size-name">${data[i].name}</div>
                            </div>
                            <div class="cot-description">
                                <div class="size-description">${data[i].description}</div>
                            </div>
                        </div>
                    </a >
               </div >`;    
                }
                $('.item-list').html(itemListOutput);
                break;
            case 5:
                for (i = 36; i < 48; i++) {
                    itemListOutput = itemListOutput +
                    `<div class="col-lg-3 col-md-4 col-6 mt-3">
                    <a class="text-decoration-none" href = "item.html?id=${data[i].id}" >
                        <div class="other-item">
                            <div class="cot">
                                <img src="${data[i].src}" class="img-fluid img-item" />
                            </div>
                            <div class="cot-price">
                                <div class="size-price">￥${data[i].price}</div>
                            </div>
                            <div class="cot-name">
                                <div class="size-name">${data[i].name}</div>
                            </div>
                            <div class="cot-description">
                                <div class="size-description">${data[i].description}</div>
                            </div>
                        </div>
                    </a >
               </div >`;    
                }
                $('.item-list').html(itemListOutput);
                break;
            default:
                for (i = 0; i < 60; i++) {
                    itemListOutput = itemListOutput +
                    `<div class="col-lg-3 col-md-4 col-6 mt-3">
                    <a class="text-decoration-none" href = "item.html?id=${data[i].id}" >
                        <div class="other-item">
                            <div class="cot">
                                <img src="${data[i].src}" class="img-fluid img-item" />
                            </div>
                            <div class="cot-price">
                                <div class="size-price">￥${data[i].price}</div>
                            </div>
                            <div class="cot-name">
                                <div class="size-name">${data[i].name}</div>
                            </div>
                            <div class="cot-description">
                                <div class="size-description">${data[i].description}</div>
                            </div>
                        </div>
                    </a >
               </div >`;
    
                }
                $('.item-list').html(itemListOutput);
        }

    });
}

// 读取 json 文件
