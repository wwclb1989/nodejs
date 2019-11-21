/**
 * 读取缓冲区
 */
// 创建一个可以存储26个字节的内存空间对象
var buf = new Buffer(26);
// 像buffer数组中存入26个字母对应的编码
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
// 输出全部字母
console.log(buf.toString('ascii'));
// 输出前5个字母
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
// 输出：'abcde'，默认编码为utf8
console.log(buf.toString(undefined, 0, 5));