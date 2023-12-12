// 从 URL 中提取参数
const params = new URLSearchParams(location.search);
// 获取要显示在详情页的物品 id
const id = params.get("id");

// 通过 jQuery 发起 AJAX 请求，获取所有商品数据
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 1];  // 提取 data 中第 (id - 1) 个物品的信息，用于之后渲染相关内容
    const currentId = data[id - 1].id     // 当前详情页展示的物品 id

    // 渲染物品数据
    $("#item-name").text(item.name);    // 物品名称
    $("#item-price").text(Number(item.price).toFixed(2));   // 物品价格，保留两位小数
    $("#item-description").text(item.description);  // 物品描述
    $("#item-img").attr("src", item.src);   // 物品图片路径
    $("#item-category").text(item.category);    // 物品分类
    $("#iWantItBtn_1").attr("href", `./chat.html?id=${id}`);   // “我想要”按钮链接
    $("#iWantItBtn_2").attr("href", `./chat.html?id=${id}`);   // “我想要”按钮链接

    // 获取显示在详情页的物品分类
    const category = data[id - 1].category;

    // 利用 currentId，将显示在详情页的物品信息从 data 中删除
    data = data.filter(function (item) {
        return item.id != currentId;
    });

    // 将数组 data 内的物品信息顺序随机打乱
    data.sort(function () {
        return (0.5 - Math.random());
    });

    // 将 data 中相同分类的物品渲染在页面下方
    printItems(data, category);

    // 留言功能
    $("#sendMsgBtn").click(() => {
        msg = $("#msgInput").val();
        if (msg != "") {
            $('#msgList').append(`<li class="list-group-item list-group-item-info">蒋祖为：${msg}</li>`);
            $("#msgInput").val(null);
        }
    });
}); 