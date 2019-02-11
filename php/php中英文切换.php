
<?php

	php支持中英文切换

	php实现中英文切换的主要原理就是准备两套语言包。通过url的切换，实现加载相应的语言包从而渲染对应的模版。

	获取用户设置的语言(默认中文)
	function getUserSetLanguage ($language = ''){
		$lang_arr = array('en-us','zh-cn');
		if($language!='' && in_array($language,$lang_arr)){//用户手动设置语言
			setcookie("language",$language,null,'/',getdomain());
			return $language;
		}
		$language = 'zh-cn';
		if(isset($_COOKIE['language']) && in_array($_COOKIE['language'],$lang_arr)){
			$language = $_COOKIE['language'];
		}else{
			//获取浏览器设置的语言项
			$server_lang = strtolower(substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 5));
			if (!in_array($server_lang,$lang_arr)) {
				$language = 'zh-cn';
			}
			setcookie("language",$language,null,'/',getdomain());
		}
		return $language;
	}

	//加载公共语言包
	function getCommonLanguageInfo (){
		$language = getUserSetLanguage ();
		//加载语言包
		include_once ($_SERVER["Root_Path"] . "/html/languages/".$language."/interface_code.php");
		include_once ($_SERVER["Root_Path"] . "/html/languages/".$language."/common.php");
		return $_LANG;
	}

	//加载公共JS语言包
	function getCommonJSLanguageInfo (){
		$language = getUserSetLanguage ();
		//加载语言包
		include_once ($_SERVER["Root_Path"] . "/html/languages/".$language."/js/common.php");
		return $_JSLANG;
	}

	//加载单页面语言包
	function getPageLanguageinfo ($controller,$action){
		$language = getUserSetLanguage ();
		//加载语言包
		$lang_url = $_SERVER["Root_Path"] . "/html/languages/".$language."/".$controller."/".$action.".php";
		if(file_exists($lang_url)){
			include_once ($lang_url);
			return $_LANG;
		}
		return array();
	}

	//加载单页面JS语言包
	function getPageJSLanguageinfo ($controller,$action){
		$language = getUserSetLanguage ();
		//加载语言包
		$lang_url = $_SERVER["Root_Path"] . "/html/languages/".$language."/js/".$controller."/".$action.".php";
		if(file_exists($lang_url)){
			include_once ($lang_url);
			return $_JSLANG;
		}
		return array();
	}

	//点击切换语言
	public function setLanguage()
	{
	    $language = $this->input('get')->get_string("language");
	    //设置语言
	    getUserSetLanguage($language);
	    $referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : $_SERVER['Www_Url'];
	    $url = getReferer($referer);   ///用户登陆来源站点
	    if (isset($_SERVER['HTTP_REFERER'])) {//有referer替换url中的目录
	        $urlArr = parse_url($_SERVER['HTTP_REFERER']);
	        if ($urlArr['path'] != '/') {
	                $pathArr = explode('/', $urlArr['path']);
	                if (in_array($pathArr[1], array('en-us', 'zh-cn'))) {//正常地址
	                    $url = str_replace('/' . $pathArr[1] . '/', '/' . $language . '/', $_SERVER['HTTP_REFERER']);
	                }
					if (in_array($pathArr[2], array('en-us', 'zh-cn'))) {//static目录地址
	                    $url = str_replace('/' . $pathArr[2] . '/', '/' . $language . '/', $_SERVER['HTTP_REFERER']);
	                }
	        }
	    }
	    header("location:" . $url);
	    exit();
	}
	
?>