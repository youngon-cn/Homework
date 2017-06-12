

function show_hidden(tried){
	if(tried.style.display=='block'){
		tried.style.display='none';
	}
	else{
		tried.style.display='block';
	}
}
function displaysubmenu(li){
	var submenu=li.getElementsByTagName("ul")[0];
	submenu.style.display="block";
}
function hidesubmenu(li){
	var submenu=li.getElementsByTagName("ul")[0];
	submenu.style.display="none";
}
function setTab(name,m,n){
	for(var i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var showDiv=document.getElementById("cont_"+name+"_"+i);
		menu.classname= i==m?"on":"";
		showDiv.style.display=i==m?"block":"none";
	}
}
