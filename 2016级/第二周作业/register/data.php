<?php
header('Content-Type text/html; charst=utf-8');
if($_POST['account']){
setcookie('acc',$_POST['account'],time()+3600);
echo  "<script>location.href='data.php'</script>";
}

$leava=$_POST['leava'];
if(!empty($leava)){
$data=file_get_contents("data.txt");
$time=time();
$sum="{$leava}##{$time}@@";
$input=file_put_contents("data.txt", $sum.$data);
}
require("index.html");
 ?>

