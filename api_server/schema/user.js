//导入定义规则的包
// const joi = require('@hapi/joi');
const joi = require('joi');

//定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(18).required();
const password = joi.string().pattern(/^[\S]{6,13}$/).required();
/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

//定义 id，nickname，email的验证规则
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();

//定义验证 avatar 头像的验证规则
const avatar = joi.string().dataUri().required();

//定义验证和登录表单数据的规则对象
exports.reg_login_schema = {
    body: {
        username,
        password,
    },
};

//验证规则对象，更新用户基本信息
exports.update_userinfo_schema = {
    //需要对 req.body里面的数据进行验证
    body: {
        id: id,
        nickname: nickname,
        email: email
    },
};

//验证规则对象，更新密码

// 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
// 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
// 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
exports.update_password_schema = {
    body: {
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password),
    }
};


//验证规则对象，更新头像
exports.update_avatar_schema = {
    body: {
        avatar
    }
};