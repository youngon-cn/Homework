var hF = 1;
var hammer = getid("hammer");
function getid(id) {
	return document.getElementById(id);
}

function getTag(parent, chlid) {
	return parent.getElementsByTagName(chlid);
}

function getstyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

function loadimg(img, imgs) {

	for(var i = 1; i < 5; i++) {
		img.push("imgs/img" + i + ".png");
	}
	for(var k = 1; k < 5; k++) {
		imgs.push("imgs/img" + k + "s.png");
	}

}

function otherImg(img, imgs, w_frames, randomFs) {
	var rdm = Math.floor(Math.random() * 10);
	if(rdm < 6) {
		var randomIMGs = Math.floor(Math.random() * 4);
		var creatPs = document.createElement("p");
		var creatIMGs = document.createElement("img");
		creatPs.id = "ariseIMGs";
		creatIMGs.src = img[randomIMGs];
		creatPs.appendChild(creatIMGs);
		w_frames[randomFs].appendChild(creatPs);
		topIMGs(ariseIMGs, w_frames[randomFs], creatPs);
	
	creatPs.onmousedown = function() {
		hammer.style.display="none";
		w_frames[randomFs].removeChild(creatPs);
		clearTimeout(setTops);
		Fvalue.innerHTML = "分数：" + hF + "分";
		clearTimeout(setTbacks);
		hF++;
	}
	creatPs.onmouseup=function(){
		hammer.style.display="block";
	}
	}
}


function creat(img, imgs, w_frames) {
	var randomIMG = Math.floor(Math.random() * 4);
	var randomF = Math.floor(Math.random() * 9);
	var randomFs = Math.floor(Math.random() * 9);
	var creatP = document.createElement("p");
	var creatIMG = document.createElement("img");
	creatP.id = "ariseIMG";
	creatIMG.src = img[randomIMG];
	//console.log(img[randomIMG])
	creatP.appendChild(creatIMG);
	w_frames[randomF].appendChild(creatP);
	topIMG(ariseIMG, w_frames[randomF], creatP);
	if(randomF != randomFs) {
		otherImg(img, imgs, w_frames, randomFs);
	}
	creatP.onmousedown = function() {
		hammer.style.display="none";
		newimg(w_frames, randomF, imgs, creatP, randomIMG);
		w_frames[randomF].removeChild(creatP);
		Fvalue.innerHTML = "分数：" + hF + "分";
		clearTimeout(setTop);
		clearTimeout(settback);
		hF++;
	}
	creatP.onmouseup=function(){
		hammer.style.display="block";
	}
}

function newimg(w_frames, randomF, imgs, creatP, randomIMG) {
	newI = document.createElement("p");
	newIs = document.createElement("img");
	newI.id = "newIMGs";
	newIs.src = imgs[randomIMG];
	newI.appendChild(newIs);
	w_frames[randomF].appendChild(newI);
	newIMGs.style.top = parseInt(creatP.style.top) + 'px';
	display(w_frames[randomF], newI);
	//console.log(parseInt(creatP.style.top));
}

function display(xiao, shi) {
	var u = 0;

	function go() {
		var setdispaly = setTimeout(go, 500);
		if(u === 2) {
			clearTimeout(setdispaly);
			xiao.removeChild(shi);
		}
		u++;
	}
	go();
}

function topIMGs(ariseIMGs, pIMGs, creatPs) {
	var Tvalues = getstyle(ariseIMGs, 'top');
	//console.log(Tvalues);
	Tops = -1;
	buttoms = 1;

	function gos() {
		setTops = setTimeout(gos, 10);
		ariseIMGs.style.top = parseInt(Tvalues) + Tops + 'px';
		Tops--;
		if(parseInt(ariseIMGs.style.top) < 0) {
			clearTimeout(setTops);
			ariseIMGs.style.top = '0px';

			function backs() {
				setTbacks = setTimeout(backs, 10);
				ariseIMGs.style.top = parseInt(ariseIMGs.style.top) + buttoms + 'px';
				if(parseInt(ariseIMGs.style.top) > 100) {
					clearTimeout(setTbacks);
					ariseIMGs.style.top = "100px"
					//console.log(pIMG.childNodes[0]);
					pIMGs.removeChild(creatPs);
				}
			}
			backs();
		}
	}
	gos();
}

