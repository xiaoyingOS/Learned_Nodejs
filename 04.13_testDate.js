// const xiaoying = require('./xiaoying/index');

const xiaoying = require('./xiaoying');

const dtStr = xiaoying.dateFormat(new Date());
console.log(dtStr);

/*
这样也可以运行的原因是：
node在require模块，导入xiaoying模块的时候，
发现没有指定导入具体那个文件，就会去查找package.json配置文件指定的mian属性
*/

//测试转义字符串
const htmlStr = '<h1 title="标题">这是h1标签<span>123&nbsp;</span></h1>';
const str = xiaoying.htmlEscape(htmlStr);
console.log(str);

//测试还原字符串
const HTMLStr = '&lt;h1 title=&quot;标题&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;';
const HTML = xiaoying.htmlUnEscape(HTMLStr);
console.log(HTML);