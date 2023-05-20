# golang数据类型


## golang有四类数据类型

- 基本数据类型: 数字、字符串、布尔值
- 聚合类型: 数组和结构
- 引用类型: 指针、切片、映射、函数、通道
- 接口类型: 接口


## 整数数字

- int、int8、int16、int32、int64
- uint、uint8、uint16、uint32、uint64


## 浮点数字

- float32、float64


## 布尔值/bool

- true
- false

不能将布尔值`true/false`隐式转换为`0/1`


## 字符串/string


在golang使用双引号定义字符串，使用单引号定义字符

转义字符:
- `\n`: 新行
- `\r`: 回车符
- `\t`: 制表符
- `\'`: 单引号
- `\"`: 双引号
- `\\`: 反斜杠


## 变量默认初始值

- int[x]: 0
- float/float32: +0.000000e+000
- bool: false
- string: ""


## 类型转换

- 使用类型内置函数: 类型名
- 使用包strconv
