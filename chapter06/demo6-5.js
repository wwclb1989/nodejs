/**
 * 双向通信-服务器
 */
// 加载net模块
var net = require('net');
// 创建服务器
var server = net.createServer();
// 每一个客户端与服务器建立连接成功之后，都会触发一次connection事件
server.on('connection', function (socket) {
    /* 以下部分应用于双向通信 */
    // 通过监听socket对象的data事件来获取客户端发送给服务器的数据
    socket.on('data', function (data) {
        console.log(data.toString());
        socket.write('我吃的小豆包');
    });
});
server.listen(3000, '127.0.0.1', function () {
    console.log('server listening at port 3000');
});