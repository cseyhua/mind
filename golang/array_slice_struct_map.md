# golang中数组

## 定义与初始化数组

```
var arr [3]int
arr := [3]int{1,2,3}
arr := [...]int{1,2,3}
arr := [...]int{2:3}

var arr [3][4]int
```

## 切片

表示一系列类型相同的元素，大小是动态的，不是固定的。

切片对应一个基础数组，切片长度表示可访问大小，容量表示可扩展大小

> 当切片容量不够时，会自动翻倍创建一个新的翻倍的基础数组

> 由于切片是基于基础数组的，因此修改会对基础数组和基于相同基础数组的其他切片造成影响，我们可以通过创建切片副本取消这种影响。

```go
slice := make([]string,3)

copy(slice, src[])
```


## 映射

映射中所有键都必须具有相同的类型，值也一样

语法:
```go
// initial
m := map[key_type]value_type{}
// or
m := make(map[key_type]value_type)
```

### 添加

```go
m[key]=value
```

### 访问

```go
value, ok := m[key]
```

### 删除

```go
delete(m,key)
```

### 循环

```go
for key,value := range m {}
```

## 结构

语法:
```go
type Name struct {
    key type
}
```

### json编解码

```go
type Person struct {
    ID        int    
    FirstName string `json:"name"`
    LastName  string
    Address   string `json:"address,omitempty"`
}
```

- 使用json.Marshal函数编码
- 使用json.UnMarshal解码

