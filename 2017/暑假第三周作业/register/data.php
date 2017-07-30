		<?php
        


		header('Content-Type text/html; charst=utf-8');
        



		/*
		*
        设置cookie
		*
		*/
		if($_POST['account']){
		setcookie('acc',$_POST['account'],time()+3600);
		echo  "<script>location.href='data.php'</script>";
		}
        

        /*
        *
        读入数据库
        *
        */

		$leavas=$_POST['vel'];
		//echo $leavas;

	    if(!empty($leavas)){
		++$i;
        writes($leavas);
        echo "<script>alert('发布成功')</script>";
		}
		



        function writes($leavas)
        {
        	# code...
         $day=date('Y-m-d:H-i-s',time());
         $conns=mysql_connect('localhost','root','');
         mysql_select_db('form');
         $sqls="INSERT INTO information(data,day)VALUES('$leavas','$day')";
         //mysql_query($sqls);
         mysql_query($sqls);
         mysql_close($conns);
        }
       




          
          /*
          *
          删除留言
          *
          */


         $data=$_REQUEST['act'];

         if(!empty($data)){
         $con=mysql_connect('localhost','root','');
         mysql_select_db('form');
         $sqd=mysql_query("DELETE FROM information WHERE math='$data'");
         echo "<script>alert('删除成功')</script>";

         }



        

        require("index.html");


		 ?>

