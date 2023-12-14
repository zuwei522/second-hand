// 检测用户是否登录
isLogin();
$(document).ready(function () {
    // 当文档加载完成时，执行以下函数

    // 当搜索框的输入事件触发时，执行以下函数
    $("#searchInput").on('input', function () {
        // 如果搜索框不为空，执行以下函数
        if (this.value.length > 0) {
            // 将搜索框的值转换为小写，这里this指代json里的数据块即
            //     {
            //     "id": 例子,
            //     "name": "例子",
            //     "price": "2例子",
            //     "description": "例子。",
            //     "category": "例子",
            //     "src":"例子",
            //     "qq":"例子"
            //   },
            var searchText = $(this).val().toLowerCase();//toLowerCase()将字符串转化成小写
            // 初始化一个空数组，用于存储搜索结果
            var searchResults = [];
            // 发送一个Ajax请求，从./data/item.json获取数据
            $.getJSON("./data/item.json", function (data) {
                // 遍历数据中的每个对象，检查它们的名称是否包含搜索文本
                for (name in data) {
                    //遍历所有与关键字有关json文件
                    if (data[name].name.toLowerCase().indexOf(searchText) > -1) {
                        // 如果包含，将对象添加到搜索结果数组中
                        //相当于当前结构含有的所有内容添加到数组searchResults[]中
                        searchResults.push(data[name]);
                    }
                }
                // 清空搜索结果列表
                //没有这个功能的话列表单回满
                $("#search_results").empty();
                // 在控制台输出搜索结果数组
                console.log(searchResults);

                // 遍历搜索结果数组，将每个结果添加到搜索结果列表中
                //index相当于次数
                $.each(searchResults, function (index) {
                    console.log("现在遍历到了第 " + index + " 个搜索结果");//控制面板能看到
                    // 将每个结果的名称和ID添加到搜索结果列表中
                    $("#search_results").append(
                        `<a class="searchResultItem list-group-item 
                    list-group-item-light list-group-item-action text-decoration-none" href='./item.html?id=${this.id}'>${this.name}<a/>`);
                });

                // 绑定搜索结果列表中的每个链接，以便在左键单击时导航到相应的页面
                $('.searchResultItem').on('mousedown', function () {
                    //从列表对应的a标签获取链接
                    const target = $(this).attr('href');
                    // 新窗口打开
                    window.open(target);
                });
            });
        } else {
            // 如果搜索框为空，清空搜索结果列表
            $("#search_results").empty();
        }
    });

    // 当搜索框失去焦点时，隐藏搜索结果列表
    $('#searchInput').on('blur', function () {
        //bootstrap里有一个d-none的一个类，利用addClass给id为search_results添加d-none从而达到隐藏的效果
        $("#search_results").addClass("d-none");
    });

    // 当搜索框获得焦点时，显示搜索结果列表
    //同理
    $('#searchInput').on('focus', function () {
        $("#search_results").removeClass("d-none");
    });

});



// 页面加载完毕后执行以下函数
$(document).ready(function () {
    $.getJSON("./data/item.json", function (data) {
        // 获取URL中的参数，获取当前要显示的类别
        const params = new URLSearchParams(location.search);//从地址搜索参数
        const category = params.get('category');//从地址栏中提取category的关键词
        const searchKey = params.get('searchKey');//从搜索栏中提取搜索框中searchkey的关键词
        // 根据参数值判断要显示的类别
        console.log(category);//在控制面板里检验读取的数据是否正确。
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
            default:
                if (searchKey != null) {
                    //利用val传递数据使得搜索框里的数据不改变
                    $('#searchInput').val(searchKey);
                    //传递searchKe的值给
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
                        if (searchResults.length > 0) {
                            // 遍历搜索结果数组，将每个结果添加到搜索结果列表中
                            $.each(searchResults, function (index, abc) {
                                //控制面板打印的内容
                                console.log("现在遍历到了第 " + index + " 个搜索结果");//浏览器检查搜索结果是否正确
                                // 将每个结果的名称和ID添加到搜索结果列表中
                                //jquery里的一个方法，在元素的末尾插入内容（html）
                                $(".product_display_area").append(
                                    `<div class="col-lg-3 col-md-4 col-6 mt-3">
                              <a class="text-decoration-none" href = "item.html?id=${this.id}" target="_blank">
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
                        }
                        //未搜索成功时候弹出的界面
                        else {
                            $(".product_display_area").append(
                                `<div class="alert alert-info alert-dismissible fade show">
                                <strong style="font-size: 25pt;"><svg xmlns="http://www.w3.org/2000/svg" fill="#CC3545" height="50" width="50" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                                    很抱歉没有找到与“${searchKey}”相关的物品！！！</strong>
                                <button type="button" class="close" data-dismiss="alert"></button>
                            </div>`)
                        }
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