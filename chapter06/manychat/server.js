/**
 * 多人广播聊天服务器端
 */
var net = require('net');
var server = net.createServer();

var users = [];
server.on('connection', function (socket) {
    users.push(socket);
    socket.on('data', function (data) {
        data = data.toString().trim();
        users.forEach(function (client) {
            if (client !== socket) {
                client.write(client.remotePort + ':' + data)
            }
        });
    });

    // 当有客户端异常退出时，就会触发该函数
    // 如果不监听客户端异常退出就会导致服务器崩溃
    socket.on('error', function () {
        console.log('有客户端异常退出了');
    });

});

server.listen(3000, '127.0.0.1', function () {
    console.log('server listening at port 3000');
});

