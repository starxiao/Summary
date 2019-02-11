
<?php

	php smarty模板


	smarty 语句

		1. 变量显示，通常在smarty下都是以{}的形式显示的，比如{$foo}，{$foo['bar']}，{$foo->getUsername()}等等。都是以$开头的，跟php的变量类似。
		2. smarty语句尽量是显示相关的，一般复杂的计算逻辑要在PHP中完成。

	smarty 变量

		* 从php获的变量
	$this->assign('username','xiaoxx');


	在smarty中
	<h1><!--{$username}--></h1>
		* 通过.号和[]获取数组的值，通过->获取对象的属性和方法。
	<!--{$arr.username}-->
	<!--{$obj->username}-->
		* 可以通过访问php的环境变量，比如$GET,$POST,$COOKIE,$SERVER,$ENV,$SESSION
	<!--{$smarty.get.username}-->
	<!--{$smarty.server.SERVER_NAME}-->
	<!--{$smarty.cookies.language}-->
	<!--{$smarty.env.path}-->
	<!--{$smarty.now}--> //获取时间
	<!--{$smarty.const}--> //间接获取php的常量

	smarty变量修饰器
		* smarty变量修饰器用于变量、自定义函数或者字符串。主要是对变量进行改变，类似正则表达式。使用修饰器，需要在变量后面添加|，有参数的时候需要添加:进行隔离
	<!--{$article|capitalize} //将变量的第一个字母大写
	<!--{$article|cat:'yesterday'} //连接字符

	smarty内置函数
		* smarty内置函数都是类似于PHP的原生函数，所以逻辑问题都应该放在PHP中处理就好，smarty模版负责显示。


?>



