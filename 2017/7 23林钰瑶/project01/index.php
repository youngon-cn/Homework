<?php
   <form action="chuli.php" method="post">
      <p style="margin-left: 500px; margin-top: 200px;height: 250px; width: 250px">/*Ϊ�˰ѵ�¼��ŵ�ҳ���м䣬�Ƚ�����*/
      <h1>��˾�ڲ����԰�</h1>
      <p style="margin-top: 20px">�û�����<input type="text" name="username"/></p><br/>
      <p>���룺<input type="password" name="password"/></p><br/>
      <p><input type="submit" value="��¼"/></p>
      </p>
     
   </form>
?>
     
<?php
session_start(); // ��¼֮��Ҫ����������¼��ҳ����������������session
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
    echo"��¼ʧ��";
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
<p><h3><a href="fabu.php">������Ϣ</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="tuichu.php">�˳�ϵͳ</a></h3> </p>
<br/><br/>
<h2>������Ϣ��</h2>
 
<table cellpadding="0" cellspacing="0" border="1" width="60%">
    <tr>
        <td>������</td>
        <td>������</td>
        <td>����ʱ��</td>
        <td>��Ϣ����</td>
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
        <td>{$fjr}</td> //�����˺ͽ�����Ҫ�õ������������������ǵ�����һ������
        <td>{$jsr}</td>
        <td>{$v[3]}</td>
        <td>{$v[4]}</td>
    </tr>";
    }
    function uname($user)   //������uname����
    {
        global $db;      //Ҫ�뷽������Ҳ������$db ��������ȫ�ֱ���
        if($user=="all")
       {
        return "������";
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
    <p>�����ˣ�
        <select name="jsr">
            <option value="all">������</option>
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
        ��Ϣ���ݣ�<textarea name="neirong"></textarea>
    </p><br />
    <input type="submit" value="����" />
</form>
<?php
function uname($user)
{
    global $db;
 
    if($user=="all")
    {
        return "������";
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
$time=date("Y-m-d H:i:s"); //��ȡ��ǰʱ��
 
$_SESSION["username"]=$user;
 
include("DADB.class.php");
$db=new DADB();
 
 
$sql="insert into liuyan VALUES ('','{$user}','{$jsr}','{$time}','{$comment}',false)";
 
if($db->Query($sql,0))
{
 
        header("location:main.php");
}
else{
    echo"����ʧ��";
}
?>

<!-- �˳�ҳ����� -->
<?php
session_start();
unset($_SESSION["username"]);
header("location:login.php");
 
?>