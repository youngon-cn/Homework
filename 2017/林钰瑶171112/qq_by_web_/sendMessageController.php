<?php
require_once 'messageService_class.php';
header('Content-type:text/html;charset=utf-8');
header('Cache-control:no-cache');
$sender=$_POST['sender'];
$getter=$_POST['getter'];
$con=$_POST['con'];

$a=new messageService();
$a->add($sender, $con, $getter);























