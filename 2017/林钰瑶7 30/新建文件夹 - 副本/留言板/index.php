<?php require_once("lydb.class.php");?>
<?php require_once("authority.class.php");?>

<?php 
	session_start();
	$lydb=new LyDB();

	if(isset($_POST["type"])){
		if($_POST["type"]=="insert"){
			if(Authority::check_insert()==true){
				$lydb->insert($_POST["nickname"],"img/avatar/".$_POST["avatar"],$_POST["message"]);
				header("Location:index.php");
				exit();
			}
		}
		else if($_POST["type"]=="login"){ 
			if(isset($_POST["username"]) && isset($_POST["password"])){
				$dd=User::validate($_POST["username"],$_POST["password"]);
				if($dd==true){
					$_SESSION["username"]=$_POST["username"];
					header("Location:index.php");
					exit();
				}
				else{
				 
				}
			}
		}
		else if($_POST["type"]=="reply"){
			$id=$_POST["id"];
			$reply=$_POST["reply"];
			$lydb->reply($id,$reply);
			header("Location:index.php");
			exit();
		}
	}
	else if(isset($_GET["type"])){
		if($_GET["type"]=="delete"&& isset($_GET["id"])){
			if(Authority::check_delete()==true){
				$lydb->delete_by_id($_GET["id"]);
				header("Location:index.php");
				exit();
			}
		}
		else if($_GET["type"]=="logout"){
			session_destroy();
			header("Location:index.php");
			exit();
		}
	}
	
	header("Content-Type:text/html;charset=utf-8");
?>
<!DOCTYPE>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>简单留言本</title>
<link rel="stylesheet" type="text/css" href="css/style.css"/>
<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</head>
<body>

