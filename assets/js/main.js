// $('#banner-slider');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })


$('#banner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
 autoplayTimeout:2000,
autoplayHoverPause:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#meal-of-the-day-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:2500,
   autoplayHoverPause:true,
   
    responsive:{
        0:{
            items:2
        },
        // margin:25,
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('#Competitive-Prices-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


