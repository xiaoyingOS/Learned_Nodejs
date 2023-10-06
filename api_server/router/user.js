const express = require('express');
const router = express.Router();

const router_handler = require('../router_handler/user');

//导入验证数据的中间件
const expressJoi = require('@escook/express-joi');
//导入需要验证规则对象
const {reg_login_schema} = require('../schema/user');

//注册新用户
router.get('/reguser',expressJoi(reg_login_schema), router_handler.regUser);

//登录
router.get('/login', expressJoi(reg_login_schema), router_handler.login);

//暴露出去
module.exports = router;