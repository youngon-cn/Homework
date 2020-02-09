//Food.js
(function(){
	var element=[];
	function Food(width,height,color){
		this.width= width || 20;
		this.height=height || 20;
		this.color=color ||'pink';
		this.x=0;
		this.y=0;
	}
	//随机创建食物对象,渲染到map上
	Food.prototype.init=function(map){
		remove();
		//创建div、设置css样式
		var div=document.createElement('div')
		div.style.position='absolute';
		div.style.width=this.width+'px';
		div.style.height=this.height+'px';
		div.style.backgroundColor =this.color;
			//食物随机位置(map.offsetWidth/this.width总共多少份)
			this.x=(Math.floor(Math.random()*map.offsetWidth/this.width)*this.width);
			this.y=(Math.floor(Math.random()*map.offsetHeight/this.height)*this.height);
		//position/left/top/位置
		div.style.left= this.x+'px'; 
		div.style.top= this.y+'px';
		//追加给map
		map.appendChild(div);
		element.push(div);
	}
	function remove(){
		element.forEach(function(item,i){
			item.parentNode.removeChild(item);
		})
		element.length=0;
	}
	window.Food=Food;
}());
//Snake.js
(function(){
	var element=[];
	function Snake(width,height,direction){
		this.width=width||20;
		this.height=height || 20;
		this.direction = direction ||'right';//设定初始蛇移动方向
		this.obj=[
			{x:3,y:2,color:'red'},
			{x:2,y:2,color:'#F06868'},
			{x:1,y:2,color:'#F06868'}
		];
	}
	//随机创建蛇对象,渲染到map上
	Snake.prototype.init=function(map){
		remove();
		for (var i = 0; i < this.obj.length; i++) {
			//创建div、设置css样式/追加给map
			var div=document.createElement('div')
			map.appendChild(div);
			div.style.position='absolute';
			div.style.width=this.width+'px';
			div.style.height=this.height+'px';
			div.style.backgroundColor =this.obj[i].color;
			//position/left/top/位置
			div.style.left=this.obj[i].x*this.width+'px';
			div.style.top=this.obj[i].y*this.height+'px';
			element.push(div);
		}
	}
	Snake.prototype.move=function(food,map){
		//蛇节移动
		for (var i = this.obj.length-1; i > 0;i--) {
			this.obj[i].x=this.obj[i-1].x;
			this.obj[i].y=this.obj[i-1].y;
		}
		//蛇头移动方向
		switch(this.direction){
			case 'right': this.obj[0].x+=1; break;
			case 'left': this.obj[0].x-=1;  break;
			case 'top': this.obj[0].y-=1;  break;
			case 'bottom': this.obj[0].y+=1;  break;
		}
		var headX=this.obj[0].x*this.width;
		var headY=this.obj[0].y*this.height;
		//吃到食物增长
		if(headX==food.x && headY == food.y){
			var last=this.obj[this.obj.length-1];
			this.obj.push({
				x:last.x,
				y:last.y,
				color:last.color
			})
		food.init(map);//调用函数,重新绘制food
		}
	}
	function remove(){
		//从最大值开始删除，采用递减的方法，删除节点
		for (var i = element.length-1; i>=0; i--) {
			element[i].parentNode.removeChild(element[i]);
		}
		element.length=0;
	}
	window.Snake=Snake;
}());

(function(){
	var that=null;
	var timeId;
	function Game(map){
		this.food=new Food();
		this.snake=new Snake();
		this.map=map;
		that=this;
	}
	Game.prototype.init=function(){
		this.food.init(this.map)
		this.snake.init(this.map)
		this.runSnake(this.food,this.map)
		this.bindKey();
	}
	Game.prototype.runSnake=function(food,map){
		//setInterval(全局变量，时间)/小蛇移动速度/让小蛇动起来
		timeId= setInterval(function(){
			this.snake.move(food,map);
			var flag=isGameOver();
			if(flag){
				return;
			}
			this.snake.init(map);
		}.bind(that),150)
	}
	//键盘事件,控制方向
	Game.prototype.bindKey=function(){
		document.addEventListener('keydown',function(e){
			switch(e.keyCode){
				case 37:
					if(this.snake.direction==='right') return; 
					this.snake.direction='left';  
				break;
				case 38:
					if(this.snake.direction==='bottom') return; 
					this.snake.direction='top'
				break;
				case 39:
					if(this.snake.direction==='left') return;
					this.snake.direction='right'
				break;
				case 40:
					if(this.snake.direction==='top') return;
					this.snake.direction='bottom';
				break;
			}
		}.bind(that),false)
	}
	function isGameOver(){
		var maxX=that.map.offsetWidth / that.snake.width;
		var maxY=that.map.offsetHeight / that.snake.height;
		var head=that.snake.obj[0];
		//超出地图范围"game over"
		if(head.x<0 || head.x >= maxX || head.y< 0 || head.y >= maxY){
			clearInterval(timeId)
			alert('game over');
			return true;
		}
	}
	window.Game=Game;
}());