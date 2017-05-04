export class ActionOption { 
	driver:    string // driver namespace
	action:    string // action namespace
	outputVar: string // 定义输出结果存储的变量名
	input:     Map<string,any>
}