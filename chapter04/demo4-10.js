/**
 * 删除目录
 */
var fs = require('fs');

console.log('读取/testDemo4-8目录');

fs.readdir('C:/Course/testDemo4-8/', function (err, files) {
    if (err) {
        return console.error(err);
    }

    // 遍历所有文件
    files.forEach((function (file) {
        // 输出文件名
        console.log(file);
        // 删除文件
        fs.unlink('C:/Course/testDemo4-8/' + file, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log(file + '文件删除成功！');
        });
    }));

    // 存在异步回调问题！！！
    console.log('准备删除/testDemo4-8目录');
    fs.rmdir('C:/Course/testDemo4-8/', function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('目录删除成功！');
    })
});