var container=document.getElementById('container');
var li=container.getElementsByTagName('li');
var span=document.getElementById('startbutton');
var message=document.getElementById('message');
var timer=null;
var beReady=true;//抽奖开关
var prize=[0,1,2,4,7,6,5,3];//转圈顺序
var num=0;//num用来存放得到的随机函数，也就是抽中的奖品
//开始抽奖
function startlottery(){
	if (beReady){//可抽奖
		message.style.display="none";//将获奖信息div隐藏（以防止上次抽奖信息还显示）
		beReady=false;//开关关闭，不能点击抽奖
		span.style.background="#ada7a8";
		num=getrandomnum(1,9);//得到一个随机数（即奖品）
		startinit(num);//执行抽奖初始化
	}
}
//抽中的奖品 返回1-9的整数，包含1，不包含9
function getrandomnum(n,m){
	return parseInt((m-n)*Math.random()+n);
}
//抽奖初始化
function startinit(num){
	var i=0;//抽奖跑动的总次数
	var t=200;//标记跑动的次数（这是一个条件判断分界线）
	var rounds=5;//抽奖转动的圈数
	var rNum=rounds*8;//总次数
	timer=setTimeout(startscroll,t); //每t毫秒执行startscroll函数
	function startscroll(){
		//每次滚动抽奖将所有li的class都设为空
		for(var j=0;j<li.length;j++){
			li[j].className=''
		}
		////通过i余8得到此刻在prize数组中的数字，该数字就是mask标记出现的位置
		var prizenum=prize[i%li.length];
		li[prizenum].className="active";
		i++;
		if(i<rNum-8){//当i小于转(rNum-8次)的数量，t不变还是200毫秒
			timer=setTimeout(startscroll,t); //继续执行抽奖滚动
		}else if(i>=rNum-8&&i<rNum+num){
			//t时间变长，此时计时器运行速度降低，同时标签刷新速度也降低
			t+=(i-rNum+8)*5;
			timer=setTimeout(startscroll,t);//继续执行抽奖滚动
		}
		if(i>=rNum+num){//当i大于转rNum加随机数字num次计时器结束，出现提示框提示中奖信息
			if (num==1){
				message.innerHTML="恭喜你中了中国结";
			}
			else if (num==2){
				message.innerHTML="恭喜你中了夜光熊";
			}
			else if (num==3){
				message.innerHTML="恭喜你中了大象";
			}
			else if (num==4){
				message.innerHTML="恭喜你中了巧克力";
			}
			else if(num==5){
			 message.innerHTML="恭喜你中了平安符";
			}
			else if (num==6){
				message.innerHTML="恭喜你中了星星杯";
			}
			else if (num==7){
				message.innerHTML="恭喜你中了笑脸";
			}
			else if (num==8){
				message.innerHTML="恭喜你中了大礼包";
			}
			var timer2=null;
			timer2=setTimeout(function(){
				message.style.display="block";//奖品展示的信息为显示状态
				span.style.background="red";
				clearTimeout(timer2);
			},1000);
			beReady=true;//当计时器结束后让span标签变为抽奖状态
			clearTimeout(timer)
		}
	}
	
}
