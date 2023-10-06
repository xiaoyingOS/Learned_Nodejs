const zdy = require('./05.1_自定义模块.js');
console.log(zdy);//输出{}，空对象，因为没有暴露数据

require('./05.1_自定义模块.js');//下面这三个只会输出一个
require('./05.1_自定义模块.js');
require('./05.1_自定义模块.js');
