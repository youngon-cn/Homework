var loolPlayInit=(function(){
	var $butLeft = null,
		$butRight = null,
		$butPlay = null,  
		$imglist = null,
		origin=['125px','600px'],
		imgAll=createImg([['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],['img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg'],['img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg']]),
		imgArrIndex = 0,
		imgAng = 45;
		
		
		
	function init(){
		$butLeft = $(".butLeft"),
		$butRight = $(".butRight"),
		$butPlay = $(".butPlay"),
		$imglist = $(".mainbox ul li");
		
		configer();
		setEvent();
	}
	function configer(){
		var ang = 6,
			aint = -6;
			$imglist.transform({origin:origin});
		$imglist.each(function(i){
			var $this = $(this);
			$this.transform({rotate:aint+(i*ang)+"deg"});
		})
	}
	
	function setEvent(){
		$butLeft.bind("click",function(){
			anigo(- 1);
			return false;
		})
	}
	function setEvent(){
		$butRight.bind("click",function(){
			anigo(1);
			return false;
		})
	}
	function setEvent(){
		$butPlay.bind("click",function(){
			
			return false;
		})
	}
	
	function createImg(arr){
		var imgArr=[];
		for (var i in arr){
			imgArr[i]=[];
			for (var x in arr[i]) {
				imgArr[i][x]=new Image();
				imgArr[i][x].src=arr[i][x];
			}
		}
		return imgArr;
	}
	
	function anigo(d){
		imgArrIndex+=d;
		$imglist.each(function(i){
			var $thisItme=$(this);
			var $thisimg=$thisItme.children('img');
			var $targeImg = $(imgAll[imgArrIndex][i]);
			$thisItme.append($targeImg);
			$targeImg.transfrom({origin:origin,rotate:(0-d)*imgAng+"deg"});
			
			$thisimg.animate({rotate:imgAng*d+"deg"});
			$targeImg.animate({rotate:"0deg"});
		})
	}
	
	return init;
})();

loolPlayInit();
 
//这个听了听不大懂，中间有问题效果出不来，最后也没找到问题，所以没继续做