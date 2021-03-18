# toggle-router-abort-request
切换路由时，取消之前的请求

原理分析：
```js
const cancelReason = 'cancelReason'

// 利用 Promise.race 来做取消请求的操作
// 每当发起一个请求，就生成另一个 Promise 用于取消请求，也就是让这个 Promise 提前 resolve
// 这样发起的请求就无效了
function race(p1) {
    const result = {}
    const p2 = new Promise((resolve, reject) => {
        result.resolve = resolve
        result.reject = reject
    })

    result.promise = Promise.race([p1, p2])
    return result
}

const p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('执行完毕')
    }, 2000)
})

const obj = race(p1)

const resolve = (val) => {
    if (val == cancelReason) {
        console.log('取消请求')
    }

    console.log(`返回请求结果：${val}`)
    return val
}

const reject = (val) => {
    if (val == cancelReason) {
        console.log('取消请求')
    }

    console.log(`返回请求结果：${val}`)
    return val
}

obj.promise.then(resolve, reject).then(res => {
    console.log('------')
    console.log(res)
})

function leavePage(reason) {
    obj.resolve(reason)
}

// 模仿跳页取消请求操作
setTimeout(() => {
    leavePage(cancelReason)
}, 1000)
```
参考资料：
* [axios切换路由取消指定请求与取消重复请求并存方案](https://juejin.im/post/6844903905625653262)
