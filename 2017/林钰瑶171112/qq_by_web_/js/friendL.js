function li(){
	var li=$t('li');
	for(var i=0;i<li.length;i++){
		li[i].onmouseover=function(){
			this.style.color="red";
			this.style.cursor="hand";
		}
		li[i].onmouseout=function(){
			this.style.color="black";
		}
		li[i].onclick=function(){
			window.open("chatRoom.php?myFriend="+encodeURI(this.innerText));
		}
	}
}
li();