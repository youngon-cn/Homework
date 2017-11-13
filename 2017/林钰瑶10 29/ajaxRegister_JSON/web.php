<?php
header('Content-type:text/html;charset=utf-8');
header('Cache-Control:no-cache');
$username=$_POST['username'];
$info="";
if($username=='danding'){
    $info="{'id':'1','value':'该昵称已存在请重设！'}";    
}else{
    $info="{'id':'2','value':'设置成功.'}";
}
echo $info;































