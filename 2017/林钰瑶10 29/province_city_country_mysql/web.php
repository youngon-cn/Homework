<?php
//当前服务器传回的数据格式为xml
header('Content-type:text/xml;charset=utf-8');
header('Cache-control:no-cache');
$host='localhost';
$user='root';
$password='123456';
$database='province_city_mysql';
$port=3306;
$link=mysqli_connect('localhost','root','123456','province_city_mysql',3306);
if(mysqli_connect_errno()){ exit(mysqli_connect_error()); }

mysqli_set_charset($link, 'utf8');
mysqli_select_db($link,'province_city_mysql');

$pro=$_POST['province'];
$info="";
$query=<<<TED
select distinct city from t2 where pro='{$pro}'
TED;
$result=mysqli_query($link, $query);
for($i=0;;$i++){
    $a=mysqli_fetch_row($result);
    if($a){
        $info.="<city>{$a[0]}</city>";
    }else{ break; }
}
$info="<province>{$info}</province>";
echo $info;


//获取$info中的内容，用于调错
$filename='D:\Apache\wamp\www\province_city_country_mysql\a.txt';
file_put_contents($filename, $info."\r\n",FILE_APPEND);

























