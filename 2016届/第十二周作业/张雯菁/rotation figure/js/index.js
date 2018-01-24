window.onload = function(){
	var container = document.getElementById('container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var timer;
	
	function showButton() {
		for (var i = 0; i < buttons.length;  i++){
			if (buttons[i].className == 'on'){
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'on';
	}
	
	function animate(offset){
		var newLeft = parseInt(list.style.left) + offset;
		var time = 300;
		var interval = 10;
		var speed = offset/(time/interval);
		
		list.style.left = newLeft + offset + 'px';
	
		if (newLeft > -614){
			list.style.left = -3082 + 'px';
		}
		if (newLeft < -3082){
			list.style.left = -614 + 'px';
		}
	}
	
	function play(){
		setInterval(function(){
			next.onclick();
		},5000);
	}
	
	function stop(){
		clearInterval(timer);
	}
	
	next.onclick = function(){
		if (index == 5){
			index = 1;
		}
		else{
			index += 1;
		}
		
		showButton();
		animate(-617);
	}
	
	prev.onclick = function(){
		if (index == 1){
			index = 5;
		}
		else{
			index -= 1;
		}
		showButton();
		animate(617);
	}
	
	for (var i = 0; i < buttons.length;  i++){
		buttons[i].onclick = function(){
			if (this.className == 'on'){
				return;
			}
			
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -614*(myIndex - index);
			
			animate(offset);
			index = myIndex;
			showButton();
		}
	}	
	
}



//这段写出来图片轮换有问题，一下就会换两张，就没有加进去
/*var newLeft = parseInt(list.style.left) + offset;
		
		
		function go(){
			if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(go, interval);
		    }
		    else{
				list.style.left = newLeft + offset + 'px';
			
				if (newLeft > -614){
					list.style.left = -3082 + 'px';
				}
				if (newLeft < -3082){
					list.style.left = -614 + 'px';
				}
			}
		}    
		go();*/