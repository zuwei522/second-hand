const usrname = document.querySelector('#signup-usrname');
const phone = document.querySelector('#signup-phone');
const qq = document.querySelector('#signup-qq');
const passwd = document.querySelector('#signup-passwd');
const passwdTwice = document.querySelector('#signup-passwd-twice');
const signupBtn = document.querySelector('#signup-btn');

function checkInput(input) {
    if (input.checkValidity()) {
        input.style.border = "1px solid #ced4da";
        // $(input).removeClass('form-control-wrong').addClass('form-control');
        return true;
    } else {
        input.style.border = "1px solid red";
        // $(input).removeClass('form-control').addClass('form-control-wrong');
        return false;
    }
}

function msgBox(msgBoxId, type, isRewrite, msg) {
    // msgBoxId（string）：要显示消息框的元素 id。
    // type（string）：消息框的样式名，可选值：success info warning danger primary secondary light dark。
    // isRewrite（boolean）：是否覆盖写入消息框。
    // msg（string）：消息内容，支持 HTML。
    const msgBox = document.getElementById(msgBoxId);
    if (msg == '') {
        msgBox.innerHTML = '';
        return;
    }

    if (type == 'none') {
        msgBox.innerHTML = `${isRewrite ? '' : msgBox.innerHTML}${msg}`;
    } else {
        msgBox.innerHTML = `${isRewrite ? '' : msgBox.innerHTML}<div class="alert alert-${type} alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button>${msg}</div>`;
    }
}

function redText(input, msg) {
    input.nextElementSibling.innerHTML = msg;
}

usrname.onblur = function () {
    if (checkInput(usrname)) {
        redText(usrname, '');
        // const users_string = localStorage.getItem('users') || {};
        // const users = JSON.parse(users_string);// 将存储在 localStorage 中的字符串 json 对象转换为 js 对象
        // if (users[usrname]) { // 确保注册时用户名不重复
        //     redText(usrname, '该用户名<strong>已存在</strong>！');
        //     return;
        // }
    } else {
        redText(usrname, '用户名应为<strong>4-15位非数字开头的字母与数字组合</strong>，可使用下划线');
    }
}

phone.onblur = function () {
    if (checkInput(phone)) {
        redText(phone, '');
    } else {
        redText(phone, '请输入正确的<strong>11位手机号</strong>！');
    }
}

qq.onblur = function () {
    if (qq.value != '') {
        if (checkInput(qq)) {
            redText(qq, '');
        } else {
            redText(qq, '请输入正确的<strong>QQ号</strong>！');
        }
    } else {
        redText(qq, '');
        qq.style.border = "1px solid #ced4da";
    }
}

passwd.onblur = function () {
    if (passwdTwice.value != '') {
        checkPasswdTwice();
    }
    if (checkInput(passwd)) {
        redText(passwd, '');
    } else {
        redText(passwd, '密码应为<strong>8-16个字符，至少1个大写字母，1个小写字母和1个数字</strong>');

    }
}

passwdTwice.onblur = function () { checkPasswdTwice(); };
function checkPasswdTwice() {
    if (passwd.value == '') {
        return false;
    }
    if (passwd.value == passwdTwice.value) {
        redText(passwdTwice, '');
        passwdTwice.style.border = "1px solid #ced4da";
        return true;
    } else {
        redText(passwdTwice, '两次输入的密码<strong>不一致</strong>！');
        passwdTwice.style.border = "1px solid red";
    }
}

signupBtn.onclick = function () {
    flag = true;
    if (!checkInput(usrname)) {
        redText(usrname, '用户名应为<strong>4-15位非数字开头的字母与数字组合</strong>，可使用下划线');
        flag = false;
    }
    if (!checkInput(phone)) {
        redText(phone, '请输入正确的<strong>11位手机号</strong>！');
        flag = false;
    }
    if (qq.value != '') {
        if (!checkInput(qq)) {
            redText(qq, '请输入正确的<strong>QQ号</strong>！');
            flag = false;
        }
    }
    if (!checkInput(passwd)) {
        redText(passwd, '密码应为<strong>8-16个字符，至少1个大写字母，1个小写字母和1个数字</strong>');
        flag = false;
    }
    if (!checkPasswdTwice()) {
        redText(passwdTwice, '请输入<strong>确认密码</strong>！');
        passwdTwice.style.border = "1px solid red";
        flag = false;
    }

    if (flag) {
        if (localStorage.getItem('users') == null) {
            const users = {};

            users[usrname.value] = md5(passwd.value);
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            const users_string = localStorage.getItem('users') || {};
            const users = JSON.parse(users_string);// 将存储在 localStorage 中的字符串 json 对象转换为 js 对象
            if (users[usrname.value]) { // 确保注册时用户名不重复
                redText(usrname, '该用户名<strong>已存在</strong>！');
                return;
            }

            users[usrname.value] = md5(passwd.value);
            localStorage.setItem('users', JSON.stringify(users));
        }
        msgBox('signup-msg', 'success', true, '注册成功！');
    }
}