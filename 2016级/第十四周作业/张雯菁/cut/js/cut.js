window.onload = function(){
	var rightDiv = document.getElementById("right");
	var upDiv = document.getElementById("up");
	var leftDiv = document.getElementById("left");
	var downDiv = document.getElementById("down");
	var leftUpDiv = document.getElementById("left-up");
	var leftDownDiv = document.getElementById("left-down");
	var rightUpDiv = document.getElementById("right-up");
	var rightDownDiv = document.getElementById("right-down");
	var mainDiv = document.getElementById("main"); 
	var ifKeyDown = false;
	var contact = "";
	
	rightDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "right";
	}
	
	upDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "up";
	}
	
	leftDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "left";
	}
	
	downDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "down";
	}
	
	leftUpDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "leftUp";
	}
	
	leftDownDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "leftDown";
	}
	
	rightUpDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "rightUp";
	}
	
	rightDownDiv.onmousedown = function(e){
		e.stopPropagation();
		ifKeyDown = true;
		contact = "rightDown";
	}
	
	window.onmouseup = function(e){
		ifKeyDown = false;
	}
	
	window.onmousemove = function(e){
		
		if(ifKeyDown == true){
			switch(contact){
				case "right":
					rightMove(e);
				break;
				case "up":
					upMove(e);
				break;
				case "left":
					leftMove(e);
				break;
				case "down":
					downMove(e);
				break;
				case "leftUp":
					leftMove(e);
					upMove(e);
				break;
				case "leftDown":
					leftMove(e);
					downMove(e);
				break;
				case "rightUp":
					rightMove(e);
					upMove(e);
				break;
				case "rightDown":
					rightMove(e);
					downMove(e);
				break;
			}
			
			setChoice();
			setPreview();
		}
		
	}	
	function rightMove(e){
		mainDiv.style.width = e.clientX - getPosition(mainDiv).left + "px";
	}
	
	function upMove(e){
		var addHeight = getPosition(mainDiv).top - e.clientY;
		var heightBefore = mainDiv.offsetHeight - 2;
		mainDiv.style.height = heightBefore + addHeight  + "px";
		mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
		
	}
	
	function leftMove(e){
		var addWidth = getPosition(mainDiv).left - e.clientX;
		var widthBefore = mainDiv.offsetWidth - 2;
		mainDiv.style.width = widthBefore + addWidth + "px";
		mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
	}
	
	function downMove(e){
		var heightBefore = mainDiv.offsetHeight - 2;
		var addHeight = e.clientY - heightBefore - getPosition(mainDiv).top;
		mainDiv.style.height = addHeight + heightBefore + "px";
	}
	
	function getPosition(node){
		var left = node.offsetLeft;
		var top = node.offsetTop;
		var parent = node.offsetParent;
		while(parent != null){
			left += parent.offsetLeft;
			top += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return{"left":left,"top":top};
	}
	
	function setChoice(){
		var top = mainDiv.offsetTop;
		var left = mainDiv.offsetLeft;
		var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
		var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
		var img2 = document.getElementById("img2");
		img2.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)"
	}
	
	function setPreview(){
		var top = mainDiv.offsetTop;
		var left = mainDiv.offsetLeft;
		var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
		var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
		var img3 = document.getElementById("img3");
		img3.style.top = -top + "px";
		img3.style.left = -left + "px";
		img3.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)"
	}
	
}


