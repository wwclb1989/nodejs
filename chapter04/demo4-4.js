/**
 * 文件读取
 */
var fs = require('fs');

// 读取文件
fs.readFile('f:/a.txt', function (err, data) {
    if (err) {
        return console.log('文件读取失败');
    }

    // 因为计算机中所有的数据最终保存的都是二进制数据
    // 所以可以通过调用toString()方法将二进制数据转换为人类可以识别的字符
    console.log(data.toString());
});