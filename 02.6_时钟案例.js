const fs = require('fs');
const path = require('path');

//定义正则表达式，分别匹配 <style></style> 和 <script></script>
// \s 表示空白字符    \S 表示非空白字符   * 表示匹配任意多次
//定义表达式时，注意加转义字符(\)
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'/a2_Files/index.html'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取HTML文件失败！' + err.message);
    };
    //读取文件成功后，调用对应的三个方法，分别拆解出css，js，html文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});

//定义处理 CSS样式 的方法
function resolveCSS(htmlStr) {
    const r = regStyle.exec(htmlStr);
    //console.log(r); console.log(r[0]);
    //数组索引为0的是style标签内容
    //用 空格 替换掉style开始和结束标签,连续替换两次
    const newCSS = r[0].replace('<style>',' ').replace('</style>',' ');
    //console.log(newCSS);

    //调用 fs.writeFile() 方法，将提取的样式，写入到clock目录下的index.css文件中
    ///  要非常注意，必须自己建一个 clock文件夹，不然就会写入失败 ///
    ///  要非常注意，必须自己建一个 clock文件夹，不然就会写入失败 ///
    ///  要非常注意，必须自己建一个 clock文件夹，不然就会写入失败 ///

    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,err => {
        if(err){
            return console.log('写入CSS样式失败！' + err.message);
        };
        console.log('写入样式成功!');
    });
}

//定义处理 JS 脚本的方法
function resolveJS(htmlStr){
    const r1 = regScript.exec(htmlStr);
    const newJS = r1[0].replace('<script>','').replace('</script>','');

    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err) return console.log('写入JS脚本失败！' + err.message);
        console.log('写入JS文件成功！');
    });
};

//定义处理 HTML 结构的方法
function resolveHTML(htmlStr){
    const newHTML = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>')
    .replace(regScript,'<script src="./index.js"></script>');

    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err) return console.log('写入 HTML 文件失败！' + err.message);
        console.log('写入 HTML 文件成功！');
    });
};