<div id="all_wrap">

		
		<div id="header">
        <?php if(!isset($_SESSION["username"])){?>
          <div class="login_form" id="login_form">
          	<form action="index.php" method="post" >
          		<label>用户名:
          		  <input name="username" type="text" /></label>
                <label>密码:
                  <input name="password" type="password" /></label>
       	      	<label style="width:65px;"><input type="submit" name="submit_1" id="submit_1" value="登录" /></label>
                <input name="type" type="hidden" value="login" />
                <div style="clear:both; line-height:0; height:0;"></div>
          	</form>
          </div>
          <div class="login_button"><a href="#" id="login_show_button">管理员登录</a></div>
          <div style="clear:both; line-height:0; height:0;"></div>
          <?php } else {?>
          <div class="welcome_info">
          	欢迎您：<?php echo $_SESSION["username"];?> &nbsp;&nbsp;&nbsp;
            <a href="index.php?type=logout">退出</a> </div>
          <?php }?>
       	  <h1>简单留言本&nbsp;&nbsp;&nbsp; QQ:791808990</h1>
  </div>
        
        
  <div id="content">
		
        <?php if(Authority::check_insert()==true){?>
		  <div class="form_box">
				<form action="index.php" method="post">
                    <div class="form_line">
                    	<div class="form_text">您的昵称：</div>
                    	<div class="form_input">							<input type="text" name="nickname" id="nickname"/>
						</div>
                    </div>
				    <div class="form_line">
                    	<div class="form_text">选择头像：</div>
                    	<div class="form_input" id="form_select_avater">
							    <label>
                                  <img src="img/avatar/a1.jpg" width="48" height="48" />
							      <input name="avatar" type="radio" value="a1.jpg" checked="checked" />
							    </label>
                                <label>
                                   <img src="img/avatar/a2.jpg" width="48" height="48" />
							      <input type="radio" name="avatar" value="a2.jpg" />
							    </label>
                                   <label>
                                   <img src="img/avatar/a3.jpg" width="48" height="48" />
							      <input type="radio" name="avatar" value="a3.jpg" />
							    </label>
                                <label>
                                   <img src="img/avatar/a4.jpg" width="48" height="48" />
							      <input type="radio" name="avatar" value="a4.jpg" />
							    </label>
                                   <label>
                                   <img src="img/avatar/a5.jpg" width="48" height="48" />
							      <input type="radio" name="avatar" value="a5.jpg" />
							    </label>
                                <label>
                                   <img src="img/avatar/a6.jpg" width="48" height="48" />
							      <input type="radio" name="avatar" value="a6.jpg" />
							    </label>
                                   <label>
                                   <img src="img/avatar/a7.jpg" width="48" height="48" />
							      <input type="radio" name="avatar" value="a7.jpg" />
							    </label>
                                <label>
                                   <img src="img/avatar/a8.jpg" width="48" height="48" />
							      <input type="radio" name="avatar" value="a8.jpg" />
							    </label>
                                <br style="clear:both;" />
                        </div>
                    </div>
                    <div class="form_line">
                    	<div class="form_text">留言内容：</div>
                    	<div class="form_input">
							<textarea name="message" id="message"></textarea>
						</div>
                    </div>
                    <div class="form_line">
                    	<div class="form_text">&nbsp;</div>
                    	<div class="form_input">
							<input type="hidden" name="type" value="insert" />
							<input type="submit" value="提交" id="submit_0" />
						</div>
                    </div>
				</form>
                <div style="border-bottom:solid #00F 1px; margin:10px auto 10px auto;"></div>
			</div>
			<?php }
			?>

			<div class="message_box">
				<ul class="list">
                <?php
					$page_result=$lydb->select_page_result($_GET["pn"]);
					$result=$page_result["page_data"];
				    
					while($row=mysql_fetch_assoc($result)){
				?>
                	<li class="item">
                    	<div class="a">
                          <img src="<?php echo $row["avatar"];?>" width="50" height="50"  />
                        </div>
					    <div class="n"><?php echo $row["nickname"];?></div>
                        <div class="o">
                            <?php echo $row["id"];?>楼&nbsp;&nbsp;
                        	<?php if(Authority::check_delete()==true){?>
                          <a href="<?php echo $row["id"];?>" class="reply_button">回复</a> &nbsp;
                       	  <a href="index.php?type=delete&amp;id=<?php echo $row["id"];?>">删除</a>
                            <?php }?>
                        </div>
                        <div class="t"><?php echo $row["lytime"];?></div>
						<div class="m">
                        	<p><?php echo $row["message"];?></p>
							<?php 
							if(isset($row["reply"]) && trim($row["reply"])!=""){
								echo "<p class='r'>";
								echo "回复：".$row["reply"];
								echo "<span class='retime'>__".$row["retime"]."</span>";
								echo "</p>";
								
							}
							?>
                      </div>
				  </li>
                <?php } ?>
			  </ul>
		  </div>
		
          <div class="pagination" >
       	   当前第<?php echo $page_result["page_no"];?>页/
           共<?php echo $page_result["page_info"]["page_count"];?>页/
           每页显示<?php echo $page_result["page_info"]["page_size"]; ?>条/
           共<?php echo $page_result["page_info"]["ly_count"]; ?>条留言
          <a href="index.php?pn=<?php echo ($page_result['page_no']-1);?>">上一页</a> 
          <a href="index.php?pn=<?php echo ($page_result['page_no']+1);?>">下一页</a> 
          <a href="index.php?pn=1">首页</a> 
          <a href="index.php?pn=<?php echo ($page_result['page_info']['page_count']);?>">尾页</a>
          </div>
  </div>
        
        
		<div id="footer">
        
        	<div class="footer_message">
        	  <p>&nbsp;</p>
        	  <p style="text-align:right">@luanhaipeng 2012 QQ:791808990</p>
        	</div>
        
        </div>

</div>

<?php if(Authority::check_delete()==true){?>
<div id="reply_form" style="display:none;">
  <div class="reply_form_wrap" style="display:none;">
   <form action="index.php" method="post">
	  <input type="hidden" name="type" value="reply" />
      <input type="hidden" name="id" value="" />
      <textarea name="reply" style="width:300px; height:40px;"></textarea>
          	<input name="提交" type="submit" value="回复" style="width:60px; vertical-align:middle;" />
    </form>
    </div>
</div>
<?php }?>

</body>
</html>