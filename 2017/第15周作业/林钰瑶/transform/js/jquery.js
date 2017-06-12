var loopPlayerInit=(function(){
	var $butLeft=null,
	$butRight=null,
	$butPlay=null,
	$imglist=null;
	origin=['125px','600px'],
	imgOrigin=['125px','800px']
	imgAll=[['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],['img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg'],['img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg']],
	imgArrIndex=0,
	imgAng=45;
	imgTime=300,
	rotating=false;
	
	
	function init(){
		$butLeft=$("butLeft"),
	    $butRight=$("butRight"),
	    $butPlay=$("butPlay"),
	    $imglist=$(".mainbox ul li");
	    
	    configer(); 
	    setEvent();
	}
	function configer(){
		var ang=5,
		aint=-5;
		$imglist.transform({origin:origin})
		$imglist.each(function(i){
			var $this=$(this);
			$this.transform({rotate:aint+(i*ang)+"15deg"});
		})
	}
	function setEvent(){
		$butLeft.bind("click",function(){
			anigo(-1);
			return false;
		})
		$butRight.bind("click",function(){
			anigo(1);
			return false;
		})
		$butPlay.bind("click",function(){
			
			return false;
		})
	}
	function creatImg(arr){
		var imgArr=[];
		for(var i in arr){
			imgArr[i]=[];
			for(var x in arr[i]){
				imgArr[i]{x}=new Image();
				imgArr[i][x].src=arr[i][x];
			}
		}
		return imgArr;
	}
	function anigo(d){
		if(rotating)return false;
		rotating=true;
		imgArrIndex+=d;
		
		if(imgArrIndex>imgAll.length-1){
			imgArrIndex=0;
		}else if(imgArrIndex<0){
			imgArrIndex=imgAll.length-1;
		}
		
		$imglist.each(function(i){
			var $thisItme=$(this);
			var $thisimg=$thisItme.children("img");
			var $targetImg=$(imgAll[imgArrIndex][i]);
			var thisTime=(d===1)?imgTime*i:imgTime*($imglist.length-1-i);
			
			$thisItme.append($targetImg);
			$thisimg.transform({origin:imgOrigin});
			$targetImg.transform({origin:imgOrigin,rotate:(0-d)*imgAng+"deg"});
			setTimeout(function(){
				$thisimg.animate({rotate:imgAng*d+"deg"});
			    $targetImg.animate({rotate:"0deg"},500,function(){
				$thisimg.remove();
				if(thisTime==(($imglist.length-1)*imgTime)){
					rotating=false;
				}
				
			    }); 
			},thisTime);
		})
	}
	
	return init;
})();

loopPlayerInit();
