/*
 * @Author       : ymq
 * @Date         : 2022-08-26 09:51:57
 * @LastEditors  : Do not edit
 * @LastEditTime : 2022-08-26 10:10:08
 * @Description  : Do not edit
 * @FilePath     : \koa-compose-analysis\compose\cj-chain.js
 */
// 简单的责任链模式
// 这依然是违反开放封闭原则的，如果有天我们要增加 300 元预订或者去掉 200 元预订，意味着就必须改动这些业务函数内部。就像一根环环相扣打了死结的链条，如果要增加、拆除或者移动一个节点，就必须得先砸烂这根链条。

let order500 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log("券100");
  } else {
    order200(orderType, pay, stock);
  }
};

let order200 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log("券50");
  } else {
    order(orderType, pay, stock);
  }
};

let order = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log("买,无券");
  } else {
    console.log("无库存");
  }
};

module.exports = {
    order500
}