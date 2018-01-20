var $name=$("#stuName");
var $score=$("#stuScore");
var jsonStu=[];
$("#b-1").click(function(){
    jsonStu.push({
	    name : $name.val(), 
	    score: $score.val() 
    });
    $name.val('');
    $score.val('');
});
$("#b-2").click(function(){
    $.each(jsonStu,function (i) {
        $('ul').append('<li><b>'+ jsonStu[i].name + '</b>的分数是<b>' + jsonStu[i].score + '</b></li>');
    }); 
});