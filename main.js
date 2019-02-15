$(document).ready(function () {

    // Navigation on Mobile
    var btn_nav = $("#btn_nav"),
        btn_nav__close = $("#btn_nav__close");

    btn_nav.on("click",function () {
       $(".header__nav").addClass("header__nav--shown");
    });

    btn_nav__close.on("click",function () {
        $(".header__nav").removeClass("header__nav--shown");
    });

    // Filters on Mobile
    var btn_filters = $("#btn_filters"),
        btn_filters__close = $("#btn_filters__close");

    btn_filters.on("click",function () {
        $("body").addClass("modal-open");
        $(".filters").addClass("filters--shown");
    });

    btn_filters__close.on("click",function () {
        $(".filters").removeClass("filters--shown");
    });

    // Locations on Mobile
    $("#btn_locations").on("click",function(){
        $(".locations").show();
        setTimeout(function () {
            $(".locations").addClass("locations--shown");
        },1);
    });

    $("#btn_locations__close").on("click",function(){
        $(".locations").hide().removeClass("locations--shown");
    });

    // Location Form on Home Page
    var input_location = $("#input_location"),
        input_location_item = $(".locations__list__item"),
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

    // input_location.on("blur",function(){
    //     setTimeout(function () {
    //         $(".input--location__results").hide();
    //     },100);
    // });

    // Add to Favorite
    var add_to_favorite = $(".item__icon-favorite");

    add_to_favorite.on("click",function(){
        $(this).toggleClass("icon--favorite-added");
    });

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'
        },
    })

});