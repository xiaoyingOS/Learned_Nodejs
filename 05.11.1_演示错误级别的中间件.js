const express = require('express');
const app = express();

//定义路由
app.get('/',(req,res)=>{
    //抛出错误
    throw new Error("服务器发生错误");
    res.send("Home Page");
});

//定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err,req,res,next)=>{
    console.log("发生错误" + err.message);
    res.send("Error！" + err.message);
    next();
});

app.listen(80,()=>{
    console.log("express server running at http:127.0.0.1");
})
