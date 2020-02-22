var xmlhttp;
function loadXMLDoc(url,cfunc){
	if (window.XMLHttpRequest){
		// IE7+, Firefox, Chrome, Opera, Safari 代码
		xmlhttp=new XMLHttpRequest();//创建XMLHttpRequest对象
	}
	else{
		// IE6, IE5 代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	};
	xmlhttp.onreadystatechange=cfunc;
	//发送请求
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
};
//使用回调函数
function myFunction(){
	//调用loadXMLDoc函数/两参数(url,cfunc)
	loadXMLDoc("https://xihui-forever.github.io/2020/01/10/I-m-happy-to-go-to-home/",function(){
		//请求完成,响应就绪,交易成功
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	});
	/*
	传递参数url;获得字符串形式的响应数据,相当于如下:
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById('myDiv').innerHTML=xmlhttp.responseText;
		}
	}
	*/
};