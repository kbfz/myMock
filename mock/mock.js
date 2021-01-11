/**
 * mock 接口
 * 
 * */ 

const  Mock = require('mockjs');

// 首页信息
let home = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5-20': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name|1-20':1,
        'age|20-50':30 
    }]
})

// 用户信息
let userInfo = Mock.mock({
    'list|5-20': [{
        'id|+1': 1,
        'name|1-20':1
    }]
})

module.exports = {
    home,
    userInfo
}