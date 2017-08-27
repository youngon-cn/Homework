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

//添加className
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

//给当前页面添加here类     页面突出显示
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

function showSection(id){
	var sections=document.getElementsByTagName("section");
	for(var i=0;i<sections.length;i++)
	{
		if(sections[i].getAttribute("id") != id){
			sections[i].style.display = "none";
		}else{
			sections[i].style.display = "block";
		}
	}
}

function prepareInternalnav(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var articles=document.getElementsByTagName("article");
	if(articles.length == 0) return false;
	var navs=articles[0].getElementsByTagName("nav");
	if(navs.length == 0) return false;
	var nav=navs[0];
	var links=nav.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		var sectionId=links[i].getAttribute("href").split("#")[1];
		if(!document.getElementById(sectionId)) continue;
		document.getElementById(sectionId).style.display="none";
		links[i].destination=sectionId;
		links[i].onclick=function(){
			showSection(this.destination);
			return false;
		}
	}
}

addLoadEvent(highlightPage);
addLoadEvent(prepareInternalnav);

