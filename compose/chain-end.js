/*
 * @Author       : ymq
 * @Date         : 2022-08-26 11:02:39
 * @LastEditors  : Do not edit
 * @LastEditTime : 2022-08-26 12:15:04
 * @Description  : Do not edit
 * @FilePath     : \koa-compose-analysis\compose\chain-end.js
 */
// 500 节点
let order500 = (orderType, pay, stack) => {
  if (orderType === 1 && pay === true) {
    console.log("500元, 100券");
  } else {
    return "next";
  }
};

// 200 节点
let order200 = (orderType, pay, stack) => {
  if (orderType === 1 && pay === true) {
    console.log("500元, 100券");
  } else {
    return "next";
  }
};

// normal 节点 ( 终点 )
let normal = (orderType, pay, stack) => {
  if (stack > 0) {
    console.log("500元, 100券");
  } else {
    return "next";
  }
};

class Chain {
    constructor(fn) {
        this.fn = fn;
        this.nextFn = null;
    }

    setNext(fn) {
        this.nextFn = fn
    }

    execute() {
        const argu = arguments;
        let res = "";
        res = this.fn.apply(this, argu)
        if(res === 'next') {
            this.nextFn && this.nextFn.execute.apply(this.nextFn, arguments);
        }
        return res;
    }
}


