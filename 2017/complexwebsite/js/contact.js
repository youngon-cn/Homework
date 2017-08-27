function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload != 'function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}
	else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}


function addClass(element,value){
	if(!element.className){
		element.className=value;
	}
	else{
		var newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}
}


function highlightPage(href){
	if(!document.getElementsByTagName) return false;
	var linkurl,
	    headers=document.getElementsByTagName("header");
	var navs=headers[0].getElementsByTagName("nav");
	var links=navs[0].getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		linkurl=links[i].getAttribute("href");
		if(window.location.href.indexOf(linkurl) != -1){
			links[i].className="here";
			var linktext=links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linktext);
		}
	}
}
addLoadEvent(highlightPage);

function focusLabels(){
	if(!document.getElementsByTagName) return false;
	var labels=document.getElementsByTagName("label");
	for(var i=0;i<labels.length;i++)
	{
		if(!labels[i].getAttribute("for")) continue;
		labels[i].onclick=function(){
			var id=this.getAttribute("for");
			if(!document.getElementById(id)) return false;
			var element=document.getElementById(id);
			element.focus();
		}
	}
}
addLoadEvent(focusLabels);


function resetField(whichform){
	for(var i=0;i<whichform.elements.length;i++)
	{
		var element=whichform.elements[i];
		if(element.type == 'submit') continue;
		check=element.placeholder || element.getAttribute('placeholder');
		if(!check) continue;
		element.onfocus=function(){
			var text=this.placeholder||this.getAttribute('placeholder');
			if(this.value==text){        
				this.className="";
				this.value="";
			}
		}
		element.onblur=function(){
			if(this.value==""){
				this.className='placeholder';
				this.value=this.placeholder||this.getAttribute('placeholder');
			}
		}
		element.onblur();
	}
}

function prepareForms(){
	for(var i=0;i<document.forms.length;i++){
		var thisform=document.forms[i];
		resetField(thisform);
	}
}
addLoadEvent(prepareForms);



/*
//检查用户是否已经填写内容
function isFilled(field){
	if(field.value.replace(' ','').length==0) return false;
	var placeholder=field.placeholder || field.getAttribute('placeholder');
	return (field.value != placeholder);
}

function isEmail(field){
	return (field.value.indexOf("@") !=-1  &&  field.value.indexOf(".") !=-1);
}

function validateForm(whichform){
	for(var i=0;i<whichform.elements.length;i++)
	{
		var element=whichform.elements[i];
		if(element.required=='required'){
			if(!isFilled(element)){
				alert("Please fill in the "+element.name+" field.");
				return false;
			}
		}
		if(element.type=='email'){
			if(!isEmail(element)){
				alert("The "+element.name+" field must be a valid email address.");
				return false;
			}
		}		
	}
	return true;
}

function getHTTPObject(){
	if(typeof XMLHttpRequest == "undefined")
	XMLHttpRequest = function(){
		try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
		 catch(e){}
		try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
		 catch(e){}
		try{return new ActiveXObject("Msxml2.XMLHTTP");}
		 catch(e){}
		return false;
	}
	return new XMLHttpRequest();
}
function displayAjaxLoading(element){
	while (element.hasChildNodes()){
		element.removeChild(element.lastChild);
	}
	var content=document.createElement("img");
	content.setAttribute("src","img/clearNew.jpg");
	content.setAttribute("alt","Loading...");
	element.appendChild(content);
}

function submitFormWithAjax(whichform, thetarget) {
	var request = getHTTPObject();
	if(!request) {
		return false;
	}
	displayAjaxLoading(thetarget);
	var dataParts = [];
	var element;
	for(var i = 0; i < whichform.elements.length; i++) {
		element = whichform.elements[i];
		dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
	}
	var data = dataParts.join('&');
	request.open('POST', whichform.getAttribute("action"), true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200 || request.status == 0) {
				var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
				if(matches.length > 0) {
					thetarget.innerHTML = matches[1];
				} else {
					thetarget.innerHTML = '<p>Oops, there was an error.Sorry.</p>';
				}
			} else {
				thetarget.innerHTML = '<p>' + request.statusText + '</p>';
			}
		}
	};
	request.send(data);
	return false;
}
*/
