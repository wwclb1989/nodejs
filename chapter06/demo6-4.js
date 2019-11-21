/**
 * 双向通信-客户端
 */
var net = require('net');
// 当调用createConnection之后，就会得到一个与服务器进行通信的socket对象
// 该对象中包含当前客户端与服务器通信的IP地址和端口号
var client = net.createConnection({
    port: 3000
});
// 什么时候客户端和服务器连接成功了
// 可以通过监听client的connect事件来处理
client.on('connect', function () {
    // 客户端与服务器连接成功了
    console.log('客户端与服务器连接成功了');
    client.write('你吃了吗？');
});
client.on('data', function (data) {
    // 输出服务器发送给当前客户端的数据
    console.log(data.toString())
});