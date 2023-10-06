const express = require('express');
const app = express();

//定义中间件函数
const MW1 = (req,res,next)=>{
    console.log("调用了第1个局部生效中间件");
    next();
};

const MW2 = function(req,res,next){
    console.log("调用了第2个局部生效中间件");
    next();
};

//创建路由
app.get('/',MW1,MW2,(req,res)=>{
    res.send("Home Page-->MW1和MW2<--中间件");
});

app.get('/user',(req,res)=>{
    res.send("User page");
});

app.post('/',[MW1,MW2],(req,res)=>{
    res.send("POST请求的-->MW1和MW2<--中间件");
});

app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});
