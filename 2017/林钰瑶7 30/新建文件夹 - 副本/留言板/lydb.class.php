<?php
class LyDB{
	
	var $_host="127.0.0.1";
	var $_user="root";
	var $_password="";
	var $_database="ly3";
	var $page_size=30;
 	var $link;
	public function  __construct(){
		date_default_timezone_set('PRC');
		$this->link = mysql_connect($this->_host,$this->_user,$this->_password); 
		if (!$this->link) { 
			die('Could not connect to MySQL: ' . mysql_error()); 
		} 

		$sdb=mysql_select_db($this->_database) or die("数据库表不存在！");
		mysql_query("set names utf8");
		if(!$sdb){
			mysql_error();
		}
	}

	public function __destruct(){
		mysql_close($this->link);
	}
	public function insert($nickname,$avatar,$message)
	{
		$message=str_replace ("<" , "&lt;" , $message);
		$message=str_replace (">" , "&gt;" , $message);
		$message=str_replace ("\n" , " " , $message);
		$message=trim($message);
		
		$lytime=date("Y-m-d H:i:s");
		$sql="insert into ly values(null,'$nickname','$message','$avatar','$lytime',null,null)"; 
		$query=mysql_query($sql,$this->link);
		if($query){
			return true;
		}
		else {
			return false;
		}
	}
	public function reply($id,$reply){
		$message=str_replace ("<" , "&lt;" , $reply);
		$message=str_replace (">" , "&gt;" , $message);
		$message=str_replace ("\n" , " " , $message);
		$message=trim($message);
		$reply=$message;
		$retime=date("Y-m-d H:i:s");
		$sql="update ly set reply='$reply', retime='$retime' where id=$id";
		$query=mysql_query($sql,$this->link);
		if($query)return true;
		else return false;
	}
	public function delete_by_id($id){
		$sql="delete from ly where id=$id";
		$query=mysql_query($sql,$this->link);
	}
	
	
	public function select_page_info(){
		$sql="select count(*) as pagecount from ly";
		$query=mysql_query($sql,$this->link);
		$row=mysql_fetch_assoc($query);
		$ly_count=$row["pagecount"];
		$page_count=($ly_count%$this->page_size==0)?($ly_count/$this->page_size):($ly_count/$this->page_size+1);
		$page_info=array("ly_count"=> $ly_count,"page_count"=>(int)$page_count,"page_size"=>$this->page_size);
		return $page_info;
	}
	
	public function select_all_result(){
		$sql="select * from ly order by id desc";
		$query=mysql_query($sql,$this->link);
		return $query;	
	}
	
	public function select_page_result(&$page_no){
		$page_info=$this->select_page_info();
		if(!isset($page_no))$page_no=1;
		else if($page_no<1)$page_no=1;
		else if($page_no>$page_info["page_count"])$page_no=$page_info["page_count"];
		
		$first=($page_no-1)*$this->page_size;
		$sql="select * from ly order by id desc limit $first,$this->page_size ";
		$query=mysql_query($sql,$this->link);
		$page_result=array("page_data"=>$query,"page_info"=>$page_info,"page_no"=>$page_no);
		return $page_result;	
	}
	
	
	
}


?>