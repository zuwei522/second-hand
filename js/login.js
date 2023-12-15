// 通过浏览器缓存（localStorage）来存储用户名与通过 md5 简单加密的密码，模拟登录与注册效果

// 获取登录相关文本框对象
const loginUsrname = document.querySelector("#login-usrname");
const loginPasswd = document.querySelector("#login-passwd");
const loginBtn = document.querySelector("#login-btn");

// 登录用户名输入框失焦时执行以下函数
loginUsrname.onblur = function () {
    // 若输入框不为空，恢复边框颜色，并清空下方红色提示信息
    if (loginUsrname.value != "") {
        loginUsrname.style.border = "1px solid #ced4da";
        redText(loginUsrname, "");
    }
};

// 登录密码输入框失焦时执行以下函数
loginPasswd.onblur = function () {
    // 若输入框不为空，恢复边框颜色，并清空下方红色提示信息
    if (loginPasswd.value != "") {
        loginPasswd.style.border = "1px solid #ced4da";
        redText(loginPasswd, "");
    }
};

// 点击登录按钮时执行以下函数
loginBtn.onclick = function () {
    // flag 为 true 时才可尝试登录
    flag = true;
    // 确保用户名与密码为非空
    if (!checkInput(loginUsrname)) {
        redText(loginUsrname, "请输入<b>用户名</b>！");
        flag = false;
    }
    if (!checkInput(loginPasswd)) {
        redText(loginPasswd, "请输入<b>密码</b>！");
        flag = false;
    }

    if (flag) {
        // 检查 localStorage 是否存在 users 字段
        if (localStorage.getItem("users") == null) {
            msgBox(
                "login-msg",
                "danger",
                true,
                "<b>用户名或密码错误</b>，请重试！"
            );
            return;
        }

        // 从 localStorage 读取 users 字段信息
        const users_string = localStorage.getItem("users") || {};
        const users = JSON.parse(users_string); // 将存储在 localStorage 中的 json 字符串转换为 js 对象

        // 获取 md5 加密的与用户名对应的密码
        const usr_passwd = users[loginUsrname.value];
        if (usr_passwd) {
            // 将登录时输入的密码进行 md5 加密，并与正确的加密密码进行比较
            if (usr_passwd === md5(loginPasswd.value)) {
                localStorage.setItem("token", true);
                msgBox("login-msg", "success", true, "登录成功！");
                setTimeout(() => {
                    // 从 URL 中提取参数
                    const params = new URLSearchParams(location.search);
                    // 获取跳转目标 URL
                    const target = params.get("target");
                    // 跳转至目标 URL
                    if (target) {
                        window.location.href = target;
                    } else {
                        window.location.href = "/";
                    }
                }, 1000);
            } else {
                // 密码错误
                msgBox(
                    "login-msg",
                    "danger",
                    true,
                    "<b>用户名或密码错误</b>，请重试！"
                );
            }
        } else {
            // 用户名不存在
            msgBox(
                "login-msg",
                "danger",
                true,
                "<b>用户名或密码错误</b>，请重试！"
            );
        }
    }
};

// 注册
const usrname = document.querySelector("#signup-usrname");
const phone = document.querySelector("#signup-phone");
const qq = document.querySelector("#signup-qq");
const passwd = document.querySelector("#signup-passwd");
const passwdTwice = document.querySelector("#signup-passwd-twice");
const signupBtn = document.querySelector("#signup-btn");

// 利用浏览器原生方法 checkValidity() 校验输入框输入值是否满足要求，并修改边框颜色
function checkInput(input) {
    if (input.checkValidity()) {
        input.style.border = "1px solid #ced4da";
        return true;
    } else {
        input.style.border = "1px solid red";
        return false;
    }
}

// 显示提示信息
function msgBox(msgBoxId, type, isRewrite, msg) {
    // msgBoxId（string）：要显示消息框的元素 id。
    // type（string）：消息框的样式名，可选值：success info warning danger primary secondary light dark。
    // isRewrite（boolean）：是否覆盖写入消息框。
    // msg（string）：消息内容，支持 HTML。
    const msgBox = document.getElementById(msgBoxId);
    if (msg == "") {
        msgBox.innerHTML = "";
        return;
    }

    if (type == "none") {
        msgBox.innerHTML = `${isRewrite ? "" : msgBox.innerHTML}${msg}`;
    } else {
        msgBox.innerHTML = `${isRewrite ? "" : msgBox.innerHTML
            }<div class="alert alert-${type} alert-dismissible fade show">${msg}<button type="button" class="close" data-dismiss="alert">&times;</button></div>`;
    }
}

