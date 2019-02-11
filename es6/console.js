

js-console


console.log() 该函数是同步的

var obj={
	foo: 123,
	child:{
		foo:'hello'
	}
}

console.log(obj);

console.log(JSON.stringify(obj));

obj.foo = 234;
obj.child.foo = 'xiaoxx';

console.log(obj);

console.log(JSON.stringify(obj));


chrome 控制台在输出会读取该值的快照，再显示的时候会再去读该地址的值。

所以在有时候会在控制台看到console是异步的效果，其实并不是只是显示的时候再重新去读取对象的值。
出现这种情况都是复杂类型的值(obj,arr);

可以采用JSON.stringify(obj); 避免这种情况