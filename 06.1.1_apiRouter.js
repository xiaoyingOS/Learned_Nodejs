const express = require('express');
const router = express.Router();

//挂载对应的路由
router.get('/get',(req,res)=>{
    //通过 req.query 获取客服端、通过查询字符串，发送到服务器的数据
    const query = req.query;

    //调用 res.send() 方法，向客服端响应处理结果
    res.send({
        status: 0, //0表示处理成功，1表示处理失败
        msg: 'GET 请求成功！', //状态的描述
        data: query //需要响应给客服端的数据
    });

});

//暴露
module.exports = router;
