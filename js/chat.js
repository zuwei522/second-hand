// 从 URL 中提取参数
const params = new URLSearchParams(location.search);
// 获取要显示在详情页的物品 id
const id = params.get("id");
// 初始化购买状态
let purchased = false;

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

    // 绑定购买按钮点击事件
    $('#purchaseBtn').on('click', () => {
        if (!purchased) {
            $("#chatBox").append(`<div class="col-12">
            <div class="alert alert-success text-sm-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="green" height="16" width="16"
            viewBox="0 0 512 512">
            <path
            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
            </svg>
            <strong>购买成功!</strong> 请尽快联系卖家交易。
            </div>
            </div>`);
            purchased = true;

            $('#purchaseBtn').removeClass("btn-danger").addClass("btn-outline-success disabled").text("已购买");
        }
    });

    setTimeout(() => {
        $("#chatBox").append(`<div class="col-12">
        <div class="alert alert-primary text-sm-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="green" height="16" width="20" viewBox="0 0 640 512"><path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
            <strong>卖家当前处于在线状态</strong>，可直接发起聊天。
        </div>
    </div>`);
    }, 1500);

    setTimeout(() => {
        $("#chatBox").append(`
        <div class="col-12">
            <div class="alert alert-danger text-sm-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#CC3545" height="16" width="20" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                涉及资金交易，请确认对方身份，<strong>谨防诈骗</strong>。
            </div>
        </div>`);
    }, 2000);

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
    return `<div class="col-12">
    <div class="row mb-3${flag ? "" : " flex-row-reverse"}">
        <div class="user-avatarInner">
            <img src="./image/${flag ? "othersAvatar.jpg" : "myAvatar.jpg"}" alt="" width="60px"
                class="user-avatar">
        </div>
        <div class="col-9${flag ? "" : " d-flex justify-content-end"}">
            <div class="msg msg-${flag ? "left" : "right"}">
                ${msg}
                <div class="msg-time msg-time-${flag ? " left" : "right"}">
                    ${timeStr}
                </div>
            </div>
        </div>
    </div>
</div>`;
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
