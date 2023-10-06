//在外界使用 require 导入一个自定义模块，
//得到的成员，就是那个模块中，
//通过module.exports 指向的那个对象
const module_1 = require('./04.7_模块作用域1');

console.log(module_1);