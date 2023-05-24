# List列表

Redis 列表是字符串值的链接列表。Redis列表经常被用来：

1、实现堆栈和队列。
2、为后台工作者系统建立队列管理。

> Redis列表的最大长度是2^32-1（4,294,967,295）个元素。
> 通过实践，后进入的id越小

## 实现队列/先进先出
```sh
> LPUSH work:queue:ids 101
(integer) 1
> LPUSH work:queue:ids 237
(integer) 2
> RPOP work:queue:ids
"101"
> RPOP work:queue:ids
"237"
```

## 实现栈/后进先出
```sh
> LPUSH work:queue:ids 101
(integer) 1
> LPUSH work:queue:ids 237
(integer) 2
> LPOP work:queue:ids
"237"
> LPOP work:queue:ids
"101"
```

## 其他命令

1、llen
2、lmove src dst os od
3、lpush、rpush
4、lpop、rpop: 会返回元素
5、ltrim
6、blpop: 从一个列表的头部删除并返回一个元素。如果列表是空的，该命令就会阻塞，直到有元素可用或达到指定的超时。
7、blmove: 原子地将源列表中的元素移动到目标列表中。如果源列表是空的，该命令将阻塞，直到有新的元素出现。