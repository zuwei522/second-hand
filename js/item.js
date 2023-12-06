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
    $("#class").text(item.class);
    $("#condition").text(item.condition);
    $("#function").text(item.function);
}); 
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 2];
    console.log(item);
    $("#other-item-name-1").text(item.name);
    $("#other-item-price-1").text(Number(item.price).toFixed(2));
    $("#other-item-description-1").text(item.description);
    $("#other-item-img-1").attr("src", item.src);
}); 
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 3];
    console.log(item);
    $("#other-item-name-2").text(item.name);
    $("#other-item-price-2").text(Number(item.price).toFixed(2));
    $("#other-item-description-2").text(item.description);
    $("#other-item-img-2").attr("src", item.src);
}); 
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 4];
    console.log(item);
    $("#other-item-name-3").text(item.name);
    $("#other-item-price-3").text(Number(item.price).toFixed(2));
    $("#other-item-description-3").text(item.description);
    $("#other-item-img-3").attr("src", item.src);
}); 
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 5];
    console.log(item);
    $("#other-item-name-4").text(item.name);
    $("#other-item-price-4").text(Number(item.price).toFixed(2));
    $("#other-item-description-4").text(item.description);
    $("#other-item-img-4").attr("src", item.src);
}); 
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 6];
    console.log(item);
    $("#other-item-name-5").text(item.name);
    $("#other-item-price-5").text(Number(item.price).toFixed(2));
    $("#other-item-description-5").text(item.description);
    $("#other-item-img-5").attr("src", item.src);
}); 
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 7];
    console.log(item);
    $("#other-item-name-6").text(item.name);
    $("#other-item-price-6").text(Number(item.price).toFixed(2));
    $("#other-item-description-6").text(item.description);
    $("#other-item-img-6").attr("src", item.src);
}); 
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 8];
    console.log(item);
    $("#other-item-name-7").text(item.name);
    $("#other-item-price-7").text(Number(item.price).toFixed(2));
    $("#other-item-description-7").text(item.description);
    $("#other-item-img-7").attr("src", item.src);
}); 
$.getJSON("./data/item.json", function (data) {
    const item = data[id - 9];
    console.log(item);
    $("#other-item-name-8").text(item.name);
    $("#other-item-price-8").text(Number(item.price).toFixed(2));
    $("#other-item-description-8").text(item.description);
    $("#other-item-img-8").attr("src", item.src);
}); 