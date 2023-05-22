package defercase

import "fmt"

func DeferCase() {
	fmt.Println("函数开始执行")
	i := 1
	defer func(j int) {
		fmt.Println("Defer函数参数: j=", j)
	}(i)
	i += 1
	defer func() {
		fmt.Println("Defer函数闭包: i=", i)
	}()
	fmt.Println("函数执行结束")
}

func ExceptionHandleCase() {
	defer func() {
		err := recover()
		if err != nil {
			fmt.Println("捕获异常，进行处理", err)
		}
	}()

	fmt.Println("函数可能会抛出异常")
	panic("函数发生异常")
	// fmt.Println("函数没有发生异常")
}
