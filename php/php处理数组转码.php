
<?php

php 处理数组转码，ajax json输出

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

 ?>