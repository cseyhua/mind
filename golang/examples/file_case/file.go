package filecase

import (
	"log"
	"os"
)

const sourceDir = "/home/yhua/WorkSpaces/mind/golang/"

const destDir = "/home/yhua/WorkSpaces/mind/golang/examples/file_case"

func getFiles(dir string) []string {
	fs, err := os.ReadDir(dir)
	if err != nil {
		log.Fatal(err)
	}
	list := make([]string, 0)
	for _, f := range fs {
		if f.IsDir() {
			continue
		}
		fullName := dir + f.Name()
		list = append(list, fullName)
	}
	return list
}
