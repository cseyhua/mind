# golang中定义变量

## 函数外部使用`var`

定义多个变量并初始化

```go
var firstName,lastName = "Value1", "Value2"
```

```go
var (
    firstName [string] = "Value1"
    lastName [string] = "Value2"
    age [int] = 23
)
```

```go
var firstName, lastName [string] = "Value1", "Value2"
```

在定义时对变量同时进行初始化可以不指定变量类型，golang会自行推导


## 在函数内部可以使用`:=`

`:=`只能在函数内部使用，在函数外部不能使用，作用是定义并初始化变量

## 常量的定义

常量只能使用`var`关键字进行定义，并且是大写开头
