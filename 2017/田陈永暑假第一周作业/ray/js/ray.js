var starB = false;
var mine = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
var jadge = [-1, 0, 1]
var jadges = [-1, 0, 1]

function getid(id) {
	return document.getElementById(id);
}

function getTag(parent, chlid) {
	return parent.getElementsByTagName(chlid);
}

function getstyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

function ray(box) {
	var jadgeh = 1;
	mineray = document.createElement("div")
	mineray.id = "mine";
	box.appendChild(mineray)
	for(var i = 0; i < mine.length; i++) {
		var raysi = document.createElement("div");
		raysi.className = "rays";
		mineray.appendChild(raysi);
		for(var t = 0; t < mine[i].length; t++) {
			var raysli = document.createElement("li");
			var rayimg = document.createElement("img");
			rayimg.src = "img/s.jpg"
			rayimg.style.width = "50px"
			rayimg.style.height = "50px"
			raysli.appendChild(rayimg)
			if(mine[i][t] == 1) {
				raysli.className = "raysli";
			} else if(i == 0 && t < 10) {
				raysli.className = "raysLi";
				if(mine[i][t] == 1) {
					raysli.className = "raysli";
				}
			} else if(i < 10 && t == 0) {
				//console.log(t)
				raysli.className = "raysLi";
				if(mine[i][t] == 1) {
					raysli.className = "raysli";
				}
			} else if(i == 9 && t < 10) {
				raysli.className = "raysLi";
				if(mine[i][t] == 1) {
					raysli.className = "raysli";
				}
			} else if(i < 10 && t == 9) {
				raysli.className = "raysLi";
				if(mine[i][t] == 1) {
					raysli.className = "raysli";
				}
			} else {
				//console.log(t)
				for(var q = 0; q < 3; q++) {
					for(var h = 0; h < 3; h++) {
						mine[i + parseInt(jadge[q])][t + parseInt(jadges[h])];
						//console.log(mine[i + parseInt(jadge[q])][t + parseInt(jadges[h])])
						if((mine[i + parseInt(jadge[q])][t + parseInt(jadges[h])]) == 1) {
							jadgeh++;
						} else {

						}
						if(jadgeh == 0) {
							raysli.className = "raysLi";
						}
						if(jadgeh == 1) {
							raysli.className = "raysLi1";
						}
						if(jadgeh == 2) {

							raysli.className = "raysLi2";
						}
						if(jadgeh == 3) {
							raysli.className = "raysLi3";
						}
						//console.log(jadgeh)
						jadgeh = 1;
					}
				}
			}
			raysi.appendChild(raysli)
			rayclck(raysi, rayimg, mineray);
		}

	}
}

function setTime() {
	var T = 0;

	function go() {
		var setT = setTimeout(go, 300)
		T++;
		if(T === 2) {
			starB = true;
			clearTimeout(setT);
			box.removeChild(mineray);
			alert("游戏结束");
			for(var zno = 0; zno < mine.length; zno++) {
				for(var znox = 0; znox < mine[zno].length; znox++) {
					if(mine[zno][znox] === 1) {
						mine[zno][znox] = 0;
					}
				}
			}
			star.onclick();

		}

	}
	go();
}

function rayclck(raysi, rayimg, mineray) {
	minerayli = getTag(mineray, "li");
	//console.log(minerayli)
	for(var mray = 0; mray < minerayli.length; mray++) {
		//console.log(m)
		rayC(mray)
		//console.log(mray)
	}

	function rex(reX, reY) {
		//console.log(a)
		if(mine[reX][reY] == 1) {
			return false;
		} else {
			return true;
		}
	}

	function showPoint(x, y) {
		var sur = parseInt(x * 10) + parseInt(y);
		if(x == 0) sur = parseInt(y);
		//console.log(sur)
		minerayli[sur].oncontextmenu="";
		getTag(minerayli[sur], "img")[0].src = "img/img.png";
	}

	function cycle(x, y) {
		var points = [
			[x - 1, y - 1],
			[x, y - 1],
			[x + 1, y - 1],
			[x - 1, y],
			[x + 1, y],
			[x - 1, y + 1],
			[x, y + 1],
			[x + 1, y + 1],
			[x + 2, y + 1],
			[x - 2, y],
			[x - 2, y - 1]
		];
		for(var poi = 0; poi < points.length; poi++) {
			//console.log(points.length)
			if(parseInt(points[poi][0]) === -1) {
				points[poi][0] = x;
				points[poi][1] = y;
			}
			if(parseInt(points[poi][1]) === -1) {
				points[poi][0] = x;
				points[poi][1] = y;
			}
			if(parseInt(points[poi][0]) === 10 || parseInt(points[poi][0]) === 11) {
				points[poi][0] = 9;
			}
			if(parseInt(points[poi][1]) === 10 || parseInt(points[poi][0]) === 11) {
				points[poi][1] = 9;
			}
		}

		//console.log(points)
		for(var v = 0; v < points.length; v++) {

			if(rex(points[v][0], points[v][1])) {
				showPoint(points[v][0], points[v][1])
				//cycle(points[v][0],points[v][1])
			}
		}

	} //递归调用
	function rayC(mray) {
		var yes = true;
		minerayli[mray].onclick = function() {
			minerayli[mray].oncontextmenu="";
			getTag(minerayli[mray], "img")[0].src = "img/img.png";
			//console.log(parseInt(mray/10))
			if(mray < 10) {
				if(mine[0][mray] === 1) {
					setTime()
				}
			} else {
				if(mine[parseInt(mray / 10)][parseInt(mray % 10)] === 1) {
					yes = false;
					setTime()

				}
			}
			if(yes) {
				cycle(parseInt(mray / 10), parseInt(mray % 10));
			}
			judge();
		}
		minerayli[mray].oncontextmenu = function() {
			event.preventDefault();
			getTag(minerayli[mray], "img")[0].src = "img/flag.jpg";
			minerayli[mray].oncontextmenu = function() {
				event.preventDefault();
				getTag(minerayli[mray], "img")[0].src = "img/s.jpg";
			}
		}
	}
}

function judge() {
	var judS = 0;
	for(var jud = 0; jud < minerayli.length; jud++) {
		if(minerayli[jud].firstChild.getAttribute("src") == "img/img.png") {
			judS++;
			console.log(judS)
		}
		if(judS == 90) {
			alert("恭喜你过关了")
		}
	}
}

function change(box) {
	for(var p = 0; p <= 10; p++) {
		var no = Math.floor(Math.random() * 10);
		var nos = Math.floor(Math.random() * 10);
		mine[no][nos] = 1;
		//console.log(mine[no][nos])
	}
	ray(box);
}
window.onload = function() {
	var box = getid("box");
	var star = getid('star');
	//console.log(starB)
	star.onclick = function() {
		change(box);
	}
	star.onclick();
}