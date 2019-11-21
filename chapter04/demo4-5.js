var fs = require('fs');

fs.readFile('f:/a.txt', function (err, data) {
    if (err) {
        return console.log('读取文件失败了');
    }
    fs.writeFile('f:/c.txt', data.toString(), function (err) {
        if (err) {
            return console.log('写入文件失败了');
        }

        console.log('文件复制成功了')
    })
});