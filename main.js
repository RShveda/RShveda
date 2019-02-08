$(document).ready(function () {

    // Navigation on Mobile
    var btn_nav = $(".btn--nav"),
        btn_close_nav = $(".btn--close");

    btn_nav.on("click",function () {
       $(".header__nav").addClass("header__nav--shown");
   });

    btn_close_nav.on("click",function () {
        $(".header__nav").removeClass("header__nav--shown");
    });

    // Location Form on Home Page
    var input_location = $(".input--location"),
        input_location_item = $(".input--location__item"),
        input_location_results = $(".input--location__results");

    input_location.on("focus",function(){
        if($(this).val().length >= 2) {
            input_location_results.show();
        }
    });

    input_location.on("keyup",function () {
       if($(this).val().length >= 2) {
           input_location_results.show();
       } else {
           input_location_results.hide();
       }
    });

    input_location_item.on("click",function(){
        input_location.val($(this).html());
        $(".input--location__results").hide();
    });

    input_location.on("blur",function(){
        setTimeout(function () {
            $(".input--location__results").hide();
        },100);
    });

});