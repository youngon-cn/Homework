      <?php 
      header('Content-Type: text/html; charset=utf-8');
      $name=$_POST['name'];
      $emali=$_POST['Emali'];
      $acount=$_POST['account'];
      $password=md5(md5($_POST['password'],true));
      $time=date('Y-m-d:H-i-s',time());
      $quest=$_REQUEST['q'];

     

      /* *
      *
      *
      链接数据库
      *
      **/

      $conn = mysql_connect('localhost','root','');
      mysql_select_db('form');
      // 检测连接
      //if ($conn){
      // echo "success";
      //}





     /* *
     *
     *   
     查询数据库，是否与相同；
     */
     $chunk="SELECT * FROM data WHERE id='$name' or email='$emali'"; 
     //echo mysql_query($chunk);
     $values=mysql_fetch_array(mysql_query($chunk));

      if(count($values)<=1){

      if($quest=='success'){
      $sql="INSERT INTO data(id,account,email,password,data)VALUES('$name','$acount','$emali','$password','$time')";
      if(mysql_query($sql)){
        echo "success";
        echo "注册成功 3秒后跳回登陆页面";
        echo '<meta http-equiv="refresh" content="3; url=loading.html" />';
        mysql_close($conn);
      }else{
        echo '未知错误';
        echo "error";
        mysql_close($conn);
      }


      }

      }else{
       
       echo "用户已经存在 3秒后跳回注册页面";
       echo '<meta http-equiv="refresh" content="3; url=registe.html" />';
       mysql_close($conn);

      }

    

       ?>