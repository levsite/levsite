$(document).ready(function(){
    var inProgress = false
    $(".menu-btn").click(function(){
        if (inProgress == true) {
            console.log("nothing to do")
        } else {       
        inProgress = true;
        if ($(this).hasClass("home-select")){
            var selectedOption = 'tab1'
        } else if ($(this).hasClass("mission-select")){
            var selectedOption = 'tab2'
        } else if ($(this).hasClass("who-we-are-select")){
            var selectedOption = 'tab3'
        } else if ($(this).hasClass("what-we-do-select")){
            var selectedOption = 'tab4'
        } else if ($(this).hasClass("our-clients-select")){
            var selectedOption = 'tab5'
        } else if ($(this).hasClass("contact-select")){
            var selectedOption = 'tab6'
        }

        if ($(".body1").hasClass("is-visible")){
            var currentlyOpen = 'body1'
        } else if ($(".body2").hasClass("is-visible")){
            var currentlyOpen = 'body2'
        } else if ($(".body3").hasClass("is-visible")){
            var currentlyOpen = 'body3'
        } else if ($(".body4").hasClass("is-visible")){
            var currentlyOpen = 'body4'
        } else if ($(".body5").hasClass("is-visible")){
            var currentlyOpen = 'body5'
        } else if ($(".body6").hasClass("is-visible")){
            var currentlyOpen = 'body6'
        }

        if (selectedOption == "tab1" && currentlyOpen == "body1") {
            console.log("same");
            inProgress = false;
        } else if (selectedOption == "tab2" && currentlyOpen == "body2") {
            console.log("same");
            inProgress = false;
        } 
        else if (selectedOption == "tab3" && currentlyOpen == "body3") {
            console.log("same");
            inProgress = false;
        } 
        else if (selectedOption == "tab4" && currentlyOpen == "body4") {
            console.log("same");
            inProgress = false;
        } 
        else if (selectedOption == "tab5" && currentlyOpen == "body5") {
            console.log("same");
            inProgress = false;
        } 
        else if (selectedOption == "tab6" && currentlyOpen == "body6") {
            console.log("same");
            inProgress = false;
        } 
        else {

        $(".menu-btn").removeClass("lv-menu-item-active");
        $("."+selectedOption+"-d").addClass("lv-menu-item-active");
        
        $("#toggle").removeClass("open");
        $("#nav-icon4").removeClass("open");
        $(".menu-wrapper li a").removeClass("mobile-menu-active");
        $("."+selectedOption+"-m").addClass("mobile-menu-active");

        $("html").removeClass("lock-scroll");
        $("body").removeClass("lock-scroll");
        
        $("#menu").removeClass("opened");
        $(".lv-header").removeClass("openmenu");

        if (selectedOption == 'tab1') {
            inProgress = true;
            $("."+currentlyOpen).animate({
                opacity: 0,
              }, 500, function() {    
                $(".body1").css("display","flex");
                $(".body1").addClass("is-visible")
                $("."+currentlyOpen).hide();      
                $("."+currentlyOpen).removeClass("is-visible"); 
                $(".body1").animate({
                    opacity: 1,
                  }, 500, function() {              
                    inProgress = false;  
                });
            });
        } else if (selectedOption == 'tab2') {
            inProgress = true;
            $("."+currentlyOpen).animate({
                opacity: 0,
              }, 500, function() {    
                $(".body2").css("display","flex");
                $(".body2").addClass("is-visible");
                $("."+currentlyOpen).hide();        
                $("."+currentlyOpen).removeClass("is-visible"); 
                $(".body2").animate({
                    opacity: 1,
                  }, 500, function() {             
                    inProgress = false;   
                });
            });
        } else if (selectedOption == 'tab3') {
            inProgress = true;
            $("."+currentlyOpen).animate({
                opacity: 0,
              }, 500, function() {    
                $(".body3").css("display","flex");
                $(".body3").addClass("is-visible")
                $("."+currentlyOpen).hide();        
                $("."+currentlyOpen).removeClass("is-visible");
                $(".body3").animate({
                    opacity: 1,
                  }, 500, function() {        
                    inProgress = false;        
                });
            });
        } else if (selectedOption == 'tab4') {
            inProgress = true;
            $("."+currentlyOpen).animate({
                opacity: 0,
              }, 500, function() {    
                $(".body4").css("display","flex");
                $(".body4").addClass("is-visible");
                $("."+currentlyOpen).hide();
                $("."+currentlyOpen).removeClass("is-visible");   
                $(".body4").animate({
                    opacity: 1,
                  }, 500, function() {                
                    inProgress = false;
                });
            });
        } else if (selectedOption == 'tab5') {
            inProgress = true;
            $("."+currentlyOpen).animate({
                opacity: 0,
              }, 500, function() {    
                $(".body5").css("display","flex");
                $(".body5").addClass("is-visible");
                $("."+currentlyOpen).hide();
                $("."+currentlyOpen).removeClass("is-visible");
                $(".body5").animate({
                    opacity: 1,
                  }, 500, function() {          
                    inProgress = false;      
                });
            });
        } else if (selectedOption == 'tab6') {
            inProgress = true;
            $("."+currentlyOpen).animate({
                opacity: 0,
              }, 500, function() {    
                $(".body6").css("display","flex");
                $(".body6").addClass("is-visible")
                $("."+currentlyOpen).hide();
                $("."+currentlyOpen).removeClass("is-visible");
                $(".body6").animate({
                    opacity: 1,
                  }, 500, function() {                
                    inProgress = false;
                });
            });
        }
    } //here
}
}

    // $(".home-select").click(function() {
    //     $(this).toggleClass("lv-menu-item-active");
    //     $(".mission-select").toggleClass("lv-menu-item-active");  
        
    //     $("#toggle").removeClass("open");
    //     $("#nav-icon4").removeClass("open");
    //     $(".menu-wrapper li a").removeClass("mobile-menu-active");
    //     $(this).addClass("mobile-menu-active");

    //     $("html").removeClass("lock-scroll");
    //     $("body").removeClass("lock-scroll");
        
    //     $("#menu").removeClass("opened");
    //     $(".lv-header").removeClass("openmenu");

    //     $(".our-mission").animate({
    //         opacity: 0,
    //       }, 500, function() {    
    //         $(".main-video").show();
    //         $(".our-mission").hide();        
    //         $(".main-video").animate({
    //             opacity: 1,
    //           }, 500, function() {                
    //         });
    //     });
        

    // });

    // $(".mission-select").click(function() {
    //     $(".home-select").toggleClass("lv-menu-item-active");
    //     $(this).toggleClass("lv-menu-item-active");        

    //     $("#toggle").removeClass("open");
    //     $("#nav-icon4").removeClass("open");
    //     $(".menu-wrapper li a").removeClass("mobile-menu-active");
    //     $(this).addClass("mobile-menu-active");

    //     $("html").removeClass("lock-scroll");
    //     $("body").removeClass("lock-scroll");

    //     $("#menu").removeClass("opened");
    //     $(".lv-header").removeClass("openmenu");

    //     $(".main-video").animate({
    //         opacity: 0,
    //       }, 500, function() {
    //         $(".main-video").hide();
    //         $(".our-mission").css("display","flex");

    //         $(".our-mission").animate({            
    //             opacity: 1,
    //           }, 500, function() {
    //         });
    //     });
        
    // });

    // $(".who-we-are-select").click(function() {
    //     $(".home-select").toggleClass("lv-menu-item-active");
    //     $(this).toggleClass("lv-menu-item-active");        

    //     $("#toggle").removeClass("open");
    //     $("#nav-icon4").removeClass("open");
    //     $(".menu-wrapper li a").removeClass("mobile-menu-active");
    //     $(this).addClass("mobile-menu-active");

    //     $("html").removeClass("lock-scroll");
    //     $("body").removeClass("lock-scroll");

    //     $("#menu").removeClass("opened");
    //     $(".lv-header").removeClass("openmenu");

    //     $(".main-video").animate({
    //         opacity: 0,
    //       }, 500, function() {
    //         $(".main-video").hide();
    //         $(".our-mission").css("display","flex");

    //         $(".our-mission").animate({            
    //             opacity: 1,
    //           }, 500, function() {
    //         });
    //     });
        
    // });
)}); 