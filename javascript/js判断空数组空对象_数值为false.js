
js 判断空数组和空对象

1. 判断空数组

	ajax 返回数据判断
	return obj.data && obj.data.length !=0;   先判断data是否存在，再判断数组长度是否等于0

	全局 数组判断
	return window.arr && window.arr.length !=0; 

	JSON.stringify([]) === '[]';


2. 判断空对象
	function isEmptyObj(obj){
		if(Object.keys){
		    return Object.keys(obj).length !=0;     ie9以上支持
		}else{
		    return JSON.stringify(obj) === '{}';    
		}
	}

3. js if语句为false的六种情况

	false +0 -0 null undefined NaN ''