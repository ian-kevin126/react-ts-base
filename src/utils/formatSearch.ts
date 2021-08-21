export function formatSearch(se: string) {
    se = decodeURIComponent(se);
    se = se.substr(1); //从起始索引号提取字符串中指定数目的字符
    let arr = se.split('&'), //把字符串分割为字符串数组
        obj: Record<string, string> = {},
        newArr = [];
    arr.forEach((v, i) => {
        //数组遍历
        // console.log(v);
        // console.log(i);
        newArr = v.split('=');
        if (typeof obj[newArr[0]] === 'undefined') {
            obj[newArr[0]] = newArr[1];
        }
    });
    return obj;
}
