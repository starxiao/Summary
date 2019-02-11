


// var temp = 123;

const PI = undefined;


const obj = Object.freeze({foo:123,obj1:{fun:123}});
console.log(JSON.stringify(obj));
var a = obj.obj1.fun;
obj.obj1.fun = 232;
obj.foo = 123;
console.log(JSON.stringify(obj));

console.log(a);
try{
	console.log(temp);
}catch(err){
	console.log(err);
}

function f(){

	console.log(temp);

	var temp = new Date().toString();
	console.log(temp);


}
f();

(function(){
	console.log(temp1);
	var temp1=2334;
	console.log(temp1);
})()

// console.log(temp1);

fun();
function fun(){console.log(123);}

var obj123 = {foo:123,obj1:{foo:123}};
console.log(obj123);
obj123.foo = 123123;
obj123.obj1.foo =123124124;
console.log(obj123);



function fun(obj={}){

	console.log(obj);
}
