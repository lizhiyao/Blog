var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;


// 通过new Db()创建了一个数据库连接实例，并通过module.exports导出该实例
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), { safe: true });