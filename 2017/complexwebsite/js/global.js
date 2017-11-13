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

function moveElement(elementID,final_x,final_y,interval){
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left="0px";
	}
	if(!elem.style.top){
		elem.style.top="0px";
	}
	var xpos=parseInt(elem.style.left),
	    ypos=parseInt(elem.style.top);
	if(xpos == final_x && ypos == final_y){
		return true;
	}
	if(xpos < final_x){
		var dist=Math.ceil((final_x-xpos)/10);
		xpos+=dist;
	}
	if(xpos > final_x){
		var dist=Math.ceil((xpos-final_x)/10);
		xpos-=dist;
	}
	if(ypos < final_y){
		var dist=Math.ceil((final_y-ypos)/10);
		ypos+=dist;
	}
	if(ypos > final_y){
		var dist=Math.ceil((ypos-final_y)/10);
		ypos-=dist;
	}
	elem.style.left=xpos+'px';
	elem.style.top=ypos+'px';
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);
}


function prepareSlideshow() {
	if(!document.getElementById) return false;
	if(!document.createElement) return false;
	var intro = document.getElementById("intro"),
		slideshow = document.createElement("div"),
		preview = document.createElement("img");
	slideshow.setAttribute("id", "slideshow");
	preview.setAttribute("id", "preview");
	preview.setAttribute("src","img/750 150jianying.jpg");
	preview.setAttribute("alt", "a glimpse of what awaits you");
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);
    var links=document.getElementsByTagName("a"),
		destination;
	for(var i = 0; i < links.length; i++) {
		links[i].onmouseover = function() {
			destination = this.getAttribute("href");
			if(destination.indexOf("index.html") != -1) {
				moveElement("preview", 0, 0, 5);
			}
			if(destination.indexOf("contact.html") != -1) {
				moveElement("preview", -150, 0, 5);
			}
			if(destination.indexOf("live.html") != -1) {
				moveElement("preview", -300, 0, 5);
			}
			if(destination.indexOf("photo.html") != -1) {
				moveElement("preview", -450, 0, 5);
			}
			if(destination.indexOf("about.html") != -1) {
				moveElement("preview", -600, 0, 5);
			}

		}
	}
}

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);

