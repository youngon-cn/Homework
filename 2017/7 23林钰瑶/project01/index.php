<?php
   <form action="chuli.php" method="post">
      <p style="margin-left: 500px; margin-top: 200px;height: 250px; width: 250px">/*为了把登录表放到页面中间，比较美观*/
      <h1>公司内部留言板</h1>
      <p style="margin-top: 20px">用户名：<input type="text" name="username"/></p><br/>
      <p>密码：<input type="password" name="password"/></p><br/>
      <p><input type="submit" value="登录"/></p>
      </p>
     
   </form>
?>
     
<?php
session_start(); // 登录之后要把所包含登录的页面连接起来，开启session
include("DADB.class.php");
 
$db=new DADB();
 
$user=$_POST["username"];
$pwd=$_POST["password"];
 
$sql="select password from yuangong where username='{$user}'";
 
$arr=$db->Query($sql);
 
if($arr[0][0]==$pwd && !empty($pwd))
{
    $_SESSION["username"]=$user;
    header("location:main.php");
}
else
{
    echo"登录失败";
}
 
?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="20; url='{$jumpUrl}'" />
<title></title>
</head>

<body>
<p><h3><a href="fabu.php">发布信息</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="tuichu.php">退出系统</a></h3> </p>
<br/><br/>
<h2>留言信息：</h2>
 
<table cellpadding="0" cellspacing="0" border="1" width="60%">
    <tr>
        <td>发送人</td>
        <td>接收人</td>
        <td>发送时间</td>
        <td>信息内容</td>
    </tr>
    <?php
    session_start();
    if(empty($_SESSION["username"]))
    {
        header("location:login.php");
    }
    $user=$_SESSION["username"];
 
    include("DADB.class.php");
    $db=new DADB();
    $sql="select * from liuyan where recever='$user' or recever='all' ";
 
    $arr=$db->Query($sql);
    foreach($arr as $v)
    {   $fjr=uname($v[1]);
        $jsr=uname($v[2]);
        echo"<tr>
        <td>{$fjr}</td> //发送人和接收人要用到姓名，所以这里我们调用了一个方法
        <td>{$jsr}</td>
        <td>{$v[3]}</td>
        <td>{$v[4]}</td>
    </tr>";
    }
    function uname($user)   //运用了uname方法
    {
        global $db;      //要想方法里面也可以用$db 这里用了全局变量
        if($user=="all")
       {
        return "所有人";
       }else
    {
        $sql1="select name from yuangong where username='{$user}'";
        $att=$db->Query($sql1);
        return $att[0][0];}
    }
    ?>
 
</table>

</body>
</html>

 
<?php
session_start();
if(empty($_SESSION["username"]))
{
    header("location:login.php");
    exit;
}
 
$user = $_SESSION["username"];
 
include("DADB.class.php");
$db = new DADB();
 
$shaoyou = "select * from firend where me='{$user}'";
$ahaoyou = $db->Query($shaoyou);
 
?>
 
<form action="fabu.php" method="post">
    <p>接收人：
        <select name="jsr">
            <option value="all">所有人</option>
            <?php
            foreach($ahaoyou as $v)
            {
                $name = uname($v[2]);
                echo "<option value='{$v[2]}'>{$name}</option>";
            }
            ?>
        </select>
    </p>
    <br />
    <p>
        信息内容：<textarea name="neirong"></textarea>
    </p><br />
    <input type="submit" value="发送" />
</form>
<?php
function uname($user)
{
    global $db;
 
    if($user=="all")
    {
        return "所有人";
    }
    else
    {
        $sql1 = "select name from yuangong where username='{$user}'";
        $att = $db->Query($sql1);
 
        return $att[0][0];
    }
}
?>



 
<?php
session_start();
 
$re=$_POST["jsr"];
$comment=$_POST["neirong"];
$time=date("Y-m-d H:i:s"); //获取当前时间
 
$_SESSION["username"]=$user;
 
include("DADB.class.php");
$db=new DADB();
 
 
$sql="insert into liuyan VALUES ('','{$user}','{$jsr}','{$time}','{$comment}',false)";
 
if($db->Query($sql,0))
{
 
        header("location:main.php");
}
else{
    echo"发布失败";
}
?>

<!-- 退出页面代码 -->
<?php
session_start();
unset($_SESSION["username"]);
header("location:login.php");
 
?>