// 从 URL 中提取参数
const params = new URLSearchParams(location.search);
// 获取要显示在详情页的物品 id
const id = params.get("id");

// 当页面加载完毕后，执行以下函数
$(document).ready(() => {
    // 通过 jQuery 发起 AJAX 请求，获取所有商品数据
    $.getJSON("./data/item.json", function (data) {
        const item = data[id - 1];  // 提取 data 中第 (id - 1) 个物品的信息，用于之后渲染相关内容
        const currentId = data[id - 1].id     // 当前详情页展示的物品 id
        // 渲染物品数据
        $("#item-name").text(item.name);    // 物品名称
        $("#item-price").text(Number(item.price).toFixed(2));   // 物品价格，保留两位小数
        $("#item-description").text(item.description);  // 物品描述
        $("#item-img").attr("src", item.src);   // 物品图片路径
    });

    // 绑定发送按钮点击事件
    $("#sendMsgBtn").on("click", function () {
        const msg = $("#msgInput").val();
        if (msg == "") {
            return;
        }
        $("#msgInput").val("");
        sendMessage(msg);
    });
});

// 生成消息的 HTML
function msgOutput(target, msg) {
    // left 为对方发送消息，right 为自己发送消息
    var flag = 0;
    if (target == "left") {
        flag = 1;
    } else if (target == "right") {
        flag = 0;
    }
    // 生成发送消息时的时间
    var date = new Date();
    var year = date.getFullYear(); // 获取当前年份
    var month = date.getMonth().toString().padStart(2, "0"); // 获取当前月份
    var day = date.getDate().toString().padStart(2, "0"); // 获取当前日
    var hours = date.getHours().toString().padStart(2, "0"); // 获取当前小时数(0-23)
    var minutes = date.getMinutes().toString().padStart(2, "0"); // 获取当前分钟数(0-59)
    var seconds = date.getSeconds().toString().padStart(2, "0"); // 获取当前秒数(0-59)
    var week = date.getDay(); // 获取当前星期数(0-6)
    var weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
    ];
    var weekStr = weekArr[week];
    // 时间格式拼串
    var timeStr = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${weekStr}`;
    return `
    <div class="col-12">
    <div class="row mb-3${flag ? "" : " flex-row-reverse"}">
        <div class="userAvatarInner">
            <img src="./image/${flag ? " othersAvatar.jpg" : "myAvatar.jpg" }" alt="" width="60px"
                class="userAvatar">
        </div>
        <div class="col-9${flag ? "" : " d-flex justify-content-end" }">
            <div class="msg msg-${flag ? " left" : "right" }">
                ${msg}
                <div class="msgTime msgTime-${flag ? " left" : "right" }">
                    ${timeStr}
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}

// 发送消息
function sendMessage(msg) {
    $("#chatBox").append(msgOutput("right", msg)); // 在尾部插入新发送的消息
    $(".msg-box").scrollTop($(".msg-box")[0].scrollHeight); // 滚动条滚到最底部
    if (msg == "在吗？" || msg == "在？" || msg == "东西还在吗？") {
        setTimeout(() => {
            $("#chatBox").append(msgOutput("left", '在的'));
            $(".msg-box").scrollTop($(".msg-box")[0].scrollHeight);
        }, 2000);
    } else if (msg == "可以便宜点吗？" || msg == "可以便宜点吗") {
        setTimeout(() => {
            $("#chatBox").append(msgOutput("left", '这不好吧~'));
            $(".msg-box").scrollTop($(".msg-box")[0].scrollHeight);
        }, 2000);
    } else if (msg == "你好" || msg == "哟西") {
        setTimeout(() => {
            $("#chatBox").append(msgOutput("left", '好好好'));
            $(".msg-box").scrollTop($(".msg-box")[0].scrollHeight);
        }, 2000);
    }
}
