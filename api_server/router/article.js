//文章的路由模块

const express = require('express');
const router = express.Router();

//导入需要的处理函数模块
const article_handler = require('../router_handler/article');

//发布文章的路由
router.post('/add',article_handler.addArticle);

//共享出去
module.exports = router;