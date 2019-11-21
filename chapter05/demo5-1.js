/**
 * 二进制数据和乱码
 */
var fs = require('fs');
fs.readFile('./demo5-1/test.txt', function (err, data) {
    if (err) {
        throw err;
    }

    // 1. 输出读取的Buffer数组对象
    console.log(data);
    // 2. 输出乱码
    console.log(data.toString());

})