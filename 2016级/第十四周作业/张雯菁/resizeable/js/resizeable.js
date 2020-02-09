var m_panel , m_ctrl , m_type;
var moving = 0 , m_start_x = 0 , m_start_y = 0 , m_to_x = 0 , m_to_y = 0;

function on_mousedown(e , panel , ctrl , type){
	var e = e||window.event;  //获得通用事件对象
	m_start_x = e.pageX - ctrl.offsetLeft;
	m_start_y = e.pageY - ctrl.offsetTop;
	
	m_panel = panel;
	m_ctrl = ctrl;
	m_type = type;
	
	moving = setInterval(on_move,10);
}

function on_move(){
	
	if( moving ){
		
		var min_left = m_panel.offsetLeft + 100;
		var min_top = m_panel.offsetTop + 50;
		var to_x = m_to_x - m_start_x;
		var to_y = m_to_y - m_start_y;
		
		to_x = Math.max(to_x , min_left);
		to_y = Math.max(to_y , min_top);
		
		switch(m_type){
			case'r':
				m_ctrl.style.left = to_x + 'px';
				m_panel.style.width = to_x + 10 + 'px';
			break;
			case'b':
				m_ctrl.style.top = to_y + 'px';
				m_panel.style.height = to_y + 10 + 'px';
			break;
			case'rb':
				m_ctrl.style.top = to_y + 'px';
				m_ctrl.style.left = to_x + 'px';
				m_panel.style.width = to_x + 20 + 'px';
				m_panel.style.height = to_y + 20 + 'px';
			break;
		}
		
		
	}
}

document.onmousemove = function(e){
	var e = window.event||e;
	m_to_x = e.pageX;
	m_to_y = e.pageY;
}

document.onmouseup = function(){
	clearInterval(moving);
	moving = 0;
	
	var cls = document.getElementsByClassName('ui-Resizeable-ctrl');
	for(var i = 0 ; i < cls.length ; i++){
		cls[i].style.left = '';
		cls[i].style.top = '';
	}
}

function Resizeable(panel_id){
	var panel = document.getElementById(panel_id);
	
	var r = document.createElement('div');
	var b = document.createElement('div');
	var rb = document.createElement('div');
	
	r.class = r.className = 'ui-Resizeable-r ui-Resizeable-ctrl';
	b.class = b.className = 'ui-Resizeable-b ui-Resizeable-ctrl';
	rb.class = rb.className = 'ui-Resizeable-rb ui-Resizeable-ctrl';
	
	panel.appendChild(r);
	panel.appendChild(b);
	panel.appendChild(rb);
	
	r.addEventListener('mousedown',function(e){
		on_mousedown(e,panel,r,'r');
	})
	b.addEventListener('mousedown',function(e){
		on_mousedown(e,panel,b,'b');
	})
	rb.addEventListener('mousedown',function(e){
		on_mousedown(e,panel,rb,'rb');
	})
}

Resizeable('ui-resizeable');

/*
 e.pageX e.pageY 事件发生时的鼠标相对页面的位置
 el.offsetLeft el.offsetTop 元素距离页面的位置
 var e = e||window.event 事件对象获取的通用方法
 */