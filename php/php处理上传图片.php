
<?php


	php处理上传图片

public function uploadImage(){

	$countrycode = $this->input('post')->get_string('countrycode');

    //整理上传文件start
    $passportName = $_FILES['passport']['name'];
    $passportFile = $_FILES['passport']['tmp_name'];
    $passportType = $_FILES['passport']['type'];
    $passportSize = $_FILES['passport']['size'];

    $newspaperName = $_FILES['newspaper']['name'];
    $newspaperFile = $_FILES['newspaper']['tmp_name'];
    $newspaperType = $_FILES['newspaper']['type'];
    $newspaperSize = $_FILES['newspaper']['size'];

    $ret = array('MSG' => $this->_lang['CODE']['-10003'],'CODE'=>-10003,'data'=>array());

    //判断上传文件的类型和大小
    if(!empty($_FILES['passport']['name']) || !empty($_FILES['newspaper']['name'])){
        if($passportType != 'image/png' && $newspaperType != 'image/jpeg'){
            $ret = array('MSG' => $this->_lang['CODE']['-10004'],'CODE'=>-10004,'data'=>array());
            $this->out($ret);
        }
        if($passportSize >= 8*1024*1024 || $newspaperSize >= 8*1024*1024){
            $ret = array('MSG' => $this->_lang['CODE']['-10005'],'CODE'=>-10005,'data'=>array());
            $this->out($ret);
        }
        $passportParam = '@'.realpath($passportFile).";type=".$passportType.";filename=".$passportName;//拼接上传文件参数
        $rs = User_UserLogin::uploadfile($passportParam);

        $newspaperParam = '@'.realpath($newspaperFile).";type=".$newspaperType.";filename=".$newspaperName;//拼接上传文件参数
        $res = User_UserLogin::uploadfile($newspaperParam);

        if($rs['CODE'] > 0 && $res['CODE'] > 0){
            $passportUrl = $rs['info']['url'];
            $newspaperUrl = $res['info']['url'];
            $ret = User_UserLogin::saveRealNameInfo($countrycode,$passportUrl,$newspaperUrl);
            if($ret['CODE'] < 0){
                $ret['MSG'] = $this->_lang['CODE'][$ret['CODE']];
            }
            $this->out($ret);
        }else{
            if($rs['CODE'] < 0){
                $rs['MSG'] = $this->_lang['CODE'][$rs['CODE']];
                $this->out($rs);
            }
            $res['MSG'] = $this->_lang['CODE'][$res['CODE']];
            $this->out($res);
        }
	}else{
	    $this->out($ret);
	}
}
?>