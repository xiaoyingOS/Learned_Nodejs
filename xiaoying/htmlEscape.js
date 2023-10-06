function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g,match=>{
        switch(match){
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;'
        }
    });
}

function htmlUnEscape(str){
    return str.replace(/&lt;|&gt;|&amp;|&quot;/g,match=>{
            switch(match){
                case '&gt;':
                    return '>';
                case '&lt;':
                    return '<';
                case '&quot;':
                    return '"';
                case '&amp;':
                    return '&';
            }
    });
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}