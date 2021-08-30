



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

    // // for Loading text
    // var textWrapper = document.querySelector('.ml3');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    // anime.timeline({loop: true})
    // .add({
    //     targets: '.ml3 .letter',
    //     opacity: [0,1],
    //     easing: "easeInOutQuad",
    //     duration: 100,
    //     delay: (el, i) => 150 * (i+1)
    // }).add({
    //     targets: '.ml3',
    //     opacity: 0,
    //     duration: 100,
    //     easing: "easeOutExpo",
    //     delay: 100
    // });

   
        
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