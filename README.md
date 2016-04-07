# 安装Express

安装 Express

    npm install -g express
    
通过Express应用生成器工具，可以快速创建一个express应用的骨架。    
    
    npm install express-generator -g
    
-h 选项可以列出所有可用的命令行选项

    express -h
    
---
    
# 新建一个项目

## 选择一个工作目录

    express -e blog
    cd blog
    npm install
    
##　启动应用

MacOS 或 Linux 平台

　　DEBUG=blog npm start

Windows 平台

　　set DEBUG=blog & npm start

---

# MongoDB简介

MongoDB是一个基于分布式文件存储的非关系型数据库（NoSQL）的一种，由C++语言编写，
旨在为Web应用提供可扩展的高性能数据存储解决方案。

MongoDB支持的数据结构非常松散，是类似json的bjson格式，因此可以存储比较复杂的数据类型。

MongoDB最大的特点就是它支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，
几乎可以实现类似关系型数据库的绝大部分功能，而且还支持对数据建立索引。

MongoDB没有关系数据库中行和表的概念，不过有类似文档和集合的概念。
文档是MongoDB最基本的单位，每个文档都会有唯一的_id，文档的属性为key/value的键值对形式，
文档内可以嵌套另一个文档。集合是许多文档的综合，一个数据库可以有多个集合。

---

# 安装MongoDB




