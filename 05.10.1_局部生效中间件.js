const express = require('express');
const app = express();

//定义中间件函数
const MW1 = (req,res,next)=>{
    console.log("调用了局部生效中间件");
    next();
};

//创建路由
app.get('/',MW1,(req,res)=>{
    res.send("Home Page-->MW1中间件");
});

app.get('/user',(req,res)=>{
    res.send("User page");
});


app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});
