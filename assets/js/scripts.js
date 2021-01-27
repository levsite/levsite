$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});


$("#toggle").click(function() {
	$(this).toggleClass("open");
    $("#menu").toggleClass("opened");
    $(".lv-header").toggleClass("openmenu");
});

$(document).ready(function(){
    $(".home-select").click(function() {
        $(this).toggleClass("lv-menu-item-active");
        $(".mission-select").toggleClass("lv-menu-item-active");  
        
        $("#toggle").removeClass("open");
        $("#nav-icon4").removeClass("open");
        $(".menu-wrapper li a").removeClass("mobile-menu-active");
        $(this).addClass("mobile-menu-active");
        
        $("#menu").removeClass("opened");
        $(".lv-header").removeClass("openmenu");

        $(".our-mission").animate({
            opacity: 0,
          }, 500, function() {    
            $(".main-video").show();
            $(".our-mission").hide();        
            $(".main-video").animate({
                opacity: 1,
              }, 500, function() {                
            });
        });
        

    });

    $(".mission-select").click(function() {
        $(".home-select").toggleClass("lv-menu-item-active");
        $(this).toggleClass("lv-menu-item-active");        

        $("#toggle").removeClass("open");
        $("#nav-icon4").removeClass("open");
        $(".menu-wrapper li a").removeClass("mobile-menu-active");
        $(this).addClass("mobile-menu-active");

        $("#menu").removeClass("opened");
        $(".lv-header").removeClass("openmenu");

        $(".main-video").animate({
            opacity: 0,
          }, 500, function() {
            $(".main-video").hide();
            $(".our-mission").css("display","flex");

            $(".our-mission").animate({            
                opacity: 1,
              }, 500, function() {
            });
        });
        
    });
}); 