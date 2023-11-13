var account = {
    checkInputOnblur: function (inputId, msg) {
        const input = document.getElementById(inputId);
        console.log(this.checkInput(inputId));
        if (this.checkInput(inputId)){
            input.style.border = "1px solid #ced4da";   // 1px solid #ced4da
            this.msgBox(`${inputId}-msg`, 'none', true, '');
            console.log('checkInputOnblur: ' + inputId + ' is right');
        }else{
            this.msgBox(`${inputId}-msg`, 'none', true, `<p style="color:red;"><small>${msg}</small></p>`);
            console.log('checkInputOnblur: ' + inputId + ' is wrong');
        }
    },
    signup: function (usrname, passwd) {    // 注册
        isAllRight = true;
        this.msgBox('msg-signup', 'none', true, '');
        // 验证信息是否合法
        if (!this.checkInput('usrname-signup')) {
            this.msgBox('msg-signup', 'danger', false, '用户名仅能为<strong>5-15位非数字开头的字母与数字组合</strong>，可使用下划线。');
            isAllRight = false;
        }
        if (!this.checkInput('phone-signup')) {
            this.msgBox('msg-signup', 'danger', false, '输入的<strong>手机号</strong>不正确！');
            isAllRight = false;
        }
        if (!this.checkInput('qq-signup')) {
            this.msgBox('msg-signup', 'danger', false, '输入的<strong>QQ号</strong>不正确！');
            isAllRight = false;
        }
        if (document.getElementById('passwd-signup') === document.getElementById('passwd-signup-twice')) {  // 若两次输入的密码相同
            if (!this.checkInput('passwd-signup')) {
                this.checkInput('passwd-signup-twice'); // 与判断逻辑无关，仅在不正确时使输入框边框变红
                this.msgBox('msg-signup', 'danger', false, '密码应为<strong>8-16个字符，至少1个大写字母，1个小写字母和1个数字</strong>');
                isAllRight = false;
            }
        } else {
            this.checkInput('passwd-signup');   // 与判断逻辑无关，仅在不正确时使输入框边框变红
            this.checkInput('passwd-signup-twice'); // 与判断逻辑无关，仅在不正确时使输入框边框变红
            this.msgBox('msg-signup', 'danger', false, '两次输入的密码不同！');
            isAllRight = false;
        }
        if (!isAllRight) {
            return;
        }
        // 注册
        if (localStorage.getItem('users') == null) {
            const users = {};
            users[usrname] = passwd;
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            const users_string = localStorage.getItem('users') || {};
            // console.log(users_string);
            const users = JSON.parse(users_string);// 将存储在 localStorage 中的字符串 json 对象转换为 js 对象
            // console.log(users);
            if (users[usrname]) { // 确保注册时用户名不重复
                document.getElementById("msg-signup").innerHTML = '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>错误!</strong> 该用户名已存在，请换一个再试试！</div>';
                return;
            }

            users[usrname] = passwd;
            // console.log(JSON.stringify(users));
            localStorage.setItem('users', JSON.stringify(users));
        }
        this.msgBox('msg-signup', 'success', true, '注册成功，请<a href="#signin-page"><strong>登录<strong></a>');

        // if (localStorage.getItem("users") == undefined) {
        //     localStorage.setItem("usrname", [usrname]);
        //     localStorage.setItem("passwd", [passwd]);
        //     document.getElementById("msg").innerHTML = ' ';
        //     alert("注册成功，请登录");
        // } else if (localStorage.getItem("usrname").includes(usrname)) {
        //     document.getElementById("msg").innerHTML = '用户名已存在！';
        // } else {
        //     localStorage.getItem("usrname").push(usrname);
        //     localStorage.getItem("passwd").push(passwd);
        //     document.getElementById("msg").innerHTML = ' ';
        //     alert("注册成功，请登录");
        // }
        // window.location.href = 'login.html';
    },

    login: function (usrname, passwd, target) { // 登录
        if (usrname == "" || passwd == "") {    // 确保用户名与密码为非空
            document.getElementById("msg-login").innerHTML = '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>错误!</strong> 用户名或密码不能为空！</div>';
            return;
        }
        if (localStorage.getItem("users") == null) {
            document.getElementById("msg-login").innerHTML = '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>错误!</strong> 用户名或密码错误，请重试！</div>';
            return;
        }

        const users_string = localStorage.getItem('users') || {};
        const users = JSON.parse(users_string);// 将存储在 localStorage 中的 json 对象转换为 js 对象
        // const users = JSON.parse(users_json); 

        const usr_passwd = users[usrname];
        if (usr_passwd) {
            if (usr_passwd === passwd) {
                localStorage.setItem("token", true);
                document.getElementById("msg").innerHTML = ' ';
                window.location.href = target;
            } else {
                document.getElementById("msg-login").innerHTML = '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>错误!</strong> 用户名或密码错误，请重试！</div>';
            }
        } else {
            document.getElementById("msg-login").innerHTML = '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>错误!</strong> 用户名或密码错误，请重试！</div>';
        }

        // if (localStorage.getItem("usrname") == undefined) {
        //     document.getElementById("msg").innerHTML = '用户名或密码错误，请重试（；´д｀）ゞ';
        //     return;
        // }
        // flag = this.isRight(usrname, passwd);
        // if (flag) {
        //     localStorage.setItem("token", true);
        //     window.location.href = target;
        // } else {
        //     document.getElementById("msg").innerHTML = '用户名或密码错误，请重试（；´д｀）ゞ';
        // }
    },

    isLogin: function () {   // 判断当前是否为登录状态，在需要登录的页面加载时执行此函数
        flag = localStorage.getItem("token");
        if (!flag) {
            window.location.href = './noLogin.html';    // 若未登录，则跳转至登录页面

            // document.write('
            //     <a href="./">
            //         <img src="./image/logo.png" alt="logo" width="600px">
            //     </a>
            //     <h1>您尚未登录，请登录后再尝试~</h1>
            //     <a href="./login.html">三秒后自动跳转至登录页面，若未跳转请点击此处</a>
            // ');
            // setTimeout(function() { // 延迟三秒再跳转到登录页面
            //     window.location.href = './noLogin.html';
            // }, 3000);
        }
        // document.getElementById("user").innerHTML = localStorage.getItem("usrname");
    },

    checkInput: function (inputId) {    // 检查输入信息是否合法，判断依据为 input 元素的 pattern 属性
        const input = document.getElementById(inputId);
        if (!input.checkValidity()) {
            input.style.border = "1px solid red";   // 1px solid #ced4da
            return false;
        }else{
            return true;
        }
    },

    msgBox: function (msgBoxId, type, isRewrite, msg) {
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
            // if (method == 'add') {
            // msgBox.innerHTML = `${msgBox.innerHTML}<div class="alert alert-${type} alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button>${msg}</div>`;
            // } else if (method == 'rewrite') {
            //     msgBox.innerHTML = `<div class="alert alert-${type} alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button>${msg}</div>`;
            // }
            // msgBox.textContent = `<div class="alert alert-${type} alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button>${msg}</div>`
        }
    },
    // isRight: function (usrname, passwd) {
    //     if ((index = localStorage.getItem("usrname").indexOf(usrname)) != -1) {
    //         arr_passwd = localStorage.getItem("passwd").string.split(',');
    //         if (arr_passwd[index] == passwd) {
    //             localStorage.setItem("uid", index);
    //             return true;
    //         }
    //     } else {
    //         return false;
    //     }
    // },

    logout: function (target) {	// 登出并跳转到指定页面
        localStorage.removeItem("token");
        window.location.href = target;
    }
}