$(document).ready(function(){

   

     // handle navigation

    jQuery.fn.clickToggle = function(a, b) {
        return this.on("click", function(ev) { [b, a][this.$_io ^= 1].call(this, ev) })
      };
      
      // run:
      $('.droper').clickToggle(function(ev) {
        $(".icon").removeClass("uil-bars");
        $(".icon").addClass("uil-times");
        $(".nav-sm-dropdown").css("width","100%");
        $(".nav-sm-dropdown .nav-holder").css("display","block"); 
      }, function(ev) {
        $(".icon").removeClass("uil-times");
        $(".icon").addClass("uil-bars");
        $(".nav-sm-dropdown").css("width","0");
        $(".nav-sm-dropdown .nav-holder").css("display","none");
      });

      $(".closers").click(function(){
        $(".icon").removeClass("uil-times");
        $(".icon").addClass("uil-bars");
        $(".nav-sm-dropdown").css("width","0");
        $(".nav-sm-dropdown .nav-holder").css("display","none");
      });



    // handle shadow for bavbar scroll
    var navLarge = $('.nav-lg'); 
    var navSmall = $('.nav-sm');
    var threshold = 50; // Change to pixels scrolled

    $(window).scroll(function () {
        var distance = $(this).scrollTop();
        if (distance > threshold) { // If scrolled past threshold
            navLarge.addClass("shadow-bottom blue-background");
            navSmall.addClass("shadow-bottom blue-background");
        } else { // If user scrolls back to top
            if (navLarge.hasClass("shadow-bottom blue-background")) { // And if class has been added
                navLarge.removeClass("shadow-bottom blue-background"); // Remove it
            }
            if (navSmall.hasClass("shadow-bottom blue-background")) { // And if class has been added
                navSmall.removeClass("shadow-bottom blue-background"); // Remove it
            }
        }

        
    });
    
})