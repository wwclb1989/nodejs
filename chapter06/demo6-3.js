/**
 * 服务器端统计在线人数
 */
// 1. 加载net核心模块
var net = require('net');
// 2. 创建一个服务应用程序，得到一个服务器实例对象
var server = net.createServer();
var count = 0;

// 3. 监听客户端的连接事件，连接成功就会执行回调处理函数
server.on('connection', function (socket) {
    count++;
    console.log('welcome, 当前在线人数：' + count);
    socket.write('remoteAddress' + socket.remoteAddress + '\n');
    socket.write('remotePort' + socket.remotePort);
});

server.listen(3000, '127.0.0.1', function () {
    console.log('server listening at port 3000');
});