/*
 * @Author       : ymq
 * @Date         : 2022-08-26 09:37:32
 * @LastEditors  : Do not edit
 * @LastEditTime : 2022-08-26 10:10:03
 * @Description  : Do not edit
 * @FilePath     : \koa-compose-analysis\compose\zhongji-chain.js
 */
// 这种扩展性也是可以的有点工厂模型的意思了，不用管内部怎么生成，输出内容

let order500 = (orderType, pay, stock) => {
  if (orderType === 1) {
    if (pay === true) {
      console.log("券100");
    } else {
      if (stock > 0) {
        console.log("买,无券");
      } else {
        console.log("无库存");
      }
    }
  }
};

let order200 = (orderType, pay, stock) => {
  if (orderType === 2) {
    if (pay === true) {
      console.log("券50");
    } else {
      if (stock > 0) {
        console.log("买,无券");
      } else {
        console.log("无库存");
      }
    }
  }
};

let order = (orderType, pay, stock) => {
  if (orderType === 3) {
    if (stock > 0) {
      console.log("买,无券");
    } else {
      console.log("无库存");
    }
  }
};

function payFn(orderType, pay, stock) {
  if (orderType === 1) {
    order500(orderType, pay, stock);
  } else if (orderType === 2) {
    order200(orderType, pay, stock);
  } else if (orderType === 3) {
    order(orderType, pay, stock);
  }
}

module.exports = {
    order: payFn
}