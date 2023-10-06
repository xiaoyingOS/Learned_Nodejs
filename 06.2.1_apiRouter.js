const express = require('express');
const router = express.Router();

//定义post接口
router.post('/post',(req,res)=>{
    //通过req.body获取请求体中包含的url-encoded格式的数据
    const body = req.body;
    //向客服端响应结果
    res.send({
        status: 0,
        msg: 'POST 请求成功！',
        data: body
    });
});

//06.3.2 补充的DELELE接口
//定义 DELETE 接口
router.delete('/delete',(req,res)=>{
    res.send({
        status: 0,
        msg: 'DELETE请求成功！'
    });
});

module.exports = router;