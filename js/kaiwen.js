$(function(){

		$('body').jpreLoader({
			splashID: "#jSplash",
			loaderVPos: '50%',
			splashVPos: '50%',
			autoClose: true
		}, function() { //callback function
		});
		$('.menu ul li:nth-of-type(1)').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a00").offset().top},800);
			 });
		$('.menu ul li:nth-of-type(2)').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a01").offset().top},800);
			 });
		$('.menu ul li:nth-of-type(3)').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a02").offset().top},800);
			 });
		$('.menu ul li:nth-of-type(4)').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a03").offset().top},800);
			 });
		$('.menu ul li:nth-of-type(5)').on("click", function(){
			  	$('html,body').animate({scrollTop:0},800);
			 });

		var swiper = new Swiper('.swiper-container', {
			loop: true,
			pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		        renderBullet: function (index, className) {
		        return '<span class="' + className + '">' + (index + 1) + '</span>';
	        	},
	      	},
	      	autoplay: {
      			delay: 5000,
      			disableOnInteraction: false,
    		}
		});
});