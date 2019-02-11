
<?php
	
	php 简单输出excel表

	// 导出
    header("Content-type:text/csv");
    header("Content-Disposition: attachment; filename=彩票新零售提交信息" . date('Ymd_His') . ".csv");
    header("Expires: 0");
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
    header("Pragma: public");
    echo "序号,姓名,手机号码,地区\r\n";
    foreach ($ret as $data) {
        echo $data['f_id'].","
            . $data['f_username'] . ","
            . $data['f_phone'] . ","
            . $data['f_address'] . "\r\n";
    }

?>