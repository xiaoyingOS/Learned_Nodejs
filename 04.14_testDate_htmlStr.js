const xiaoying = require('./xiaoying');

const dtStr = xiaoying.dateFormat(new Date());
console.log(dtStr);

//测试转义字符串
const htmlStr = '<h1 title="标题">这是h1标签<span>123&nbsp;</span></h1>';
const str = xiaoying.htmlEscape(htmlStr);
console.log(str);

console.log("----------------");

//测试还原字符串
const HTMLStr = '&lt;h1 title=&quot;标题&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;';
const HTML = xiaoying.htmlUnEscape(HTMLStr);
console.log(HTML);