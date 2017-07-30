<?php


 
class Authority{
	static public  function check_insert(){
		return true;
	} 
	static public  function check_delete(){
		 
		if(isset($_SESSION["username"]) && $_SESSION["username"]=="admin")
			return true;
		else 
			return false;
			
	}	
}

?>



<?php 
	class User{
		static public function validate($username,$password){
			if("admin"==$username && "admin123"==$password){
				return true;
			}
			else 
				return false;
		}
	}

?>