<?php
header('Content-type:text/html;charset=utf-8');
header('Cache-control:no-cache');
require_once 'messageService_class.php';
$sender=$_POST['sender'];
$getter=$_POST['getter'];
$b=new messageService();
$b->get($sender,$getter);
//file_put_contents('b.txt', $sender);






























