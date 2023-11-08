var account = {
    signup: function (usrname, passwd) {
        if (usrname == "" || passwd == "") {    // 确保用户名与密码为非空
            document.getElementById("msg").innerHTML = '用户名或密码不能为空！ε=( o｀ω′)ノ';
            return;
        }
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
                document.getElementById("msg").innerHTML = '用户名已存在！';
                return;
            }

            users[usrname] = passwd;
            // console.log(JSON.stringify(users));
            localStorage.setItem('users', JSON.stringify(users));
        }
        document.getElementById("msg").innerHTML = ' ';
        alert("注册成功，请登录");

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

    login: function (usrname, passwd, target) {
        if (usrname == "" || passwd == "") {    // 确保用户名与密码为非空
            document.getElementById("msg").innerHTML = '用户名或密码不能为空！ε=( o｀ω′)ノ';
            return;
        }
        if (localStorage.getItem("users") == null) {
            document.getElementById("msg").innerHTML = '用户名或密码错误，请重试（；´д｀）ゞ';
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
                document.getElementById("msg").innerHTML = '用户名或密码错误，请重试（；´д｀）ゞ';
            }
        } else {
            document.getElementById("msg").innerHTML = '用户名或密码错误，请重试（；´д｀）ゞ';
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

    isLogin: function () {   // 在需要登录的页面加载时执行此函数
        flag = localStorage.getItem("token");
        if (!flag) {
            window.location.href = './noLogin.html';

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