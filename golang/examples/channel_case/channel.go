package channelcase

import "fmt"

// 携程间通信
func Communication() {
	ch := make(chan int)
	go communicationF1(ch)
	go communicationF2(ch)
}

func communicationF1(ch chan<- int) {
	// 只写通道
	for i := 0; i < 10; i++ {
		ch <- i
	}
}

func communicationF2(ch <-chan int) {
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}
}

// 并发场景下同步机制
func ConcurrentSync() {
	ch := make(chan int, 3)
	go concurrentsyncF1(ch)
	go concurrentsyncF2(ch)
	go func() {
		for i := range ch {
			fmt.Println(i)
		}
	}()

}

func concurrentsyncF1(ch chan<- int) {
	for i := 0; i < 10; i++ {
		ch <- i
	}
}

func concurrentsyncF2(ch chan<- int) {
	for i := 0; i < 10; i++ {
		ch <- i
	}
}

// 多路复用
