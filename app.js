var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// express框架严重依赖connect框架（一个node.js的中间件框架）创建而成的

// view engine setup
// 设置views文件夹为存放视图文件的目录，__dirname为全局变量，存储当前正在执行的脚本所在的目录
app.set('views', path.join(__dirname, 'views'));

// 设置视图模板引擎为ejs
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// connect內建的中间件
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// connect內建的中间件，在开发环境中使用，在终端显示简单的日志
app.use(logger('dev'));

// connect內建的中间件，用来解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// connect內建的中间件，将根目录public文件夹设置为存放静态文件的目录
app.use(express.static(path.join(__dirname, 'public')));

// 控制路由，如果访问/（主页），则由routes来处理
// 在app.js中只有一个总的路由接口，路由控制器和实现路由的功能函数都放到index.js里
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler 开发环境错误处理
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler 生产环境错误处理
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
