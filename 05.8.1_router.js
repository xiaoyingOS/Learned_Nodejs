const express = require('express');

//创建路由对象
const router = express.Router();

//挂载具体路由
router.get('/user/list',(req,res)=>{
    res.send('GET user list')
});
router.post('/user/add',(req,res)=>{
    res.send('POST user add')
});

//向外导出路由对象(暴露)
module.exports = router;//以后都不指定空对象了