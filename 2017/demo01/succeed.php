<?
include 'pic.php';
$name=$_POST["name"];
$email=$_POST["email"];
$code=$_POST["code"];
$f=fopen("file/user.txt","w");
$str="user:{$name}email:{$email}code:{$code}";
if($code==$string)
{
    fwrite($f,$str);
}
else {
    echo '请重输入';
}
fclose($f);

?>