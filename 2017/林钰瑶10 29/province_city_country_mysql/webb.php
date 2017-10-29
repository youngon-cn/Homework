<?php
//当前服务器传回的数据格式为xml
header('Content-type:text/xml;charset=utf-8');
header('Cache-control:no-cache');
$host='localhost';
$user='root';
$password='123456';
$database='province_city_mysql';
$port=3306;
$link=mysqli_connect($host, $user, $password, $database, $port);
if(mysqli_connect_errno()) { exit(mysqli_connect_error()); }
$charset='utf8';
mysqli_set_charset($link,$charset);
mysqli_select_db($link,'province_city_mysql');

$ci=$_POST['city'];
$info="";
$query=<<<TED
select count from t2 where city='{$ci}'
TED;
$result=mysqli_query($link,$query);
for($j=0;;$j++){
    $a=mysqli_fetch_row($result);
    if($a) { $info.="<country>{$a[0]}</country>"; }
    else { break; }
}
$info="<city>{$info}</city>";
echo $info;


//获取$info中的内容
$filename='D:\Apache\wamp\www\province_city_country_mysql\b.txt';
file_put_contents($filename, $info."\r\n",FILE_APPEND);
