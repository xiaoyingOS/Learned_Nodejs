//导入express
const express = require('express');
//创建 web服务器
const app = express();

//监听客服端的 GET和POST请求，并向客服端响应具体的内容
app.get('/users',(req,res)=>{
    //调用 express 提供的 res.send() 方法，向客服端响应一个 JSON 对象
    res.send({name: '张三',age: 18,gender: '男'});
});

//调用 express 提供的 res.send() 方法，向客服端响应一个 文本字符串
app.post('/users',(req,res)=>{
    res.send("请求成功");
});

app.get('/',(req,res)=>{
    //req.query 可以获取客服端发送过来的 查询参数 (就是网址栏 ? 后面的那一串东西)
    //注意：默认情况下，req.query 是一个空对象
    console.log(req.query);
    res.send(req.query);
});

app.get('/users/:id',(req,res)=>{
    //req.params 是一个动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params);
});

// 冒号(:) 后面的字符串可以任意写，还可以写多个参数
app.get('/users/:ids/:username',(req,res)=>{
    //req.params 是一个动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params);
});

//启动 web服务器
app.listen(80,()=>{
    console.log("express server running at 127.0.0.1");
})