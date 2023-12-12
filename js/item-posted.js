        // 预览图片并更新预览区域
        document.getElementById("image").addEventListener("change", function (e) {
            /*当 id 为 "image" 的文件上传输入控件的 "change" 事件触发时,将执行后续的代码块*/ var reader =
                    new FileReader(); /*这是创建一个 FileReader 对象,用于读取上传的文件*/
                reader.onload = function (e) {
                    /*这是为 FileReader 对象的 "load" 事件绑定一个处理函数。当文件被成功读取后,将触发该事件,并传递一个包含文件数据的对象作为参数*/
                    document
                        .getElementById("preview")
                        .setAttribute(
                            "src",
                            e.target.result
                        ); /*将读取到的文件数据设置为 id 为 "preview" 的图片标签的 "src" 属性值*/
                };
                reader.readAsDataURL(
                    e.target.files[0]
                ); /*这是调用 FileReader 对象的 "readAsDataURL" 方法,将上传的文件以 DataURL 格式读取。DataURL 是 URL 编码的文件数据,可以作为 "src" 属性值使用在 HTML 图片标签中*/
            });
    
            function show() {
                /*函数名为 "show"*/
                alert(
                    "发布成功_(:3」∠)_    物品正在审核，审核成功后就可以啦~~~~~~"
                ); /*当函数被调用时,将弹出一个提示框*/
            }