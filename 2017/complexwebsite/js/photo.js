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

function preparePlaceholder(){
	if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
	var description=document.createElement("p"),
	    desctext=document.createTextNode("Choose an image"),
	    placeholder=document.createElement("img");
	description.setAttribute("id","description");
	description.appendChild(desctext);
	placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("alt","my image gallery");
    placeholder.setAttribute("src","img/placeholder.jpg");
    var gallery=document.getElementById("imagegallery");
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}

function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	var gallery=document.getElementById("imagegallery"),
	    links=gallery.getElementsByTagName('a');
	for(var i=0;i<links.length;i++)
	{
		links[i].onclick=function(){
			return showPic(this);
		}
	}
}

function showPic(whichpic){
	if(!document.getElementById) return false;
	var source=whichpic.getAttribute("href"),
	    placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(whichpic.getAttribute("title")){
		var text=whichpic.getAttribute("title");
	}else{
		var text="";
	}
	var description=document.getElementById("description");
	description.lastChild.nodeValue=text;
	return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

