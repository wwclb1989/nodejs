/**
 * 使用HTTP构建Web服务器
 */
var http = require('http');
// 1. 创建一个HTTP服务器
var server = http.createServer();
// 2. 监听请求（request）事件
// request就是一个可读流，用来获取当前与服务器连接的客户端的一些请求报文数据
// response就是一个可写流，用来给客户端Socket发送消息，或者用来发送响应报文
server.on('request', function (request, response) {

    // 使用HTTP发送响应数据时，HTTP服务器会自动把数据通过HTTP协议包装为一个响应报文然后发送到Socket
    response.write('hello world');
    // 在响应结束之前，可以多次向客户端发送数据
    response.write('hello itheima');
    // 对于HTTP请求响应模型来说，它们的请求和响应是一次性的
    // 也就是说，每一次请求都必须结束响应，
    // 标识断开当前连接
    response.end();
    // 在一次HTTP请求响应模型中，当结束了响应时，就不能继续发送数据，以下消息不会显示
    // response.write('以下消息不会显示');
});

// 3. 监听端口
server.listen(3000, function () {
    console.log('server is listening at port 3000');
});