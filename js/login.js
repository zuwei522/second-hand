const loginUsrname = document.querySelector('#login-usrname');
const loginPasswd = document.querySelector('#login-passwd');
const loginBtn = document.querySelector('#login-btn');

loginUsrname.onblur = function () {
    if (loginUsrname.value != "") {
        loginUsrname.style.border = "1px solid #ced4da";
        redText(loginUsrname, '');
    }
}

loginPasswd.onblur = function () {
    if (loginPasswd.value != "") {
        loginPasswd.style.border = "1px solid #ced4da";
        redText(loginPasswd, '');
    }
}

loginBtn.onclick = function () { // 登录
    flag = true;
    if (!checkInput(loginUsrname)) {    // 确保用户名与密码为非空
        redText(loginUsrname, '请输入<strong>用户名</strong>！');
        flag = false;
    }
    if (!checkInput(loginPasswd)) {
        redText(loginPasswd, '请输入<strong>密码</strong>！');
        flag = false;
    }
    if (flag) {
        if (localStorage.getItem("users") == null) {
            msgBox('login-msg', 'danger', true, '<strong>用户名</strong>或<strong>密码</strong>错误，请重试！');
            return;
        }

        const users_string = localStorage.getItem('users') || {};
        const users = JSON.parse(users_string);// 将存储在 localStorage 中的 json 对象转换为 js 对象

        const usr_passwd = users[loginUsrname.value];
        if (usr_passwd) {
            if (usr_passwd === md5(loginPasswd.value)) {
                localStorage.setItem("token", true);
                msgBox('login-msg', 'success', true, '登录成功！');
                window.location.href = './';
            } else {    // 密码错误
                msgBox('login-msg', 'danger', true, '<strong>用户名</strong>或<strong>密码</strong>错误，请重试！');
            }
        } else {    // 用户名不存在
            msgBox('login-msg', 'danger', true, '<strong>用户名</strong>或<strong>密码</strong>错误，请重试！');
        }
    }
}