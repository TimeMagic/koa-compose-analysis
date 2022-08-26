/*
 * @Author       : ymq
 * @Date         : 2022-08-26 09:28:48
 * @LastEditors  : Do not edit
 * @LastEditTime : 2022-08-26 09:37:06
 * @Description  : Do not edit
 * @FilePath     : \koa-compose-analysis\compose\chuji-chain.js
 */
function order(orderType, pay, stock) {
    if(orderType === 1) {
        if (pay === true) {
            console.log("券100");
        } else {
            if (stock > 0) {
                console.log("买,无券");
            } else {
                console.log("无库存");
            }
        }
    } else if(orderType === 2) {
        if (pay === true) {
            console.log("券50");
        } else {
            if (stock > 0) {
                console.log("买,无券");
            } else {
                console.log("无库存");
            }
        }
    } else if(orderType === 3) {
        if (stock > 0) {
            console.log("买,无券");
        } else {
            console.log("无库存");
        }
    }
}

module.exports = {
    order
}