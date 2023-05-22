# golang流程控制

## if/else/else if

if条件中的变量可以在后续分支中使用，但不能在if分支外使用

## switch

语法:
```go
switch value {
    case value1:
    case value2:
    default:
}
```

多个表达式匹配一个case分支中的代码，可以使用`,`分隔匹配值，防止代码重复:
```go
case value1,value2,...:
```

> 注意case值的类型需要与swaitch值的类型一致。

> 可以省略switch语句的验证表达式，相当于验证真值。

> 与其他语言不同，golang会默认结束case，可以通过fallthrough进入紧邻的下一个case。


## for

语法:
```go
for m1;m2;m3 {
    body
}
```

- m1: 在第一次执行迭代前执行的语句/预处理语句
- m2: 在每次迭代前执行
- m3: 在每次迭代后执行


> 退出循环使用break关键字，继续下一次循环使用关键字continue


## golang特有的控制流

### defer函数

defer语句会推迟函数的执行，知道包含defer语句的函数执行完成

- 关闭文件
- 运行清理进程

> 可以有多个清理函数，并且清理函数按逆序执行，即先执行最后一个: 因为是将他们添加到后进先出队列中


### panic函数

panic函数可以停止golang程序的正常控制流，所有延迟函数都将正常执行。


### recover函数

在程序崩溃时在defer函数中调用，让你可以在程序崩溃之后重新获得控制权。


