$(function(){
	//幻灯片自动播放
	$("#myCarousel").carousel({
		//4秒后自动播放
		interval:4000,
	});
	//幻灯片垂直居中
	// $(".carousel-control").css("line-height",$(".carousel-inner img").height() + "px");
	// $(window).resize(function() {
	// 	//不管是哪张幻灯片都要做到垂直居中
	// 	var $hdpImg = $(".carousel-inner img").eq(0).height() ||
	// 				  $(".carousel-inner img").eq(1).height() ||
	// 				  $(".carousel-inner img").eq(2).height(); 
	// 	$(".carousel-control").css("line-height",$hdpImg + "px");
	// });

	//左右图片文字垂直居中
	
	// $(".text").eq(0).css("margin-top",($(".auto").eq(0).height()-$(".text").eq(0).height())/2+"px");
	// $(window).resize(function() {
	// 	$(".text").eq(0).css("margin-top",($(".auto").eq(0).height()-$(".text").eq(0).height())/2+"px");
	// });

	// $(".text").eq(1).css("margin-top",($(".auto").eq(1).height()-$(".text").eq(1).height())/2+"px");
	// $(window).resize(function() {
	// 	$(".text").eq(1).css("margin-top",($(".auto").eq(1).height()-$(".text").eq(1).height())/2+"px");
	// });

});
