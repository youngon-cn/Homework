var score = getid("score");
var scro = 1;
var ing = true;
var df = true;
var hight = false;
var hightestT = false;
var but = getid('but');
var but1 = getid('but1');

function getid(id) {
	return document.getElementById(id);
}

function getTag(parent, chlid) {
	return parent.getElementsByTagName(chlid);
}

function getstyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

function Bclcik(liblank, randM) {
	for(var j = 0; j < liblank.length; j++) {
		Liclick(j);
	}

	function Liclick(j) {
		liblank[j].onmousedown = function() {
			if(j != randM) {
				but1.onclick();
				score.innerHTML = "你的分数是" + 0 + "分";
				scro = 1;
			} else {
				liblank[randM].setAttribute("id", "green")
				score.innerHTML = "你的分数是" + scro + "分";
				scro++;
			}
		}
	}

}

function active(boxN, Topx, black, parent_box) {
	if(ing) {
		random = Math.floor(Math.random() * 4);
		black[random].setAttribute("id", "black");
		Bclcik(black, random);
		//console.log(black[random].getAttribute("id"))

		function box_top() {
			if(hightestT) {
				Topx = 25;
			}
			boxN.style.top = parseInt(boxN.style.top) + Topx + 'px';
			if(parseInt(boxN.style.top) === 0) {
				copy(boxN, parent_box, black);
			}
			if(parseInt(boxN.style.top) > 760) {
				//console.log(parseInt(boxN.style.top))
				if(black[random].getAttribute("id") == "black") {
					but1.onclick();
				}
			}
			if(parseInt(boxN.style.top) > 1000) {
					//console.log(parseInt(boxN.style.top))
					parent_box.removeChild(boxN);
			}
			boxT = setTimeout(box_top, 30);
		}
		box_top()
	}
}

function copy(boxN, parent, blacks) {
	var scend_box = boxN.cloneNode();
	scend_box.setAttribute("id", "second_box");
	scend_box.style.top = "-200px";
	for(var i = 0; i < blacks.length; i++) {
		var bal = blacks[i].cloneNode();
		scend_box.appendChild(bal);
	}
	if(hight) {
		var sbox = 10;
	} else {
		var sbox = 5;
	}
	var black_sbox = getTag(scend_box, 'li')
	for(var y = 0; y < black_sbox.length; y++) {
		black_sbox[y].setAttribute("id", "");
	} //循环遍历清除属性
	parent.appendChild(scend_box);
	active(scend_box, sbox, black_sbox, parent);
	//console.log(black_sbox)
}

function changer(smell_box) {
	if(hight) {
		var fbox = 10;
	} else {
		var fbox = 5;
	}
	var smell_boxs = document.createElement("smell_boxs");
	smell_boxs.id = "smell_boxs";
	var first_box = document.createElement("div");
	first_box.id = "first_box";
	first_box.style.top = "-200px";
	var li = document.createElement("li");
	var li1 = document.createElement("li");
	var li2 = document.createElement("li");
	var li3 = document.createElement("li");
	first_box.appendChild(li);
	first_box.appendChild(li1);
	first_box.appendChild(li2);
	first_box.appendChild(li3);
	black_box = getTag(first_box, 'li');
	smell_boxs.appendChild(first_box);
	smell_box.appendChild(smell_boxs)
	scro = 1;
	if(df) {
		ing = true
		df = false;
		active(first_box, fbox, black_box, smell_boxs);
	}
}
function creatM(){
	    var scrx=document.documentElement.clientWidth;
		var scry=document.documentElement.clientHeight;
		var setT=document.createElement("div")
		setT.id="setT";
		setT.style.width=scrx+'px';
		setT.style.height=scry+'px';
		document.body.appendChild(setT);
		var setTc=document.createElement("div");
		setTc.id="setTc";
		setT.appendChild(setTc);
		setTc.style.left=((scrx-500)/2)+'px';
		setTc.style.top=((scry-500)/2)+'px';
		setp=document.createElement("p");
		setp.id="setP";
		setTc.appendChild(setp);
}
window.onload = function() {
	var hightT = getid("hight");
	var hightest = getid("hights");
	var out = getid("out");
	var smell_box = getid("smell_box");
	var open=3;
	hightT.onclick = function() {
		hight = true;
		hightest.disabled = true;
	}
	hightest.onclick = function() {
		hightestT = true;
		hightT.disabled = true;
	}
	but.onclick = function() {
		creatM();
		function clone(){
		var op=setTimeout(clone,1000)
		setp.innerHTML=open;
		if(open===0){
		open=3;
		document.body.removeChild(setT);
		clearTimeout(op);
		hightest.disabled = true;
		hightT.disabled = true;
		but.disabled = true;
		changer(smell_box);
		setout(out);
		}
		open--;
		}
		clone();
	}
	but1.onclick = function() {
		smell_box.removeChild(smell_boxs);
		clearTimeout(boxT);
		hightestT = false;
		hightest.disabled = false;
		hightT.checked = false;
		hightest.checked = false;
		outs = 50;
		clearTimeout(ouT)
		out.innerHTML = "你还剩" + outs + "秒";
		hightT.disabled = false;
		but.disabled = false;
		ing = false;
		score.innerHTML = "你的分数是" + 0 + "分";
		alert("come over 你的分数是" + (scro - 1) + "分")
		df = true;
	}
}

function setout(out) {
	outs = 50;

	function outT() {
		ouT = setTimeout(outT, 1000);
		out.innerHTML = "你还剩" + outs + "秒";
		outs--
		if(outs == 0) {
			but1.onclick();
		}
	}
	outT();

}