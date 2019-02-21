
document.addEventListener("DOMContentLoaded", function(event) {

    /* ==================== [Locations Panel Mobile] ===================== */

    let btn_locations = document.getElementById('btn_locations'),
        btn_locations__close = document.getElementById('btn_locations__close'),
        locations_panel = document.getElementById('locations_panel');

    btn_locations.addEventListener('click', () => {
        locations_panel.style.display = 'block';
        setTimeout(function () {
            locations_panel.classList.add('locations--shown');
        },1);
    });

    btn_locations__close.addEventListener('click', () => {
        locations_panel.style.display = 'none';
        locations_panel.classList.remove('locations--shown');
    });

    /* ==================== [Filters Panel Mobile] ===================== */

    let btn_filters = document.getElementById('btn_filters'),
        btn_filters__close = document.getElementById('btn_filters__close'),
        filters_panel = document.getElementById('filters_panel');

    btn_filters.addEventListener('click', () => {
        filters_panel.classList.add('filters--shown');
    });

    btn_filters__close.addEventListener('click', () => {
        filters_panel.classList.remove('filters--shown');
    });

    /* ==================== [Add to Favorite] ===================== */

    let btn_favorite = document.getElementsByClassName('item__icon-favorite');

    Array.from(btn_favorite).forEach(function(element) {
        element.addEventListener('click', function () {
           this.classList.toggle('icon--favorite-added');
        });
    });

    /* ==================== [Filters Expand Panel] ===================== */

    let btn_more_filters = document.getElementById('btn_more-filters'),
        filters_hidden_part = document.getElementById('filters_hidden_part'),
        filters_overlay = document.getElementById('filters_overlay');

    btn_more_filters.addEventListener('click', function()  {
        this.classList.toggle('active');
        filters_hidden_part.classList.toggle('filters__part--bottom--visible');
        if(filters_overlay.style.display == 'block') {
            filters_overlay.style.display = 'none';
        }
        else {
            filters_overlay.style.display = 'block';
        }
        setTimeout(function(){
            filters_overlay.classList.toggle('filters__overlay--visible');
        },100);
    });

    /* ==================== [Swiper] ===================== */

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        }
    });

    /* ==================== [Sliders in Filters] ===================== */

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

