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
        input_location_results = $("#location_results");

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
        input_location_results.hide();
    });

    input_location.on("blur",function(){
        setTimeout(function () {
            input_location_results.hide();
        },100);
    });

    // Add to Favorite
    var add_to_favorite = $(".item__icon-favorite");

    add_to_favorite.on("click",function(){
        $(this).toggleClass("icon--favorite-added");
    });

    //More filters
    var btn_more_filters = $("#btn_more-filters");

    btn_more_filters.on("click",function(){
        $(".filters__part--bottom").toggleClass("filters__part--bottom--visible");
        $(".filters__overlay").toggle();
        setTimeout(function(){
            $(".filters__overlay").toggleClass("filters__overlay--visible");
        },100)
    });



    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        }
    });


    //============================================
    var sliderPrice = document.getElementById('slider-price');
    noUiSlider.create(sliderPrice, {
        start: [500000,10000000],
        step: 10000,
        behaviour: 'drag',
        connect: true,
        range: {
            min: [100000],
            max: [50000000]
        },
        ariaFormat: wNumb({
            decimals: 0
        }),
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' €'
        })
    });

    var sliderPriceValueFrom = document.getElementById('slider-price-value-from');
    var sliderPriceValueTo = document.getElementById('slider-price-value-to');

    sliderPrice.noUiSlider.on('update', function (values, handle) {
        sliderPriceValueFrom.innerHTML = values[0];
        sliderPriceValueTo.innerHTML = values[1];
    });

    //============================================
    var sliderLivingSpace = document.getElementById('slider-living-space');
    noUiSlider.create(sliderLivingSpace, {
        start: [100,250],
        step: 10,
        behaviour: 'drag',
        connect: true,
        range: {
            min: [10],
            max: [1000]
        },
        ariaFormat: wNumb({
            decimals: 0
        }),
        format: wNumb({
            decimals: 0,
            thousand: ' '
        })
    });

    var sliderLivingSpaceValueFrom = document.getElementById('slider-living-space-value-from');
    var sliderLivingSpaceValueTo = document.getElementById('slider-living-space-value-to');

    sliderLivingSpace.noUiSlider.on('update', function (values, handle) {
        sliderLivingSpaceValueFrom.innerHTML = values[0];
        sliderLivingSpaceValueTo.innerHTML = values[1];
    });

    //============================================
    var sliderRooms = document.getElementById('slider-rooms');
    noUiSlider.create(sliderRooms, {
        start: [3,6],
        step: 1,
        behaviour: 'drag',
        connect: true,
        range: {
            min: [1],
            max: [20]
        },
        ariaFormat: wNumb({
            decimals: 0
        }),
        format: wNumb({
            decimals: 0
        })
    });

    var sliderRoomsValueFrom = document.getElementById('slider-rooms-value-from');
    var sliderRoomsValueTo = document.getElementById('slider-rooms-value-to');

    sliderRooms.noUiSlider.on('update', function (values, handle) {
        sliderRoomsValueFrom.innerHTML = values[0];
        sliderRoomsValueTo.innerHTML = values[1];
    });

    //============================================
    var sliderBedrooms = document.getElementById('slider-bedrooms');
    noUiSlider.create(sliderBedrooms, {
        start: [2,4],
        step: 1,
        behaviour: 'drag',
        connect: true,
        range: {
            min: [1],
            max: [10]
        },
        ariaFormat: wNumb({
            decimals: 0
        }),
        format: wNumb({
            decimals: 0
        })
    });

    var sliderBedroomsValueFrom = document.getElementById('slider-bedrooms-value-from');
    var ssliderBedroomsValueTo = document.getElementById('slider-bedrooms-value-to');

    sliderBedrooms.noUiSlider.on('update', function (values, handle) {
        sliderBedroomsValueFrom.innerHTML = values[0];
        ssliderBedroomsValueTo.innerHTML = values[1];
    });

    //============================================
    var sliderLandSpace = document.getElementById('slider-land-space');
    noUiSlider.create(sliderLandSpace, {
        start: [200,650],
        step: 10,
        behaviour: 'drag',
        connect: true,
        range: {
            min: [100],
            max: [1500]
        },
        ariaFormat: wNumb({
            decimals: 0
        }),
        format: wNumb({
            decimals: 0,
            thousand: ' '
        })
    });

    var sliderLandSpaceValueFrom = document.getElementById('slider-land-space-value-from');
    var sliderLandSpaceValueTo = document.getElementById('slider-land-space-value-to');

    sliderLandSpace.noUiSlider.on('update', function (values, handle) {
        sliderLandSpaceValueFrom.innerHTML = values[0];
        sliderLandSpaceValueTo.innerHTML = values[1];
    });

});