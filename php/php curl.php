
<?php

	php curl

	CURL是一个非常强大的开源库，支持很多协议，包括HTTP、FTP、TELNET等，我们使用它来发送HTTP请求。它给我们带来的好处是可以通过灵活的选项设置不同的HTTP协议参数，并且支持HTTPS。CURL可以根据URL前缀是“HTTP” 还是“HTTPS”自动选择是否加密发送内容.


    1. curl init
	$ch = curl_init();
	curl_setopt($ch,CURLOPT_URL,'//www.baidu.com');
	curl_exec($ch);
	curl_close($ch);

	curl_setopt 设置选项

	CURLOPT_URL    // 设置请求的url
	CURLOPT_POST // 设置允许发送post请求,类型为application/x-www-form 数据表单提交格式
	CURLOPT_UPLOAD   //设置允许上传文件
	CURLOPT_HTTP_VERSION  // 设置请求的htpp版本
	CURLOPT_CONNECTTIMEOUT   //设置连接时间
	CURLOPT_INFILESIZE    // 限制上传文件大小
	CURLOPT_COOKIE       //发送cookies ，格式为 "username=xxx; pass=123132"
	CURLOPT_USERAGENT    //设置请求的用户头
	CURLOPT_HTTPHEADER    //设置http请求头
	CURLOPT_POSTFIELDS    //上传文件和设置发送数据 使用urlencode字符串"para1=val1&para2=val2"。也可以是发送一个数组。
	CURLOPT_HEADER    //设置的为true的时候会将resopse头跟数据一起输出

	curl_getinfo 获取返回消息的信息，将以数组的形式返回，比如url、content_type http_code headerSize

	2.php curl post 处理后端返回set-cookies

	$ch =  curl_init();

	curl_setopt($ch,CURLOPT_URL,'http://www.baidu.com');
	curl_setopt($ch,CURLOPT_POST,true);
	curl_setopt($ch,CURLOPT_COOKIE,$cookie);
	curl_setopt($ch,CURLOPT_POSTFIELDS,$param);
	curl_setopt($ch,CURL_HEADER,true)   --- 设置true的时候会返回resoponse头跟数据，false只会返回数据

	$ret = curl_exec($ch); 处理返回的数据

	$headersize = curl_getinfo($ch,CURLOPT_HEADER_SIZE);
	$ret_header = substr($ret,0,$headersize);
	preg_match('/Set-Cookie:(.*);/iU',$result_headers,$str);
	if($str){
	  header($str[0].' Path=/');  //输出cookies到浏览器保存
	 }

	curl_close($ch);
	unset($ch);

	3.php 处理cookies数据
	function getUserCookie(){
	  	$str = '';
	  	foreach ($_COOKIE as $key=>$value){
	  		if($key == 'ensessionid'){                  -- 只针对坑货的ews接口，不需要urlencode(ensessionid);其他cookies需要urlencode
	  			$str = $str.$key.'='.($value).';';
	  		}else{
	  			$str = $str.$key.'='.urlencode($value).';';
	  		}
	  	}
	  	return $str;
	}



?>