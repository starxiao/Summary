
<?php 
	
	php 处理时间

	1. time() --返回时间戳，精确到秒
	2. date(format,时间戳)  --格式化时间
	3. strtotime(str)    --将字符时间转化为时间戳
	4. date_create(str)  --建立一个时间对象
	5. date_format(obj,format)  obj 必须是date_create创建的对象。

	echo date('Y',time());  --返回4位的年
	echo date('m',time());  --返回月份01-12
	echo date('d',time());  --返回天数
	echo date('H',time());   --返回小时 00-23
	echo date('i',time());   --返回分钟 00-59
	echo date('s',time());   --返回秒  00-59
	echo date('Y-m-d H:i:s',time());  --格式化输出字符串
	echo date('Y/m/d H:i:s',time());
	echo date('m/d/Y H:i:s',time());
	echo date('d-m-Y H:i:s',time());

	echo strtotime('now');  --返回当前时间戳跟time()是相同的
	echo strtotime('10/17/2017 12:23:31'); --返回规定的时间的时间戳
	echo strtotime('2017/10/17 12:23:31');

	$date = date_create('2017-10-17 12:12:12');  --创建一个时间对象
	echo date_format($date,'Y-m-d H:i:s');   --格式化时间

?>