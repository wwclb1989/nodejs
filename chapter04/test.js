/**
 * 测试文件复制
 * @type {copy}
 */
// 加载封装好的文件复制功能模块
var copy = require('./demo4-6');

// 调用copy()函数
copy('f:/a.txt', 'f:/d.txt', function (err) {
    if (err) {
        return console.log('文件复制失败了');
    }
    console.log('文件复制成功了');
})