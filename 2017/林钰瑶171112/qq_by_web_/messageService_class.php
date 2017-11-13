<?php
class messageService{
    function add($sender,$con,$getter){
        header('Content-type:text/html;charset=utf-8');
        header('Cache-control:no-cache');
        date_default_timezone_set('Asia/Shanghai');
        $host='localhost';
        $user='root';
        $password='123456';
        $database='qq_by_web';
        $port=3306;
        $link=mysqli_connect($host,$user,$password,$database,$port);
        if(mysqli_connect_errno()){ exit(mysqli_connect_error()); }
        mysqli_set_charset($link,'utf8');
        mysqli_select_db($link, $database);
        $time=date("Y-m-d G:i:s");
        $query=<<<TED
insert into t3(sender,con,time,getter) value("$sender","$con","$time","$getter");
TED;
        mysqli_query($link, $query);
        mysqli_close($link);
        //file_put_contents('b.txt', $sender);
    }
    
    function get($sender,$getter){
        header('Content-type:text/html;charset=utf-8');
        header('Cache-control:no-cache');
        $host='localhost';
        $user='root';
        $password='123456';
        $database='qq_by_web';
        $port=3306;
        $link=mysqli_connect($host,$user,$password,$database,$port);
        if(mysqli_connect_errno()){ exit(mysqli_connect_error()); }
        mysqli_set_charset($link,'utf8');
        mysqli_select_db($link, $database);
        //file_put_contents('b.txt', $sender.$getter,FILE_APPEND);
        $query=<<<TED
select con,time from t3 where sender="$sender" and getter="$getter" and isget=0
TED;
        $result=mysqli_query($link, $query);
        $b=mysqli_num_rows($result);//几条记录.............................
        if($b){
            //$info="";
            $info="{'record':[";
            for($i=0;$i<$b;$i++){
                $a=mysqli_fetch_row($result);
                if($i==$b-1){
                    $info.="{'con':'".$a[0]."','time':'".$a[1]."'}],'num':'".$b."'}";
                    echo $info;
                    
                    $query1=<<<TED
update t3 set isget=1 where sender="$sender" and getter="$getter"
TED;
                    mysqli_query($link, $query1);
                    file_put_contents('b.txt', $info."\r\n".$b."\r\n",FILE_APPEND);
                    
                }else{
                    $info.="{'con':'".$a[0]."','time':'".$a[1]."'},";
                }   
            }           
        }       
    }
}
/*
 "{
 'record':
 [
 {'con':'a[0]','time':'a[1]'},
 {},
 {}
 ],
 'num':'$b'
 }"
 */
//记得a[0],a[1]要用引号括起来，否则解析出来a[0],a[1]不带引号



































