<?php 
header('Content-Type: text/html; charset=utf-8');
$name=$_POST['name'];
$emali=$_POST['Emali'];
$acount=$_POST['account'];
$password=$_POST['password'];
//echo $emali;
//$accounts=array('name'=>$_POST['name'],'emali'=>$_POST['Emali'],'acount'=>$_POST['acount'],'password'=>$_POST['password']);
$sql=mysql_connect('localhost','root','');
mysql_select_db("datalist");
function  data(){
global $name,$emali,$acount,$password;
if($result=mysql_query("SELECT * FROM datas WHERE Account='$acount'and Emali='$emali'")){
$row=mysql_fetch_array($result);
if(empty($row)){
      echo "success";
      $write = "INSERT INTO datas (Name,Emali,Account,Password) VALUES ('$name','$emali','$acount','$password')";
      mysql_query($write);
      echo "<script>alert('注册成功');</script>";
      echo "<script> location.href='loading.html'</script>";
    }
    else{
      echo "error";
      echo "<script>alert('你注册的账号已经存在或邮箱已经存在 请重新注册');window.history.back();</script>";
      break;
    }

}
}
data();
 ?>