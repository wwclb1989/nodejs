var fs = require('fs');
fs.stat('f:/a.txt', function (err, stats) {
    // 判断是否是文件
    console.log("是否是文件：" + stats.isFile());
    // 输出文件信息
    console.log(stats);

})