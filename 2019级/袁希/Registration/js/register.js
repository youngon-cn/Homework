var rej = $('#registration'),
	con = $('#conversation'),
	sel = $('#select'),
	mes = $('#message'),
	send = mes.find('[name=submit]'),
	fail = $('#failure'),
	text = $('#word'),
	fm = $('#form'),
	form = $('#test-form'),
	sub = form.find('[name=submit]'),
	ent = fm.find('[name=submit]'),
	adjs = form.find('[name=adj]'),
	selectAll = form.find('label.selectAll :checkbox'),
	selectAllLabel = form.find('label.selectAll span.selectAll'),
	deselectAllLabel = form.find('label.selectAll span.deselectAll'),
	invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
    e.preventDefault();
    alert(form.serialize());
});
///TODO:绑定事件
function updateLabel(){
	let allChecked = adjs.filter(':checked').length===adjs.length;
	selectAll.prop('checked',allChecked);
	if(allChecked){
		selectAllLabel.hide();
		deselectAllLabel.show();
	}else{
		selectAllLable.show();
		deselectAllLabel.hide();
	}
};
selectAll.change(function(e){
	adjs.prop('checked',$(this).is(':checked'));
	updateLabel();
});
invertSelect.click(function(e){
	adjs.click();
});
adjs.change(()=>updateLabel());

ent.click(function(){
	rej.fadeOut('slow');
	sel.delay('1000');
	sel.fadeIn('slow');
});
sub.click(function(){
	sel.fadeOut('slow');
	con.delay('1000');
	con.fadeIn('slow');
});
text.mouseenter(function(){
	text.animate({
		opasity:'0.4',
		width: '450px',
		height: '100px',
	},2000)
});
send.click(function(){
	mes.fadeOut('slow');
	fail.delay('1000');
	fail.fadeIn('slow');

})