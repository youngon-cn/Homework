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

function stripeTable(){
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName("table");
	for(var i=0;i<tables.length;i++)
	{
		var odd=false,
		    rows=tables[i].getElementsByTagName("tr");
		for(var j=0;j<rows.length;j++)
		{
			if(odd == true){
				addClass(rows[j],"odd");
				odd=false;
			}
			else odd=true;
		}
	}
}

function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows=document.getElementsByTagName("tr");
	for(var i=0;i<rows.length;i++)
	{
		rows[i].oldClassName=rows[i].className;         
		rows[i].onmouseover=function(){
			addClass(this,"highlight");
		}
		rows[i].onmouseout=function(){
			this.className=this.oldClassName;
		}
	}
}

function displayAbbreviations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	var abbreviations=document.getElementsByTagName("abbr"),
	    defs=new Array();                 
	for(var i=0;i<abbreviations.length;i++)
	{
		var current_abbr=abbreviations[i],
		    definition=current_abbr.getAttribute("title"),
		    key=current_abbr.lastChild.nodeValue;
		defs[key]=definition;
	}
	var dlist=document.createElement("dl");
	for(key in defs)
	{
		var dtitle=document.createElement("dt"),
		    dtitle_text=document.createTextNode(key),
		    ddesc=document.createElement("dd"),
		    ddesc_text=document.createTextNode(defs[key]);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
		dtitle.appendChild(dtitle_text);
		ddesc.appendChild(ddesc_text);
	}
	var header=document.createElement("h3"),
	    header_text=document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	var articles=document.getElementsByTagName("article");
	articles[0].appendChild(header);
	articles[0].appendChild(dlist);
}
addLoadEvent(stripeTable);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);

