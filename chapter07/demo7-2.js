var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {

    var url = request.url;

    if (url === '/') {
        response.end('hello index');
    } else if (url === '/login') {
        response.end('hello login');
    } else if (url === '/register') {
        response.end('hello register');
    } else {
        response.end('404 Not Found!');
    }
});

// 开启启动，监听端口
server.listen(3000, function () {
    console.log('server is listening at port 3000');
});