/*	全局作用域代码执行顺序：
*	1.变量提声：声明变量 => var a; var b; var c;
*	2.定义变量：赋值 => a = 12, b = 13, c = 14,
*/

var a = 12,
	b = 13,
	c = 14; //把全局c改为20
function fn(a) {
	/*	私有作用域代码执行顺序：
	*	1.形参赋值：a = 12;
	*	2.变量提声：var b; 声明变量为定义（赋值）undefined
	*/

	console.log(a, b, c); // => 12,undefined,14
	var b = c = a = 20;

	/*
	*	3.代码执行：
	*	var b = c = a = 20;
	*	var b = 20; b赋值为20；
	*		c = 20; 全局c修改为20
	*		a = 20; 把私有a修改为20
	*/

	console.log(a, b, c); // => 20,20,20
}
fn(a);
console.log(a, b, c); // => 12,13,20