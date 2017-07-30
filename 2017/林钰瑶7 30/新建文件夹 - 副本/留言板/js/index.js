
$(document).ready(function(e) {
    random_checked_avatar();
	$("#submit_0").click(validate_input);

	$("#login_show_button").toggle(function(){
			$("#login_form").show(100);
			return false;
		},function(){
			$("#login_form").hide(100);
			return false;
	});
	
	$(".reply_button").click(function(){
			if($(this).parent().parent().children(".m").children(".reply_form_wrap").size()==0){
				var id=$(this).attr("href");
				var reply_form=$("#reply_form").html();
				$(this).parent().parent().children(".m").append(reply_form);
				$(this).parent().parent().children(".m").children(".reply_form_wrap").show(200);
				$(this).parent().parent().children(".m").children(".reply_form_wrap").children("form")
					.children("input[name='id']").val(id);
			}
			return false;		
	});
	
	
	
});

function random_checked_avatar(){
	var r=Math.random()*10%8;
	$("#form_select_avater input:radio").eq(r).attr("checked","checked");
}
function validate_input(){
	var l=$("#nickname").val().trim().length;	
	if(l==0) {alert("昵称不能为空");return false;};
	if(l>6) {alert("昵称要6个字符以内");return false;}
	l=$("#message").val().trim().length;
	if(l==0) {alert("留言内容不能为空");return false;}
	if(l>300) {alert("留言内容要300字符以内");return false;}
	return true;
}


function delete_last_item_border(){
	$("li.item").last().css({"border-bottom":"none"});
	}
	
	
	
	
 