<!doctype>
<html>
<head>
<title>聊天室</title>
<?php 
session_start();
$loginuser=$_SESSION['loginuser'];
$friend=$_GET['myFriend'];
$friend=trim($friend);
?>
<meta charset="utf-8">
<script src=js/XMLHttpRequest.js></script>
<script type="text/javascript">
window.setInterval("getMessage()",5000);

function getMessage(){
	var myy_xmlhttpreuqest=getXMLHttpObject();

	//alert(data);
	if(myy_xmlhttpreuqest){
	var	url="getMessageController.php",
		data="sender=<?php echo $friend; ?>&getter=<?php echo $loginuser; ?>";
		myy_xmlhttpreuqest.open('post',url,true);
		myy_xmlhttpreuqest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		myy_xmlhttpreuqest.send(data);
		myy_xmlhttpreuqest.onreadystatechange=function(){
			if(myy_xmlhttpreuqest.readyState==4){
				if(myy_xmlhttpreuqest.status==200){
					var receive=eval("("+myy_xmlhttpreuqest.responseText+")");
					//receive为对象
					for(var j=0;j<receive.num;j++){
						$t('textarea')[0].value+="<?php echo $friend; ?>"+receive.record[j].time+"\r\n"+
						receive.record[j].con+"\r\n";
					}
				}
			}
		}
	}
}

//[{'con':a[0],'time':a[1]},{},{}],一条记录是一个对象
//{'record':[记录],'num':$b}
/*
{
 'record':
			[
				{'con':a[0],'time':a[1]},
				{},
				{}
			],
 'num':$b
}
*/


























function sendMessage(){
	var my_xmlhttpreuqest=getXMLHttpObject(),
		url="sendMessageController.php",
		data="sender=<?php echo $loginuser; ?>&con="+$('send').value+"&getter=<?php echo $friend; ?>";
	if(my_xmlhttpreuqest){
		//确保存入数据库的每条信息不为空（空格算信息），防止 用户只点击按钮发送无信息的记录 存入数据库，占用空间
		if($('send').value){
			my_xmlhttpreuqest.open("post",url,true);
			my_xmlhttpreuqest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			my_xmlhttpreuqest.send(data);
			my_xmlhttpreuqest.onreadystatechange=function(){
				if(my_xmlhttpreuqest.readyState==4){
					if(my_xmlhttpreuqest.status==200){
						var when=new Date().toLocaleString();					
						$t('textarea')[0].value+="<?php echo $loginuser; ?>"+when+"\r\n"+
						$('send').value+"\r\n";
					}
				}
			}
				
		}
		
	}
}



//?发送的信息会替换上一条
</script>
</head>
<body>
<p><?php echo $loginuser; ?>在和<?php echo $friend; ?>聊天</p>
<textarea rows="20" cols="30"></textarea><br>
<input type="text" id="send">
<input type="button" value="send" onclick="sendMessage();">
</body>
</html>



















