/* :::::::::::::::::::::::::::::::::::::::::::::::::::
	
	RESPONSIVE SCRIPTS
	
:::::::::::::::::::::::::::::::::::::::::::::::::::*/
$(document).ready(function() {
	
	//MOBILE MENUS
	var mobileNavOpen = 0; //mobile nav closed
	
	$('.menu-toggle').click(function(){
		if (mobileNavOpen == 0){
			$('.page-top').slideDown(300);
			$('#mainNav').slideDown(300);
			$(this).addClass("active");
			mobileNavOpen = 1;
			return false;
		}
		else {
			$('.page-top').slideUp(300);
			$('#mainNav').slideUp(300);
			$(this).removeClass("active");
			mobileNavOpen = 0;
			return false;
		}	
	});
	
	var bodyWidth = $("body").innerWidth(); //no scrollbars

	//WINDOW RESIZE
	$(window).resize(function() {
		
		var bodyResize = $("body").innerWidth();
					
		//MOBILE NAV CONTROL
		if (bodyResize <= 803) {
			$(".menu-toggle").show();
		} else {
			$(".menu-toggle").hide();
		}
		
		//SHOW OR HIDE NAVS
		if ( (bodyResize <= 803) && mobileNavOpen == 0) {
			$('.page-top').hide();
			$('#mainNav').hide();
		} else {
			$('.page-top').show();
			$('#mainNav').show();
		}
	
	});

});


