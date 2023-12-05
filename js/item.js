const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);
// 读取 json 文件
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 1];
    console.log(item);
    $("#item-name").text(item.name);
    $("#item-price").text(Number(item.price).toFixed(2));
    $("#item-description").text(item.description);
    $("#item-img").attr("src", item.src);
});