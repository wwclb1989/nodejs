function parseJsonStrToObj(str, callback) {
    setTimeout(function () {
        try {
            var obj = JSON.parse(str);
            callback(null, obj);
        } catch (e) {
            callback(e, null);
        }
    }, 0)
}
// 注意区分错误信息和正确的数据信息
parseJsonStrToObj('{"foo":"bar"}', function (err, result) {
    if (err) {
        return console.log('转换失败了');
    }
    console.log('数据转换成功，没有问题可以直接使用了：' + result);
});

/**
 *     在异步编程中，当异步函数执行时，不确定何时执行完毕，回调函数会被压入到一
 * 个事件循环（Event Loop）队列，然后往下执行其他代码，直到异步函数执行完成后，
 * 才会开始处理事件循环，调用相应的回调函数，这个事件循环队列是一个先进先出的队列，
 * 这说明回调是按照它们被加入队列的顺序执行的。
 */