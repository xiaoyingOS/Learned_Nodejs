//定义格式化时间函数
function dateFormat(dateStr){
    const dt = new Date(dateStr);

    const YYYY = dt.getFullYear();
    const MM = padZero(dt.getMonth() + 1);
    const DD = padZero(dt.getDate());

    const HH = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());

    return `${YYYY}-${MM}-${DD} ${HH}:${mm}:${ss}`;
}

//补零方法 (就是小于9，补个0，年份不需要补零)
function padZero(number){
    return number > 9 ? number : '0' + number;
}

module.exports = {
    dateFormat
}