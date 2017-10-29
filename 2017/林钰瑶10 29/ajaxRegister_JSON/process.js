//创建引擎
function getXMLHttpRequest(){
	var xmlhttpRequest;
	try
	{
		xmlhttpRequest=new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlhttpRequest=new ActiveXObject('Msxm12.XMLHTTP');
		}
		catch(e)
		{
			xmlhttpRequest=new ActiveXObject('Microsoft.XMLHTTP');
		}
	}
	return xmlhttpRequest;
}

//到服务器检查用户名是否存在
var my_xmlhttpRequest="";
function checkName(){
	my_xmlhttpRequest=getXMLHttpRequest();
	if(my_xmlhttpRequest){
		var url="web.php",data="username="+getId('petName').value;//id后面不要忘写'value'
		my_xmlhttpRequest.open('post',url,true);
		my_xmlhttpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		my_xmlhttpRequest.send(data);
		my_xmlhttpRequest.onreadystatechange=process;
	}
}

function process(){
	if(my_xmlhttpRequest.readyState==4){
		var a=eval("("+my_xmlhttpRequest.responseText+")");
		//alert(a);
		getId('hint').value=a.value;
		
	}
}










function getId(id){ return document.getElementById(id); }