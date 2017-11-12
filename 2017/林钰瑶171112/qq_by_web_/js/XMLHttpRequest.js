//创建Ajax引擎，即获取XMLHttpRequest对象
function getXMLHttpObject(){
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

//获取id
function $(id){	return document.getElementById(id); }

//获取类class
function $c(Class){ return document.getElementsByClassName(Class); }

function $t(tag){ return document.getElementsByTagName(tag); }
