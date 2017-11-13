<?php
$loginuser=$_POST['user'];
$password=$_POST['paswd'];
if($password=='123'){
    session_start();
    $_SESSION['loginuser']=$loginuser;
    header('Location:friendList.php');
}else{ header('Location:login.php'); }










































