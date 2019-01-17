$(function(){

		$('body').jpreLoader({
			splashID: "#jSplash",
			loaderVPos: '50%',
			splashVPos: '50%',
			autoClose: true
		}, function() { //callback function
		});
		$('.btn01').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a01").offset().top},800);
			 });
		$('.btn02').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a02").offset().top},800);
			 });
		$('.btn03').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a03").offset().top},800);
			 });
		$('.btn04').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a04").offset().top},800);
			 });
		$('.btn05').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a05").offset().top},800);
			 });
		$('.gotop').on("click", function(){
			  	$('html,body').animate({scrollTop:0},800);
			 });
});