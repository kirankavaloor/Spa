



$(window).on("load",function(){


    //Nav Bar
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })

    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })


    $(".serv").click(function(){
        $(".header .nav .sub").slideToggle();
    })

    $(".serv").click(function(){
        if($(window).width() < 768){
            $(".header .nav .sub").slideToggle();
        }
    })

    // fixed nav bar
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }else{
            $(".header").removeClass("fixed");
        }
    })

    // Chat Box 
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".chat").addClass("fixed");
        }else{
            $(".chat").removeClass("fixed");
        }
    })

    

    
    $(".loading").fadeOut(300, function() {
        $('body').removeClass('loadingbody');
    });
    
    let slideIndex = $(".slide.active").index();

    const slideLen = $(".slide").length;
    

    function slideShow(){
        console.log(slideIndex)
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");

        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }else {
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
        
    })

// Coupons SCript

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

$(document).ready(function(){

        $('ul li').click(function(){
            $(this).siblings().removeClass('active');
            $(this).toggleClass('active');
        })

        $(".home-section, .gallery, .swiper2, .con, .contact, .map, .footer").click(function() {
            $('ul li').siblings().removeClass('active');
            if($(window).width() < 768) {
                $(".header .nav").slideToggle().removeClass('active');
            }
        })
})



$('.sub-menu a').click(function(){
    $(".sub-menu").collapse('active');
})

// $(function(){
//     $('.nav li').hover(
//         function(){
//             $('ul.sub',this).slideDown(500);
//         },
//         function(){
//             $('ul.sub',this).slideUp(300);
//         }
//     );
// });



$.scrollIt({
    topOffset: -50
});