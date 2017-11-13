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

//点击时图片选择

function pic(){
	var img=document.getElementsByTagName('img'),
	    ul=document.getElementsByTagName('ul'),
	    li=ul[0].getElementsByTagName('li'),
		i=0,
		ula=ul[0].getElementsByTagName('a'),
		fes=document.getElementById('fes'),
		fesa=fes.getElementsByTagName('a');
	
	img[0].onclick=function(){
		
		img[0].style.transform='rotate(180deg)';
		i++;
		if(i%2){
			ul[0].style.display='block';
			
		}
		else{
			img[0].style.transform='rotate(360deg)';
			ul[0].style.display='none';
		}
		for(var j=0;j<ula.length;j++){
			ula[j].onclick=function(){//ula[j]：国庆或中秋
				
				
				img[0].style.transform='rotate(360deg)';
				ul[0].style.display='none';
				
				var nV=this.lastChild.nodeValue;//能获取到选项
				fesa[0].lastChild.nodeValue=nV;
				
				
				/*var input=document.getElementsByTagName('input');
				input[0].setAttribute("onclick","display()");*/
				
			}
		}	
}
}

function display(){
	
	/*var tdy=new Date(),
	date0=new Date(2017,10,1,0,0,0);//国庆
	date1=new Date(2017,10,4,0,0,0);//中秋
	alert(date0.getDay()-tdy.getDay());*/
	
	var tdy=new Date();
	var today=tdy.getTime();//当前时间距离格林尼治时间的毫秒数
	
	if(nV=='国庆'){
		var nat=new Date(2017,10,1,0,0,0);
		var nation=nat.getTime();
		var cha1=parseInt((nation-today)/1000/60/60/24);	
		alert("离国庆还有"+cha1+"天");
	}else if(nV=='中秋')
		{
		var aut=new Date(2017,10,4,0,0,0);
		var autumn=nat.getTime();
		var cha2=parseInt((autumn-today)/1000/60/60/24);	
		alert("离国庆还有"+cha2+"天");
		}
	
}

















	
addLoadEvent(pic);	










