/*window.onload = function(){
	var mouseOffsetX = 0;
	var mouseOffsetY = 0;
	var isDraging = false;
	var mainDiv = document.getElementById("main"); 
	
	mainDiv.addEventListener('mousedown',function(e){
		var e = e || window.event;
		mouseOffsetX = e.pageX - mainDiv.offsetLeft;
		mouseOffsetY = e.pageY - mainDiv.offsetTop;
		isDraging = true;
	})
		
	document.onmousemove = function(e){
		var e = e || window.event;
		
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		
		var moveX = 0;
		var moveY = 0;
		
		if(isDraging = true){
			moveX = mouseX - mouseOffsetX;
			moveY = mouseY - mouseOffsetY;
			
			mainDiv.style.left = moveX + "px";
			mainDiv.style.top = moveY + "px";
		}
	}
	
	document.onmouseup = function(){
		isDraging = false;
	}
}*/


