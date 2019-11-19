/**
 * try...catch写在异步代码中
 */
function parseJsonStrToObj(str) {
    setTimeout(function () {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log('转换失败了');
        }
    }, 0)
}
// 调用方法输出结果
var obj = parseJsonStrToObj('foo');
console.log('执行结果是：' + obj);

/**
 * 调用JSON.parse()方法后，会有一个返回值，但是当前的写法无法接收到这个返回值
 * 为了解决这个问题，异步编程中提出了回调函数的设计，可以使用回调函数来接收异步代码执行的处理结果
 * 在回调函数的设计中有3个约定
 * 1.函数名称通常为callback
 * 2.把代码中出现的错误作为callback回调函数的第一个参数进行传递
 * 3.把真正返回的结果数据，传递给callback的第二个参数
 */