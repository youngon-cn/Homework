var container = document.getElementById('container'),
	li = container.getElementsByTagName('li'),
	span = document.getElementById('startbutton'),
	message = document.getElementById('message'),
	timer = null;
bReady = true; //抽奖开关
var prize = [0, 1, 2, 4, 7, 6, 5, 3]; //奖品li标签滚动的顺序
var num = 0;
//开始抽奖
function startlottery() {
	if (bReady) { //当抽奖开关为true的时候，可点击抽奖
		message.style.display = "none"; //将获奖信息div隐藏（以防止上次抽奖信息还显示）
		span.style.background = "#ada7a8";
		bReady = false; //抽奖开关设为false 处于抽奖中 即不能点击抽奖
		num = Math.floor(Math.random() * 8) + 1; //取【1，9）的随机整数, 得到一个随机数（即奖品）
		console.log(num)
		startinit(num); //执行抽奖初始化
	}
}

//抽奖初始化
function startinit(num) {
	var i = 0; //定义一个i 用来计算抽奖跑动的总次数
	var t = 100; //抽奖跑动的速度 初始为100毫秒
	var rounds = 5; //抽奖转动的圈数
	var rNum = rounds * 8; //标记跑动的次数（这是一个条件判断分界线）
	timer = setTimeout(startscroll, t); //每t毫秒执行startscroll函数


	//抽奖滚动的函数
	function startscroll() {
		for (var j = 0; j < li.length; j++) {
			li[j].className = '';
		}
		var prizenum = prize[i % 8]; //通过i余8得到此刻在prize数组中的数字，该数字就是mask标记出现的位置
		li[prizenum].className = "active";
		i++;
		if (i < rNum - 8) { //当i小于转(rNum-8次)的数量，t不变还是100毫秒
			timer = setTimeout(startscroll, t); //继续执行抽奖滚动
		} else if (i >= rNum - 8 && i < rNum + num) {
			//t时间变长，此时计时器运行速度降低，同时标签刷新速度也降低
			t += (i - rNum + 8) * 5;
			timer = setTimeout(startscroll, t); //继续执行抽奖滚动
		}
		if (i >= rNum + num) { //当i大于转rNum加随机数字num次计时器结束，出现提示框提示中奖信息
			if (num == 1) {
				message.innerHTML = "恭喜你抽中波斯猫";
			} else if (num == 2) {
				message.innerHTML = "恭喜你抽中折耳猫";
			} else if (num == 3) {
				message.innerHTML = "恭喜你抽中奶牛猫";
			} else if (num == 4) {
				message.innerHTML = "恭喜你抽中橘猫";
			} else if (num == 5) {
				message.innerHTML = "恭喜你抽中英国短毛猫";
			} else if (num == 6) {
				message.innerHTML = "恭喜你抽中布偶猫";
			} else if (num == 7) {
				message.innerHTML = "恭喜你抽中狸花猫";
			} else if (num == 8) {
				message.innerHTML = "恭喜你抽中三花猫";
			}

			var timer2 = null;
			timer2 = setTimeout(function() {
				message.style.display = "block"; //奖品展示的信息为显示状态
				span.style.background = "gold";
				clearTimeout(timer2);
			}, 1000);
			bReady = true; //当计时器结束后让span标签变为抽奖状态
			clearTimeout(timer);
		}
	}
}
