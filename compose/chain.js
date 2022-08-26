/*
 * @Author       : ymq
 * @Date         : 2022-08-26 09:23:01
 * @LastEditors  : Do not edit
 * @LastEditTime : 2022-08-26 10:06:52
 * @Description  : Do not edit
 * @FilePath     : \koa-compose-analysis\compose\chain.js
 */
// chain of resposity pattern  也是以一种避免if else 的情况，对于执行扩展更加清晰。

var chain = require("./chuji-chain")
var zjChain = require("./zhongji-chain")
var cjChain = require("./cj-chain")

console.log("chain start")

chain.order(1, true, 100)

zjChain.order(2, true, 100)

cjChain.order500(2, true, 100)