// 显示输入框下的红色提示
function redText(input, msg) {
    input.nextElementSibling.innerHTML = msg;
}

usrname.onblur = function () {
    if (checkInput(usrname)) {
        redText(usrname, "");
        // 检查 localStorage 是否存在 users 字段
        if (localStorage.getItem("users") == null) {
            return;
        }
        const users_string = localStorage.getItem("users") || {};
        const users = JSON.parse(users_string); // 将存储在 localStorage 中的字符串 json 对象转换为 js 对象
        // 检查用户名是否存在
        if (users[usrname.value]) {
            redText(usrname, "该用户名<b>已存在</b>！");
            return;
        }
    } else {
        redText(
            usrname,
            "用户名应为<b>4-15位非数字开头的字母与数字组合</b>，可使用下划线"
        );
    }
};

phone.onblur = function () {
    // 检查手机号是否合法
    if (checkInput(phone)) {
        redText(phone, "");
    } else {
        redText(phone, "请输入正确的<b>11位手机号</b>！");
    }
};

qq.onblur = function () {
    // 对于可选输入框，先判断是否有输入，再验证输入合法性
    if (qq.value != "") {
        if (checkInput(qq)) {
            redText(qq, "");
        } else {
            redText(qq, "请输入正确的<b>QQ号</b>！");
        }
    } else {
        redText(qq, "");
        qq.style.border = "1px solid #ced4da";
    }
};

passwd.onblur = function () {
    if (passwdTwice.value != "") {
        checkPasswdTwice();
    }
    if (checkInput(passwd)) {
        redText(passwd, "");
    } else {
        redText(
            passwd,
            "密码应为<b>8-16个字符，至少1个大写字母，1个小写字母和1个数字</b>"
        );
    }
};

passwdTwice.onblur = function () {
    checkPasswdTwice();
};

// 验证两次密码是否一致
function checkPasswdTwice() {
    if (passwd.value == "") {
        return false;
    }
    if (passwd.value == passwdTwice.value) {
        redText(passwdTwice, "");
        passwdTwice.style.border = "1px solid #ced4da";
        return true;
    } else {
        redText(passwdTwice, "两次输入的密码<b>不一致</b>！");
        passwdTwice.style.border = "1px solid red";
    }
}

signupBtn.onclick = function () {
    // flag 为 true 时才可进行注册操作
    flag = true;
    if (!checkInput(usrname)) {
        redText(
            usrname,
            "用户名应为<b>4-15位非数字开头的字母与数字组合</b>，可使用下划线"
        );
        flag = false;
    }
    if (!checkInput(phone)) {
        redText(phone, "请输入正确的<b>11位手机号</b>！");
        flag = false;
    }
    if (qq.value != "") {
        if (!checkInput(qq)) {
            redText(qq, "请输入正确的<b>QQ号</b>！");
            flag = false;
        }
    }
    if (!checkInput(passwd)) {
        redText(
            passwd,
            "密码应为<b>8-16个字符，至少1个大写字母，1个小写字母和1个数字</b>"
        );
        flag = false;
    }
    if (!checkPasswdTwice()) {
        redText(passwdTwice, "请输入<b>确认密码</b>！");
        passwdTwice.style.border = "1px solid red";
        flag = false;
    }

    if (flag) {
        if (localStorage.getItem("users") == null) {
            const users = {};

            // 将密码进行简单加密
            users[usrname.value] = md5(passwd.value);
            // 将 json 对象转为字符串，再存入 localStorage 中
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            const users_string = localStorage.getItem("users") || {};
            const users = JSON.parse(users_string); // 将存储在 localStorage 中的字符串 json 对象转换为 js 对象
            if (users[usrname.value]) {
                // 确保注册时用户名不重复
                redText(usrname, "该用户名<b>已存在</b>！");
                return;
            }

            users[usrname.value] = md5(passwd.value);
            localStorage.setItem("users", JSON.stringify(users));
        }
        msgBox("signup-msg", "success", true, "注册成功！");
    }
};
