		<?php 
		$q=$_GET['val'];
		$pas=md5(md5($_POST['pas'],true));
		mysql_connect('localhost','root','');
		mysql_select_db("datalist");
		$valu=mysql_query("SELECT * FROM datas WHERE Account='$q' and Password='$pas'");


		$val=mysql_fetch_array($valu);


		if(count($val)<=1){
			echo 'false';
		}
		else{
			echo 'true';
		}

		?>
