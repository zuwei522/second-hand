const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);
// 读取 json 文件
//将数据库中的数据赋予给网页对应位置
$.getJSON("./data/item.json", function (data) {
    var item = data[id-1];
    var t=data[id-1].id
    console.log(item);
    $("#item-name").text(item.name);
    $("#item-price").text(Number(item.price).toFixed(2));
    $("#item-description").text(item.description);
    $("#item-img").attr("src", item.src);
    $("#class").text(item.class);
    $("#condition").text(item.condition);
    $("#function").text(item.function);
    const category=data[id-1].category;
    data=data.filter(function(item){
        return item.id!=t;
    });
    data.sort(function () {
        return (0.5 - Math.random());
    });
    printItems(data,category);
}); 