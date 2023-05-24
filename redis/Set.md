# Set集合

Redis集是一个无序的唯一字符串（成员）的集合。你可以使用Redis集来有效地：

1、追踪唯一的项目（例如，追踪访问某篇博客文章的所有唯一IP地址）。
2、表示关系（例如，具有特定角色的所有用户的集合）。
3、执行常见的集合操作，如相交、联合和差异。

> 一个Redis集的最大尺寸是2^32 - 1 (4,294,967,295)个成员。

## 命令

- sadd key value
- sismember key value: 检查值是否在集合中
- sinter key key: 交集
- scard key: 统计数量
- srem key value: 移除集合成员


