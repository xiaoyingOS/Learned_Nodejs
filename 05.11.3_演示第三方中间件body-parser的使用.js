const express = require('express');
const app = express();

//导入 body-parser 中间件
const parser = require('body-parser');

//注册中间件
//和express内置中间件urlencoded使用方法差不多，
//因为内置中间件它就是基于body-parser封装出来的

// app.use(express.urlencoded({extended: false}));
app.use(parser.urlencoded({extended: false}));

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("ok");
});

app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});