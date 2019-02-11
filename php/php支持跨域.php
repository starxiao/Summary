
<?php
	
	php 支持跨域


	1.因为浏览器存在同源策略的问题，所以存在跨域的问题。

	2.同源策略： 同源策略限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。

	3.同源的定义:如果协议，端口（如果指定了一个）和域名对于两个页面是相同的，则两个页面具有相同的源。

	4.同源具体例子

	http://api.xiaoxx.com/index.html href = http://(协议、protocol) + api.xiaoxx.com(域名、hostname) + :80(端口、port,80端口默认不显示) + path

	http://api.xiaoxx.com/path/index.php 同源

	https://api.xiaoxx.com/index.php 协议不同，不同源

	http://boss.xiaoxx.com/path/index.html 域名不同，不同源

	http://api.xiaoxx.com:8080/index.html 端口不同，不同源

	5.前端可以跨域的标签

	<script src=''></script>

	<link rel='stylesheet' href=''>

	<img src='img'>   

	<iframe> </iframe>

	6.跨域访问

	jsonp ，需要前后端一起配合，请求方法只能是GET，数据是在URL。Cookie在服务端也能接收到。

	CORS（cross origin resource sharing） 跨域资源共享.需要前后端一起配合

	Access-Control-Allow-Origin: url | '*'

	origin 参数的值指定了允许访问该资源的外域 URI。对于不需要携带身份凭证(比如cookies)的请求，服务器可以指定该字段的值为通配符，表示允许来自所有域的请求。

	Access-Control-Allow-Credentials: true | false 指定了当浏览器的credentials设置为true时是否允许浏览器读取response的内容。如果没有设置，则浏览器不会显示response的内容

	Access-Control-Expose-Headers: X-my-header

	在跨域访问时，XMLHttpRequest对象的getResponseHeader()方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。

	前端 使用XMLHttpRequest对象

	var xhr  = new XMLHttpRequest();
	    xhr.open('GET','http://api.xiaoxx.com/api.php');跨域请求
	    xhr.withCredentials = true;     // 将cookie或者身份信息发送到服务端
	    xhr.send();

	 XMLHttpRequest.withCredentials 属性是一个Boolean类型，它指示了是否该使用类似cookies,authorization headers(头部授权)或者TLS客户端证书这一类资格证书来创建一个跨站点访问控制（cross-site Access-Control）请求。在同一个站点下使用withCredentials属性是无效的。此外，这个指示也会被用做响应中cookies 被忽视的标示。默认值是false。
	 
	 
	如果在发送来自其他域的XMLHttpRequest请求之前，未设置withCredentials 为true，那么就不能为它自己的域设置cookie值。而通过设置withCredentials 为true获得的第三方cookies，将会依旧享受同源策略，因此不能被通过document.cookie或者从头部相应请求的脚本等访问。

	 $.ajax({
	      url: 'http://api.xiaoxx.com/api.php',
	      type: 'get',
	      data: {username:'xiaoxx'},
	      dataType:'json',
	      xhrFields:{withCredentials : true},  //设置将cookie等身份信息发送到服务端。 >= jquery 1.5
	      success:function(data){console.log(data)}
	 })
	3.php端CORS 设置多个域名

	$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

	$allow_origin = array(
	    $_SERVER['M_Url'],
	    $_SERVER['Www_Url']
	);

	if(in_array($origin, $allow_origin)){
	    header('Access-Control-Allow-Origin:'.$origin);
	    header("Access-Control-Allow-Credentials: true");
	}

?>