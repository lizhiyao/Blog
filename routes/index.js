var express = require('express');
var router = express.Router();


// 首页
// 当访问主页时，调用ejs模板引擎来渲染index.ejs模板文件，生成静态页面并返回给浏览器
router.get('/', function(req, res, next) {
    res.render('index', { title: '主页' });
});

// 注册
router.get('/register', function(req, res) {
    res.render('register', { title: '注册' });
});

router.post('/register', function (req, res) {
    
});

// 登录
router.get('/login', function(req, res) {
    res.render('login', { title: '登录' });
});

router.post('/login', function (req, res) {
    
});

// 文章
router.get('/post', function(req, res) {
    res.render('post', { title: '发表' });
});

router.post('/post', function (req, res) {
    
});

// 登出
router.get('/logout', function(req, res) {
    
});

module.exports = router;
