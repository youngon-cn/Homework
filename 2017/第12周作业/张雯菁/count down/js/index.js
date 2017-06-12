window.onload = function(){
	showtime();
}

function checktime(i){
    	return i < 10 ? "0" + i : i;
}

function  showtime() {
	var aInp = document.getElementsByTagName('input');
	var nowtime = new Date();
	var endtime = new Date(aInp[0].value);
	var t = parseInt((endtime.getTime()-nowtime.getTime())/1000);
	var d = parseInt(t/(24*60*60));
	var h = parseInt((t/(60*60))%24);
	var m = parseInt((t/60)%60);
	var s = parseInt(t%60);
	var t = 0;
	var str = '';
	var timer = null;
	m = checktime(m);
	s = checktime(s);

	aInp[2].onclick = function () {
		clearInterval( timer );
		
		timer = setInterval (function (){
		
			if ( t >= 0 ) {
				
				str = d+"天"+h+"小时"+m+"分"+s+"秒";
				
				aInp[1].value = str;
					
				} 
			else {
					
				clearInterval(timer);
					
			}
		
		},1000);
		
	};
	
};



