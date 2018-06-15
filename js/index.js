var $wrap = $('.wrapper');
setTimeout(function(){
	$wrap.removeClass('init');
},200);
$('.item').on('click',function(){
	$(this).addClass('active');
	$wrap.addClass('wrapper-active');
})
$('.close').on('click',function(e){
	e.stopPropagation();
  //如果不阻止冒泡，点击移除，同是会有点击添加的事件冒泡过来，导致移除不掉
	$('.active').removeClass('active');
	$wrap.removeClass('wrapper-active');
})
