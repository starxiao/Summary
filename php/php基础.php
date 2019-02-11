<?php


1. 给数组插入新值

```
    $arr = array('username' => 'xiaoxx','year' => 10 , 'sex' => 1);
    $arr_new = array();
    foreach($arr as $k=>$v){
        $arr_new[] = $k . ':' . $v;
        array_push($arr_new,$k . ':' . $v);
    }
    
    
```
2. sprintf函数 -- 把格式化的字符串写入一个变量中

```
 $str = 'xiaoxx = %s';
 $str = sprintf($str, 'who are you');
 $str = 'xiaoxx = who are you';
```

3. 301 --- 永久性跳转  302 --- 暂时性跳转

```
    header('Location: https://www.xiaoxx.com');
    直接header 为302跳转
    
    header("HTTP/1.1 301 Moved Permanently");
    header("location:".$url);
    301跳转

```
4. php数组插入数值函数array_slice(),在php-fpm模块下需要将数组转化成变量

```
$arr = array('data'=>array('username'=>'xiaoxx','year'=>123));
$data = array_slice($arr['data'],0,1); 这是错误的写法

$temp = $arr['data'];
$data = array_slice($temp,0,1);

```
5.php返回数组取值


```
function returnArr(){
    return array('username'=>'123','year'=>123);
    
}

echo returnArr()['username'];  错误

$temp = returnArr();
echo $temp['username'];
```

6.php处理中文字符


```
$str = '我的是谁'
mb_substr($str,$start,$length,$encode);

echo mb_substr($str,0,3,'utf8')  -- 我的是

echo mb_strlen($str,'utf8')   --4
```


7. php == 和 ===

```

    echo '1' == 1   true
    echo '1' === 1  false

```

8. 数组强制转化key类型

```
$trMap 数组已经强制将 key string类型的'360'转化成int类型的360

function translate($keyword){
    $trMap = [ 
        'baidu' => '百度',
        'sougou' => '搜狗',
        '360' => '360',
        'google' => '谷歌'
    ];  
    foreach ($trMap as $key => $value) {
    	var_dump($keyword);var_dump($key);
        if (strpos($keyword, $key) !== false) {
            return $value;
        }
    }   
    return '其他';
}

```

9. 函数里面不能直接使用全局变量,要使用的话必须要使用global提升

$book = '12312';

function sayBook(){
    
    global $book;    加上global声明就可以在函数内部使用全局变量了
    var_dump($book);   --- 报错$book undefined
}

sayBook();

10. 单引号和双引号的区别

字符串一般都是使用单引号。 双引号可以解析变量。

11. strpos(string($haystack),mixed($needle))   -- 返回找到字符串的起始位置

$haystack 在该字符串中进行查找

$needle 不是字符串的时候会转成整型。

var_dump(strpos('360',360));   --- false
var_dump(strpos(360,'360'));   --- int(0)

12. 数组编码转化

    public static function iconv_array(&$res, $in='gbk', $out='utf8'){
        if (is_array($res)){
            foreach ($res as &$v) {
                if (is_array($v)){
                    self::iconv_array($v,$in,$out);
                }else{
                    $v = iconv($in, $out, $v);
                }
            }
        }else{
            $res = iconv($in, $out, $res);
        }
        return $res;
    }

13. ajax请求 json数据格式输出

    json_encode($val)   --> $val 必须是utf8编码 return json string or false; 

    json_decode($val,$assoc)  --> $val 必须是utf8编码 assoc: 当该参数为true时，将返回数组，false时返回对象 默认为false。  

    public static function json_out($code,$msg='',$data=array()){

        //数组已经强制将 key string类型转化成int类型
        $msgArr = array(
            '1' => '调用成功',
            '-1' => '调用失败',
            '-100' => '未登录'
        )
        $msg = $msg ? $msg : $msgArr[$code];
        return json_encode(iconv_array(array('code' => $code,'msg' => $msg,'data' => $data),'gbk','utf8'));
    }


14. php 输出

    $str = 123;

    echo $str;   相对print输出速度更快

    print $str;  输出有返回值，正确执行返回1

    var_dump($str); 输出变量的类型和可以输出数组，上面的都不能输出数组。


15. include require include_once 的区别

    include './module.php';  跳过错误，继续执行脚本。

    include_once './module.php';

    require './module.php';  会触发致命错误，停止执行脚本


16. isset($var) 和 empty() 的区别

    从参数来说,isset($var)里面的参数必须是一个变量,而empty里面都是一个值。

    以下值empty返回为true  "" 0 0.0 "0" null false array(), $var(声明没有值)

    isset($var) $var 声明没有赋值和赋值为null时 返回false


?>

