var oBtn1 = document.getElementById('btn1');
var oBtn2 = document.getElementById('btn2');
var oDiv = document.getElementById('square');

oBtn1.onclick = function () {
	
	clearInterval( oDiv.timer );
	
	oDiv.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( oDiv, 'left' )) - 15;			
		
		if ( speed < 15 ) {
			speed = 15;
		}
		
		oDiv.style.left = speed + 'px';
		
		if ( speed == 15 ) {
			clearInterval( oDiv.timer );
		}
		
	}, 30);
};

oBtn2.onclick = function () {
	
	clearInterval( oDiv.timer );
	
	oDiv.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( oDiv, 'left' )) + 15;			
		
		if ( speed > 800 ) {
			speed = 800;
		}
		
		oDiv.style.left = speed + 'px';
		
		if ( speed == 800 ) {
			clearInterval( oDiv.timer );
		}
		
	}, 30);
};

function getStyle ( obj, attr ) { 
	return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; 
}
