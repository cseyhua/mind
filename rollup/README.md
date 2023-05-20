# Rollup

## 概念

- 最小化混淆工具

## 使用

```
rollup --config rollup.config.ts --configPlugin typescript
```

```
rollup --config config_file_path
// config_file_path没有指定文件时会使用默认的
// rollup.config.mjs => .cjs => .js
```

## 与其他工具集成时使用`Javascript API`

`rollup.rollup`只能接受一个`inputOptions`对象，其他都不行，必须为每个运行一次此函数

`output`选项在`rollup.rollup`输入配置中被忽略，必须为每个`outputOptions`运行一个`bundle.generate`或`bundle.write`函数
