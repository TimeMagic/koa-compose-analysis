/*
 * @Author       : ymq
 * @Date         : 2022-08-25 11:22:05
 * @LastEditors  : Do not edit
 * @LastEditTime : 2022-08-25 16:03:44
 * @Description  : Do not edit
 * @FilePath     : \koa-compose-analysis\compose\my-compose.js
 */
function compose (middlewave) {
    // middlewave
    if(!(middlewave instanceof Array)) {
        throw new Error("middlewave is not array")
    }
    const len = middlewave.length;
    for(let i = 0; i < len; i++) {
        const fn = middlewave[i]
        if(!(fn instanceof Function)) {
            throw new Error("middlewave has no function!")
        }
    }
    return function(content, next) {
        console.log("*******")
        let index = -1;
        return dipatch(0);
        // 递归迭代 类似 tree 只不过通过  index 来递归，来达到 index 递增的作用。
        // 初始给一个 -1 作为递归的开始。
    
        function dipatch(i) {
            index = i;
            const fn = middlewave[index];
            if (!fn) return Promise.resolve(new Error('end!'));
            return Promise.resolve(fn(content, dipatch.bind(null, index + 1)));
        }
    }
}

// 任务列表
const middlewave = []

middlewave.push(async (content, next) => {
    console.log("1")
    await next();
    console.log("1----1")
})

middlewave.push(async (content, next) => {
    console.log("2")
    await next();
    console.log("2----2")
})


middlewave.push(async (content, next) => {
    console.log("3")
    try {
        const res = await next();
        console.log(res)
        console.log("******* --------------");;
    } catch(err) {
        console.log(err)
        console.log('******** err *********');
    }
    console.log("3----3")
})

// 任务 1. 先注册中间件
const task = compose(middlewave);
// 2. 执行任务, {} 为 content 上下文, 通过koa在包装一层包content传递进来。
task({})

// class Koa {
//     constructor() {
//         this.taskList = [];
//         this.content = {
//             app: "koa 框架应用!"
//         };
//     }

//     use(fn) {
//         this.taskList.push(fn)
//     }

//     execute() {
//         // 执行中间件
//         compose(this.taskList)(this.content)
//     }

//     req() {
//         // 请求报文
//     }

//     res() {
//         // 响应报文
//     }
    
//     listen(port, fn) {
//         // start server
//         // http.server(req, res) {
//         //      req()   
//         //      执行中间件
//         //      放到每次http 请求的地方 this.execute();
//         //      this.execute();
//         //      res();
//         // }
//         // fn()
//     }
// }

// const app = new Koa();

// app.use(async (ctx, next) => {
//     // jwt
//     console.log(ctx);
//     await next();
// })

// app.use(async (ctx, next) => {
//     // log
//     console.log(ctx);
//     await next();
// })

// app.use(async (ctx, next) => {
//     // middlewave
//     console.log(ctx);
//     await next();
// })

// app.listen(3000, () => {
//     console.log("PROT 3000 is running!")
// });
