 # 文件操作

 1、一次复制
 
 2、创建文件并写入
 
 3、分片读取与写入
 
 4、按行读取
a、小文件直接全部读取通过strings.Split分割
b、大文件通过bufio提供的NewReader读取
c、通过bufio的NewScanner