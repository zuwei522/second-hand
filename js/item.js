const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);
// 读取 json 文件
//将数据库中的数据赋予给网页对应位置
$.getJSON("./data/item.json", function (data) {
    var item = data[id-1];  //itrm随机获得第一个id
    var t=data[id-1].id     //将第一个id赋值给t
    console.log(item);
    //每个元素赋予所对应的数据
    $("#item-name").text(item.name);
    $("#item-price").text(Number(item.price).toFixed(2));
    $("#item-description").text(item.description);
    $("#item-img").attr("src", item.src);
    $("#class").text(item.class);
    $("#condition").text(item.condition);
    $("#function").text(item.function);
    const category=data[id-1].category;//获得刚刚随机到的id-1的对应数据库中的产品类型区间
    data=data.filter(function(item){
        return item.id!=t;//利用filter删除刚刚已获得的原始id
    });
    //将所获的区间的数组打乱
    data.sort(function () {
        return (0.5 - Math.random());
    });
    //将其他已打乱的id与所获类型的区间用函数调用呈现，使他不会总是千篇一律的呈现同样的排序
    printItems(data,category);
}); 