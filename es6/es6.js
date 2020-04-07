


// var temp = 123;

// const PI = undefined;


// const obj = Object.freeze({foo:123,obj1:{fun:123}});
// console.log(JSON.stringify(obj));
// var a = obj.obj1.fun;
// obj.obj1.fun = 232;
// obj.foo = 123;
// console.log(JSON.stringify(obj));

// console.log(a);
// try{
// 	console.log(temp);
// }catch(err){
// 	console.log(err);
// }

// function f(){
// 	console.log(temp);

// 	var temp = new Date().toString();
// 	console.log(temp);
// }
// f();

// (function(){
// 	console.log(temp1);
// 	var temp1=2334;
// 	console.log(temp1);
// })()

// // console.log(temp1);

// fun();
// function fun(){console.log(123);}

// var obj123 = {foo:123,obj1:{foo:123}};
// console.log(obj123);
// obj123.foo = 123123;
// obj123.obj1.foo =123124124;
// console.log(obj123);

// function fun(obj={}){
// 	console.log(obj);
// }


let set = new Set();

set.add(1);

set.add(2);

set.add(2);

set.add(undefined);

set.add(null);

set.add(NaN);

set.add(NaN);

console.log(set);

let set1 = new Set([1,2,3,4,5,6,7,2,5,3]);

console.log(set1);

console.log([...set1]);

console.log([...set]);

let set2 = new Set('hello word');

console.log([...set2]);

let a = new Set([1,2,3,4]);
let b = new Set([4,5,6,7]);

console.log(Array.from(new Set([1,2,3,4].concat([4,5,6,7]))));

console.log(Array.from(new Set([...a].filter(x => b.has(x)))));

console.log(Array.from(new Set([...a].filter(x => !b.has(x)))));