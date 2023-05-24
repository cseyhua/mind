# Promise异步

## promise状态

- pending
- fulfilled
- rejected

## 基本语法

```js
let promise = new Promise((resolve, rejected)=>{

    // 执行同步代码
    // 执行异步代码
    // 成功调用resolve
    // 失败调用rejected

})

// 绑定promise处理函数
promise.then((res)=>{
    // 成功回调
},(err)=>{
    // 失败回调
})

```

## 方法

- all
- race

