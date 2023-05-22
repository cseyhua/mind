package interfacecase

type Animal interface {
	Eat()
	Run()
}

type Dog struct {
}

func NewDog() Animal {
	return &Dog{}
}

func (dog *Dog) Eat() {}

func (dog *Dog) Run() {}
