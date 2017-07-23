<?php 
$q=$_GET['val'];
$pas=$_GET['pas'];
mysql_connect('localhost','root','');
mysql_select_db("datalist");
$valu=mysql_query("SELECT * FROM datas WHERE Account='$q' and Password='$pas'");
$val=mysql_fetch_array($valu);
//var_dump($val);
//var_dump($val['Account']);
//var_dump($val['Password']);
//var_dump($pas);
//echo $pas;
if($pas===$val['Password']){
	echo $pas;
}
else{
	echo 'false';
}

?>