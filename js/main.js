$(document).ready(function () {

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

  //$('select').niceSelect();

});