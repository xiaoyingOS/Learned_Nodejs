const express = require('express');
const app = express();

//定义第一个中间件。
app.use((req,res,next)=>{
    console.log("调用了第1个中间件");
    next();
});

//定义第二个中间件
app.use((req,res,next)=>{
    console.log("调用了第2个中间件");
    next();
});

app.get('/',(req,res)=>{
    res.send("Home Page" + "-->");
});

app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1");
});