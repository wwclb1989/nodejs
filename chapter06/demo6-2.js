/**
 * 在服务端使用Socket
 */
// 1. 加载net核心模块
var net = require('net');
// 2. 创建一个服务应用程序，得到一个服务器实例对象
var server = net.createServer();
// 3. 监听客户端的连接事件，连接成功就会执行回调处理函数
server.on('connection', function (socket) {
    console.log('有客户端连接上来了');
    // 在服务器端可以获取到客户端的IP地址等信息
    console.log('客户端IP地址：' + socket.remoteAddress + '连接到了当前服务器');
    // 当前连接成功之后的向客户端发送一个hello world
    socket.write('hello world');
});
// 5. 服务器有一个事件叫做listening，表示开启监听成功之后回调处理函数
server.on('listening', function () {
    console.log('服务器开启监听成功了，正在等待客户端连接');
});
// 4. 启动服务器，开启监听
server.listen(3000, '127.0.0.1');