function topIMG(ariseIMG, pIMG, creatP) {
	var Tvalue = getstyle(ariseIMG, 'top');
    var Top = -1;
	var buttom  = 1;
	function go() {
		setTop = setTimeout(go, 10);
		ariseIMG.style.top = parseInt(Tvalue) + Top + 'px';
		Top--;
		if(parseInt(ariseIMG.style.top) < 0) {
			clearTimeout(setTop);
			ariseIMG.style.top = '0px';

			function back() {
				settback = setTimeout(back, 10);
				ariseIMG.style.top = parseInt(ariseIMG.style.top) + buttom + 'px';
				if(parseInt(ariseIMG.style.top) > 100) {
					clearTimeout(settback);
					ariseIMG.style.top = '100px'
					//console.log(pIMG.childNodes[0]);
					pIMG.removeChild(creatP);

				}
			}
			back();
		}
	}
	go();
}

function move(event, hammer, W_frame) {
	var ev = event ? event : window.event;
	var evX = ev.clientX;
	var evY = ev.clientY;
	var w_frameX = W_frame.offsetLeft;
	var w_frameY = W_frame.offsetTop;
	var hammerX = evX - w_frameX;
	var hammerY = evY - w_frameY;
	var hammerW = -(parseInt(hammer.offsetWidth) + (-85))
	var hammerH = -(parseInt(hammer.offsetHeight) + -5)
	hammer.style.left = hammerX + hammerW + 'px';
	hammer.style.top = hammerY + hammerH + 'px';
	


}

function decrceW(butW) {

	function DriceW() {
		Dcricew = setTimeout(DriceW, 1000);
		butW.style.width = parseFloat(butW.style.width) + wd + 'px';
		//console.log(parseFloat(butW.style.width))
		if(parseInt(butW.style.width) < 11) {
			hF = 1;
			clearTimeout(Dcricew)
			clearInterval(open);
			butW.style.width = '0px';
			but.disabled = false;
			alert("游戏结束" + "您的分数是" + (hF-1) + "分");
			alert("如需从来，请点击开始游戏")
			butW.style.width = 750 + 'px';
			Fvalue.innerHTML = "分数:0分";
			senior.disabled=false;
			senior.checked=false;
		}
	}
	DriceW();
}
function creaT(){
	   var MathT=3;
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
		function goT(){
			var set=setTimeout(goT,800);
			if(MathT===0){
				clearTimeout((set));
				document.body.removeChild(setT)
				MathT=3;
			}
			console.log(MathT)
			setP.innerHTML=MathT;
			MathT--;
			//console.log(MathT)
		}
		goT();
}
window.onload = function() {
	Time=true;
	var senior=getid("senior")
	Fvalue = getid("Fvalue");
	var butW = getid("wid");
	var but = getid("but");
	var W_frame = getid("frame");
	var W_frames = getTag(W_frame, "li");
	var img = new Array;
	var imgs = [];
	loadimg(img, imgs);
	var whoclick=true;
	var end=getid("end");
	end.onclick=function(){
		alert("你已经结束了游戏")
		hF = 1;
		but.disabled = false;
		clearInterval(open);
		clearTimeout(Dcricew);
		butW.style.width = 750 + 'px';
		Fvalue.innerHTML = "分数:0分";
		senior.disabled=false;
		senior.checked=false;
	}
	senior.onmousedown=function(){
		whoclick=false;
		wd=-15;
	}
	but.onclick = function() {
		if(whoclick){
			 wd=-5;
		}
		creaT();
		senior.disabled=true;
		open = setInterval(arise, 3000);
		but.disabled = true;
		decrceW(butW);
	}
    
	function arise() {
		//console.log(img[2])
		creat(img, imgs, W_frames);
	}
	W_frame.addEventListener("mousemove", function() {
		W_frame.style.cursor = "url(img/museplay (4).png)";
		hammer.style.display = "block";
		move(event, hammer, W_frame);
	}, true);

	W_frame.onmouseleave = function() {
		hammer.style.display = "none";
	}
}