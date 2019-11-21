var fs = require('fs');

// 源文件路径
// var srcPath = 'c:/Course/code/chapter05/demo5-7/input.txt'
var srcPath = 'input.txt';

// 目标文件路径
var distPath = 'txtoutput.txt';

var readableStream = fs.createReadStream(srcPath);
var writableStream = fs.createWriteStream(distPath);

// 可以通过使用可读流的函数pipe()接入到可写流中
// pipe()是一个很高效的数据处理方式
if (readableStream.pipe(writableStream)) {
    console.log('文件复制成功了')
} else {
    console.log('文件复制失败了')
}