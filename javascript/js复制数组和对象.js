

js 复制数组和对象


js中的复制存在两个概念: 深拷贝和浅拷贝。

对基本类型变量，浅拷贝是对值的拷贝，没有深拷贝的概念。

对于引用类型变量，浅拷贝是对对象引用值的copy。深拷贝是创建新的地址内存空间存储值

引用指的是当你改变新引用类型的值的时候，源引用类型的值相应的也会发生改变。


浅拷贝:

let arr = [1,23];

let arr1 = arr;   --- 浅拷贝

arr1[0] = 123456;

arr ===> [123456,23];   arr1 ===> [123456,23];




let arr = [1,[23,345]];
let arr2 = arr.slice(); || let arr2 = arr.concat(); || let arr2 = arr.map(function(item){return item}); || let arr2 = [... arr];

arr2[0] = 'wew'; arr2[1][0] = 'qwe';

arr = [1,['qwe',345]];  arr2 = ['wew',['qwe',345]];  ---  只会改变一维的值。属于浅拷贝


深拷贝:


let arr = [1,[123,456]];

let arr1 = JSON.parse(JSON.stringify(arr));

function arrayCopy(arr){
	if(Object.prototype.toString.call(arr).slice(8,-1).toLowerCase() != 'array'){
		return arr;
	}
	let targetArr = [];
	arr.forEach(function(val,index){
		targetArr[index] = arrayCopy(val);
	});
	return targetArr;
}

对象的浅拷贝

let obj = {a:1,b:{c:2}};
let obj1 = obj;

obj1.a = 'qwe';

obj ==> {a: 'qwe',b:{c:2}};  obj1 ==> {a: 'qwe',b:{c:2}};

let obj1 = Object.assign({},obj);   -- 只复制一维   这跟Object.assign(obj)是不一样的,Object.assign(obj) 相当于赋值(=) 

obj1.a = 'iop'; obj1.b.c = 123;

obj ==> {a:1, b:{c:123}}     obj1 ==> {a:'iop',b:{c:123}}

let original = {a: 1, b: {d: 3}}; 
let copy = {...original,c: {d: 324}};

copy.b.d = '213';        original.b.d = '213'  //说明 ...也是浅拷贝

function shallowClone(source){
	var target = {};
	for(var i in source){
		if(source.hasOwnProperty(i)){
			target[i] = source[i];
		}
	}
	return target;
}


深拷贝

let obj = {a:12,b:{23}};

let obj1 = JSON.parse(JSON.stringify(obj));    -- 这种方法不能复制对象的函数


function objCopy(obj){
	if(!obj || typeof obj != 'object'){
		return obj;
	}

	let targetObj = Object.prototype.toString.call(obj).slice(8,-1).toLowerCase() === 'array' ? [] : {};

	for(let key in obj){
		targetObj[key] = objCopy(obj[key]);
	}
	return targetObj;
}



