/**
 * 模拟接口 服务
 * 
 * 
*/

// 引入express
const express = require('express');

const mock = require('./mock/mock.js');
const {logZ} = require('./logStyle/index.js');
const post = 3000


// 创建服务对象
const app = express()

// user监听路由
app.get('/user', (req, res) => { 
    console.log(mock.userInfo)
    res.end(JSON.stringify(mock.userInfo));
})

// home监听路由
app.get('/home', (req, res) => { 
    res.end(JSON.stringify(mock.home));
})

// 监听路由

/**
 *  __dirname  当前模块的目录名。 相当于 __filename 的 path.dirname()。
*   console.log(__dirname);
        // 打印: E:\my-perjet\mock
        console.log(path.dirname(__filename));
        // 打印: E:\my-perjet\mock
 * */ 
app.get('/index', (req, res) => { 
    res.sendFile(__dirname+"/"+"package.json") 
})


/**
 * Express 托管静态文件
 * express.static(root, [options]) 
 * */ 
app.use(express.static('public'))  

app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname+"/public/view/"+"404.html")
})


app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).sendFile(__dirname+"/public/view/"+"500.html")
})


// 开启服务
app.listen(post,() =>{
    logZ() // 控制台打印的样式
    console.log(`\x1b[1;35m 服务已启动! (^_−)☆ \x1b[32m  监听${post}端口!\x1b[0m`)
})