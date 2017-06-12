 $( window ).on( "load", function(){
 waterfall('main','box');
 
 var dataJson = {'data': [{'src':'0.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'11.jpg'},{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'},{'src':'15.jpg'},{'src':'16.jpg'},{'src':'17.jpg'},{'src':'18.jpg'},{'src':'19.jpg'},{'src':'20.jpg'},{'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'}]};
 window.onscroll=function(){
 var isPosting = false;
 if(checkscrollside('main','box') && !isPosting){
  isPosting = true;
  $.each(dataJson.data,function(index,dom){
  var $box = $('<div class="box"></div>');
  $box.html('<div class="pic"><img src="./img/'+$(dom).attr('src')+'"></div>');
  $('#main').append($box);
  waterfall('main','box');
  isPosting = false;
  });
 }
 }
});




function waterfall(parent,clsName){
 var $parent = $('#'+parent);
 var $boxs = $parent.find('.'+clsName);
 var iPinW = $boxs.eq( 0 ).width()+15;
 var cols = Math.floor( $( window ).width() / iPinW );
 $parent.width(iPinW * cols).css({'margin': '0 auto'});
 var pinHArr=[];
 $boxs.each( function( index, dom){
 if( index < cols ){
  pinHArr[ index ] = $(dom).height();
 }else{
  var minH = Math.min.apply( null, pinHArr );
  var minHIndex = $.inArray( minH, pinHArr );
  $(dom).css({
  'position': 'absolute',
  'top': minH + 15,
  'left': $boxs.eq( minHIndex ).position().left
  });
  
  pinHArr[ minHIndex ] += $(dom).height() + 15;
 }
 });
}

function checkscrollside(parent,clsName){
 
 var $lastBox = $('#'+parent).find('.'+clsName).last(),
 lastBoxH = $lastBox.offset().top + $lastBox.height()/ 2,
 scrollTop = $(window).scrollTop(),
 documentH = $(document).height();
 return lastBoxH < scrollTop + documentH ? true : false;
}
