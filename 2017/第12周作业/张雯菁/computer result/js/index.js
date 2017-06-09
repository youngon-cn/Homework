window.onload = function () {
	var oUl = document.getElementById('list');
	var aLi = oUl.getElementsByTagName('li');
	var aEm = document.getElementsByTagName ('em');
	var oStrong = document.getElementsByTagName ('strong')[0];
	var total = 0;
	var countprice = 0;
	var max = 0;

	for ( var i = 0; i < aLi.length; i++ ) {
		shop( aLi[i] );
	}
	
	function shop (obj) {
		var aInp = obj.getElementsByTagName('input');
		var aSpan = obj.getElementsByTagName ('span');
		var num = parseInt(aSpan[0].innerHTML);
		var price = parseFloat(aSpan[1].innerHTML);
		
		aInp[0].onclick = function () {
			if ( num <= 0 )return;
			num--;
			aSpan[0].innerHTML = num;
			aSpan[2].innerHTML = num*price + '元';
			total--;
			countprice-=price;
			aEm[0].innerHTML = total;
			oStrong.innerHTML= countprice;
			setmax();
			
		}
		
		aInp[1].onclick = function () {
			num++;
			aSpan[0].innerHTML = num;
			aSpan[2].innerHTML = num*price + '元';
			total++;
			countprice+=price;
			aEm[0].innerHTML = total;
			oStrong.innerHTML= countprice;
			setmax();
			
		}
	}
	
	function setmax(){
		max = 0;
		
		for ( var i = 0; i < aLi.length; i++ ) {
			var aSpan = aLi[i].getElementsByTagName ('span');
			
			if (aSpan[0].innerHTML > 0){
				if(max < parseFloat(aSpan[1].innerHTML)){
					max = parseFloat(aSpan[1].innerHTML);
				}
			}
		
		}
		
		aEm[1].innerHTML = max;
	}
	
}