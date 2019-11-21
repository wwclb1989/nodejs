/**
 * 使用HTTP提供静态资源服务
 */
var http = require('http');
var fs = require('fs');      // 用于读取静态资源
var path = require('path');
var server = http.createServer();

server.on('request', function (request, response) {
    // 读取静态资源路径
    var url = request.url;
    if (url === '/') {
        // 读取相应静态资源内容
        fs.readFile(path.join(__dirname, 'static/index.html'), 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            // 将读取的静态资源数据响应给浏览器
            response.end(data);
        });
    } else if (url === '/login') {
        fs.readFile(path.join(__dirname, 'static/login.html'), 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else if (url === '/register') {
        fs.readFile(path.join(__dirname, 'static/register.html'), 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else if (url === '/css/main.css') {
        fs.readFile(path.join(__dirname, 'static/css/main.css'), 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else if (url === '/images/01.jpg') {
        fs.readFile(path.join(__dirname, 'static/images/01.jpg'), function (err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else {
        fs.readFile(path.join(__dirname, 'static/404.html'), 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    }
});

server.listen(3000, function () {
    console.log('server is listening at port 3000;')
});