// 检测用户是否登录
isLogin();
$(document).ready(function () {
    // 当文档加载完成时，执行以下函数

    // 当搜索框的输入事件触发时，执行以下函数
    $("#searchInput").on('input', function () {
        // 如果搜索框不为空，执行以下函数
        if (this.value.length > 0) {
            // 将搜索框的值转换为小写
            var searchText = $(this).val().toLowerCase();
            // 初始化一个空数组，用于存储搜索结果
            var searchResults = [];
            // 发送一个Ajax请求，从./data/item.json获取数据
            $.getJSON("./data/item.json", function (data) {
                // 遍历数据中的每个对象，检查它们的名称是否包含搜索文本
                for (name in data) {
                    //
                    if (data[name].name.toLowerCase().indexOf(searchText) > -1) {
                        // 如果包含，将对象添加到搜索结果数组中
                        searchResults.push(data[name]);
                    }
                }
                // 清空搜索结果列表
                $("#s").empty();
                // 输出搜索结果数组
                console.log(searchResults);

                // 遍历搜索结果数组，将每个结果添加到搜索结果列表中
                $.each(searchResults, function (index, abc) {
                    console.log("现在遍历到了第 " + index + " 个搜索结果");//控制面板能看到
                    // 将每个结果的名称和ID添加到搜索结果列表中
                    $("#search_results").append(`<a class="searchResultItem list-group-item list-group-item-light list-group-item-action text-decoration-none" href='./item.html?id=${this.id}'>${this.name}<a/>`);
                });

                // 绑定搜索结果列表中的每个链接，以便在单击时导航到相应的页面
                $('.searchResultItem').on('mousedown', function () {
                    const target = $(this).attr('href');
                    window.location.href = target;
                });
            });
        } else {
            // 如果搜索框为空，清空搜索结果列表
            $("#search_results").empty();
        }
    });

    // 当搜索框失去焦点时，隐藏搜索结果列表
    $('#searchInput').on('blur', function () {
        $("#search_results").addClass("d-none");
    });

    // 当搜索框获得焦点时，显示搜索结果列表
    $('#searchInput').on('focus', function () {
        $("#search_results").removeClass("d-none");
    });

});



// 页面加载完毕后执行以下函数
$(document).ready(function () {
    $.getJSON("./data/item.json", function (data) {
        // 获取URL中的参数，获取当前要显示的类别
        const params = new URLSearchParams(location.search);//从地址搜索参数
        const category = params.get('category');//
        const searchKey = params.get('searchKey');//从地址栏中提取搜索框中searchkey的关键词

        // 根据参数值判断要显示的类别
        console.log(category);
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
                console.log('其他');
                break;
            case 10:
            default:
                if (searchKey != null) {
                    $('#searchInput').val(searchKey);
                    // 将搜索框的值转换为小写
                    var searchText = searchKey;
                    // 初始化一个空数组，用于存储搜索结果
                    var searchResults = [];
                    // 发送一个Ajax请求，从./data/item.json获取数据
                    $.getJSON("./data/item.json", function (data) {
                        // 遍历数据中的每个对象，检查它们的名称是否包含搜索文本
                        for (name in data) {
                            if (data[name].name.toLowerCase().indexOf(searchText) > -1) {
                                // 如果包含，将对象添加到搜索结果数组中
                                searchResults.push(data[name]);
                            }
                        }
                        // 输出搜索结果数组
                        console.log(searchResults);

                        // 遍历搜索结果数组，将每个结果添加到搜索结果列表中
                        $.each(searchResults, function (index, abc) {
                            console.log("现在遍历到了第 " + index + " 个搜索结果");
                            // 将每个结果的名称和ID添加到搜索结果列表中
                            $(".product_display_area").append(
                        `<div class="col-lg-3 col-md-4 col-6 mt-3">
                              <a class="text-decoration-none" href = "item.html?id=${this.id}" >
                                 <div class="other-item">
                                     <div class="picture_frame">
                                       <img src="${this.src}" class="img-fluid img-item" />
                                     </div>
                                    <div class="commodity-price">
                                        <div class="size-price">￥${this.price}</div>
                                    </div>
                                     <div class="commodity-name">
                                        <div class="size-name">${this.name}</div>
                                     </div>
                                     <div class="commodity-description">
                                        <div class="size-description">${this.description}</div>
                                     </div>
                                 </div>
                                </a >
                        </div >`
                            )
                        });
                    });
                } else {

                    // 如果类别为其他，则显示所有类商品
                    printItems(data, '数码');
                    printItems(data, '书籍');
                    printItems(data, '零食');
                    printItems(data, '生活');
                    printItems(data, '其他');
                    console.log('为你推荐');
                }
                break;

        }
    });
});