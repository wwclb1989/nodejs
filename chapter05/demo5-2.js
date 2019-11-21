/**
 * 写入缓冲区
 */
// 创建一个可以存储5个字节的内存空间对象
var buf = new Buffer(5);
// 通过buffer对象的length属性可以获取buffer缓存中的字节大小
console.log(buf.length);
// 向缓冲区写入a
buf.write('a');
// 输出缓冲区数据
console.log(buf);
// 向缓冲区写入b
// 第二个参数表示写入的索引值，第三个参数表示写入的字节数
buf.write('b', 1, 1, 'ascii');
// 输出缓冲区数据
console.log(buf);