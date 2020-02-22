var ctx=document.getElementById('myCanvas').getContext('2d');

// sky draw
function sky(){
	// create gradient
	var grd=ctx.createLinearGradient(0,0,0,800);
	grd.addColorStop(0,'#000080');
	grd.addColorStop(0.1,'#659EC7');
	grd.addColorStop(0.2,'#56A5EC');
	grd.addColorStop(0.3,'#82CAFA');
	grd.addColorStop(0.8,'#fff');
	// fill gradient
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,1200,800);
	//save canvas
	ctx.save;
	
	// draw stars
	for (var j=1;j<100;j++){
		ctx.save();
		// draw stars randomly
		ctx.translate(Math.floor(Math.random()*1200),
					Math.floor(Math.random()*120));
		drawStar(ctx,Math.floor(Math.random()*3)+2);
		// restorm former canvas
		ctx.restore();
	}
	// draw stars
	for (var j=600;j<800;j++){
		ctx.save();
		// draw stars randomly
		ctx.translate(Math.floor(Math.random()*1200),
					560+Math.floor(Math.random()*800));
		drawStar(ctx,Math.floor(Math.random()*3)+2);
		// restorm former canvas
		ctx.restore();
	}
	
	// draw moon
	ctx.beginPath();
	ctx.moveTo(190,20);
	ctx.quadraticCurveTo(220,20,220,60);
	ctx.bezierCurveTo(220,80,205,90,195,95);
	ctx.bezierCurveTo(185,100,120,100,120,75);
	ctx.quadraticCurveTo(190,75,190,20);
	ctx.fillStyle='#FFE87C';
	globalAlpha=0.7;
	ctx.fill();
	
	// text
	ctx.font = '48px serif';
	ctx.fillStyle='cornflowerblue';
	ctx.fillText('Good Night', 800, 600);
}
window.sky();

// telescope draw
function scope(){
	// Bezier Curve
	ctx.beginPath();
	ctx.moveTo(200,450);
	ctx.bezierCurveTo(180,470,180,500,200,520);
	ctx.bezierCurveTo(220,500,220,470,200,450);
	ctx.strokeStyle='#566D7E';
	ctx.lineWidth=4;
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(200,450);
	ctx.lineTo(400,350);
	ctx.stroke();
	ctx.moveTo(200,520);
	ctx.lineTo(450,520);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(400,350);
	ctx.bezierCurveTo(450,370,500,405,450,520);
	ctx.bezierCurveTo(400,500,350,425,400,350);
	ctx.strokeStyle='#566D7E';
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(300,520);
	ctx.lineTo(200,620);
	ctx.moveTo(300,520);
	ctx.lineTo(300,650);
	ctx.moveTo(300,520);
	ctx.lineTo(400,580);
	ctx.stroke();
}
window.scope();

// miniview draw
function mini(){
	ctx.beginPath();
	ctx.moveTo(675,225);
	ctx.quadraticCurveTo(625,225,625,262.5);
	ctx.lineTo(625,362.5);
	ctx.quadraticCurveTo(625,400,650,400);
	ctx.quadraticCurveTo(650,420,630,425);
	ctx.quadraticCurveTo(660,420,665,400);
	ctx.lineTo(865,400);
	ctx.quadraticCurveTo(925,400,925,362.5);
	ctx.lineTo(925,262.5);
	ctx.quadraticCurveTo(925,225,875,225);
	ctx.lineTo(675,225);
	ctx.fillStyle='#82CAFA';
	ctx.fill();
	// move the origin of coordinate
	ctx.translate(775,325);
	// Create a circular clipping path
	ctx.beginPath();
	ctx.arc(0,0,60,0,Math.PI*2,true);
	ctx.clip();
	
	// draw background
	var lingrad = ctx.createLinearGradient(0,-75,0,75);
	lingrad.addColorStop(0, '#232256');
	lingrad.addColorStop(1, '#143778');
	
	ctx.fillStyle = lingrad;
	ctx.fillRect(-75,-75,150,150);
	
	// draw stars
	for (var j=1;j<50;j++){
		ctx.save();
		ctx.fillStyle = '#fff';
		ctx.translate(75-Math.floor(Math.random()*150),
					75-Math.floor(Math.random()*150));
		drawStar(ctx,Math.floor(Math.random()*4)+2);
		ctx.restore();
	}
	
}
window.mini();

//draw star
function drawStar(ctx,r){
	ctx.save();
	ctx.beginPath()
	ctx.moveTo(r,0);
	for (var i=0;i<9;i++){
		ctx.rotate(Math.PI/5);
		if(i%2 == 0) {
			ctx.lineTo((r/0.525731)*0.200811,0);
		} else {
			ctx.lineTo(r,0);
		}
	}
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}