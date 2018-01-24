
window.onload=function(){
	document.onselectstart=new Function('event.returnValue=false;');
	var rightDiv=document.getElementById("right");
    var mainDiv=document.getElementById("main");
    var upDiv=document.getElementById("up");
    var leftDiv=document.getElementById("left");
    var downDiv=document.getElementById("down");
    var leftUpDiv=document.getElementById("left-up");
    var rightUpDiv=document.getElementById("right-up");
    var rightDownDiv=document.getElementById("right-down");
    var leftDownDiv=document.getElementById("left-down");
    var ifKeyDown=false;
    var contact="";//被按下的触点
    
    rightDiv.onmousedown=function(){
    	ifKeyDown=true;
    	contact="right";
    }
    upDiv.onmousedown=function(){
    	ifKeyDown=true;
    	contact="up";
    }
    leftDiv.onmousedown=function(){
    	ifKeyDown=true;
    	contact="left";
    }
    downDiv.onmousedown=function(){
    	ifKeyDown=true;
    	contact="down";
    }
    leftUpDiv.onmousedown=function(){
    	ifKeyDown=true;
    	contact="left-up";
    }
    rightUpDiv.onmousedown=function(){
    	ifKeyDown=true;
    	contact="right-up";
    }
    rightDownDiv.onmousedown=function(){
    	ifKeyDown=true;
    	contact="right-down";
    }
    leftDownDiv.onmousedown=function(){
    	ifKeyDown=true;
    	contact="left-down";
    }

    
    window.onmouseup=function(){
    	ifKeyDown=false;
    }
    window.onmousemove=function(e){
    	if(ifKeyDown==true){
    		switch(contact){
    			case "right":rightMove(e);break;
    			case "up":upMove(e);break;
    			case "left":leftMove(e);break;
    			case "down": downMove(e);break;
    			case "left-up":leftMove(e);upMove(e);break;
    			case "right-up":rightMove(e);upMove(e);break;
    			case "right-down":rightMove(e);downMove(e);break;
    			case "left-down":leftMove(e);downMove(e);break;
    		}   		
    	}
	    setChoice();
    }
    
    function rightMove(e){
	var x=e.clientX;
	var addWidth="";
    var widthBefore=mainDiv.offsetWidth-2;
    addWidth=x-getPosition(mainDiv).left-widthBefore;
    mainDiv.style.width=addWidth+widthBefore+"px";
}
function upMove(e){
	var y=e.clientY;
    var mainY=getPosition(mainDiv).top;//选取框相对于屏幕上边的距离
    var addHeight=mainY-y;
    var heightBefore=mainDiv.offsetHeight-2;
    mainDiv.style.height=heightBefore+addHeight+"px";
    mainDiv.style.top=mainDiv.offsetTop-addHeight+"px";						
}
function leftMove(e){
	    		    var x=e.clientX;
    		    	var mainX=getPosition(mainDiv).left;
    		    	var addWidth=mainX-x;
    		    	var widthBefore=mainDiv.offsetWidth-2;
    		    	mainDiv.style.width=widthBefore+addWidth+"px";
    		    	mainDiv.style.left=mainDiv.offsetLeft-addWidth+"px";
}
function downMove(e){
    		    	var y=e.clientY;
    			    var heightBefore=mainDiv.offsetHeight-2;
    			    var mainY=getPosition(mainDiv).top;
    			    var addHeight=y-heightBefore-mainY;
    			    mainDiv.style.height=addHeight+heightBefore+"px";	
}


function getPosition(node){
	var left=node.offsetLeft;
	var top=node.offsetTop;
	var parent=node.offsetParent;
	while(parent!=null){
		left+=parent.offsetLeft;
		top+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	return {"left":left,"top":top};
}

//设置选取区域高亮可见
function setChoice(){
	var top=mainDiv.offsetTop;
	var right=mainDiv.offsetLeft+mainDiv.offsetWidth;
	var bottom=mainDiv.offsetTop+mainDiv.offsetHeight;
	var left=mainDiv.offsetLeft;
	var img2=document.getElementById("img2");
	img2.style.clip="rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
}
}

