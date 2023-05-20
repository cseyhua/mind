# golang的模块与包

一个模块可以包含很多包

可以使用命令`go mod init module_name`创建一个模块

## 使用本地模块

在go.mod文件中修改模块路径使用`replace remote_url => local_url`

### 发布自己的包

## 引用外部包

依赖的包将放在go.mod文件的require字段中，格式为:
```go
require (
    module_url version
)
```
