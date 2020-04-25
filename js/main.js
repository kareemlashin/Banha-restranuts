$(document).ready(function () {
    $("#loading-page").fadeOut(1000, function () {
        $("body").css({ overflow: "auto" })
    });
$(".phone-now").click(function(){
    $("#popup-details").css({display:"flex"})
})

$("#popup-details").mouseup(function(e) {
    var container6 = $("#restranut-details");
    if (!container6.is(e.target) && container6.has(e.target).length === 0) {
    $("#popup-details").hide();
    }
});
    $("#notification").mouseup(function(e) {
        var container5 = $(".box-notification");
        if (!container5.is(e.target) && container5.has(e.target).length ===0) {
        $("#notification").hide();
        }
    });
    $(".alarm").click(function(){
        $("#notification").show();

    })
    
    $("#nav-social").mouseup(function(e) {
        var container6 = $(".mop-nav");
        if (!container6.is(e.target) && container6.has(e.target).length === 0) {
        $("#nav-social").hide();
        }
    });
    $("#bar").click(function(){
        $("#nav-social").show();
    });

    $("body").mouseup(function(e) {
        var container6 = $("#catgry");
        if (!container6.is(e.target) && container6.has(e.target).length === 0) {
        $("#all-catgry").hide();
        }
    });
    $("#catg-option").click(function(){
        $("#all-catgry").show();
    });
    $("#close-cargry").click(function(){
        $("#all-catgry").hide();
    });
    $("#searchInput").keypress(function(){
        $(".icon-search").hide();
    });
    $("#searchInput").blur(function(){
        let values=$(this).val();
        if(values==""){
            $(".icon-search").show();
        }
    });
    let owlDirection = true;
    $('#one .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        rtl: owlDirection,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.multiple-items').slick({
        rtl: true,
        dots: false,
        arrows: false,
        loop:false,
        slidesToShow: 4,
        slidesToScroll: 3,
      })

   
  $('select').niceSelect();
  $('#select-restranut').on('change', function()
  {
      alert( this.value );
      $(".numbers-restranut").hide();
      let valChange=this.value;
      $("."+valChange+"-number").show();
  });
});