
$(function(){
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
		var position_sp = target.offset().top-54;
		var WindowWidth = $(window).width();
		if(WindowWidth > 650){
			$("html, body").animate({scrollTop:position}, speed, "swing");
			return false;
		}else{
			$("html, body").animate({scrollTop:position_sp}, speed, "swing");
			return false;
		}
    });
	
	$("#Page_top").hide();
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		if(winTop > 200){
			$("#Page_top").show();
		}else if(winTop <= 200){
			$("#Page_top").hide();
		}
	});
});


