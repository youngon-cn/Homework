//创建Ajax引擎，即获取XMLHttpRequest对象
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

//省份
var my_xmlhttpRequest="";
function sendProvince(){
	my_xmlhttpRequest=getXMLHttpRequest();
	if(my_xmlhttpRequest){
		var url='web.php',data='province='+getId('province').value;
		my_xmlhttpRequest.open('post',url,true);
		my_xmlhttpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		my_xmlhttpRequest.send(data);
		my_xmlhttpRequest.onreadystatechange=process;
	}
}

//接收并处理服务器返回的数据
function process(){

	var html_city=getId('city');
	if(my_xmlhttpRequest.readyState==4){
		if(my_xmlhttpRequest.status==200){
			var receive=my_xmlhttpRequest.responseXML,
				cities=receive.getElementsByTagName("city");
				/*option=document.createElement('option');
			option.innerText='城市';*/
			html_city.length=1;
			for(var i=0;i<cities.length;i++){
				var text=cities[i].childNodes[0].nodeValue;
				var option=document.createElement('option');
				option.innerText=text;
				html_city.appendChild(option);
				
			}
		}
	}
		
}

//城市
var myy_xmlhttpRequest="";
function sendCity(){
	myy_xmlhttpRequest=getXMLHttpRequest();
	if(myy_xmlhttpRequest){
		var url='webb.php',data='city='+getId('city').value;
		myy_xmlhttpRequest.open('post',url,true);
		myy_xmlhttpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		myy_xmlhttpRequest.send(data);
		myy_xmlhttpRequest.onreadystatechange=process_city;
	}
}
function process_city(){
	if(myy_xmlhttpRequest.readyState==4){
		if(myy_xmlhttpRequest.status==200){
			var receiveC=myy_xmlhttpRequest.responseXML,
			countries=receiveC.getElementsByTagName('country'),
			html_country=getId('country');
		html_country.length=1;
		for(var j=0;j<countries.length;j++){
			var text=countries[j].childNodes[0].nodeValue,
				option=document.createElement('option');
			option.innerText=text;
			html_country.appendChild(option);
		}
		}
	}
	
}












//获取Id
function getId(id){ return document.getElementById(id); }
















