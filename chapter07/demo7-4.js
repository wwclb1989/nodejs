/**
 * 动态处理静态资源请求
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer();

server.on('request', function (request, response) {
    var url = request.url;
    console.log(url);
    var fullPath = path.join(__dirname, 'static', url);

    if (url === '/') {
        fullPath = path.join(__dirname, '/static/index.html');
    }

    fs.readFile(fullPath, function (err, data) {
        if (err) {
            // 在进行web开发的时候，如果发生了错误，我们可以直接把该错误消息输出到客户端
            return response.end(err.message);
        }
        response.end(data);
    });
});

server.listen(3000, function () {
    console.log('server is running at port 3000');
});