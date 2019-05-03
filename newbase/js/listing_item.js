document.addEventListener("DOMContentLoaded", function(event) {

    /* ==================== [Navigation Panel Mobile] ===================== */

    let btn_nav = document.getElementById('btn_nav'),
        btn_nav__close = document.getElementById('btn_nav__close'),
        nav_panel = document.getElementById('nav_panel');

    btn_nav.addEventListener('click', function() {
        nav_panel.classList.add('header__nav--shown');
    });

    btn_nav__close.addEventListener('click', function() {
        nav_panel.classList.remove('header__nav--shown');
    });

    /* ==================== [Swiper] ===================== */

    var similarListingsCarousel = new Swiper ('.similar-listings', {
        slidesPerView: 4,
        spaceBetween: 26,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        simulateTouch: false,
        navigation: {
            nextEl: '.similar-button-next',
            prevEl: '.similar-button-prev',
        }
    });

    var similarItemImgGallery = new Swiper ('.similar-gallery', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.similar-item-button-next',
            prevEl: '.similar-item-button-prev',
        }
    });

    var mainGallery = new Swiper ('.main-gallery', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 4,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination'
        }
    });

    var photoGallery = new Swiper ('.photos-gallery', {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    /* ==================== [Custom Lightbox for Gallery] ===================== */

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });

    var mainGalleryCopy = new Swiper ('.main-gallery-copy', {
        slidesPerView: '1',
        grabCursor: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    let see_all_photos = document.getElementById('see_all_photos');

    see_all_photos.addEventListener('click',function(){
        setTimeout(function(){
            galleryThumbs.update();
            mainGalleryCopy.update();
            mainGalleryCopy.slideTo(0,0);
        },1);
    });

    mainGallery.on('click',function () {
        setTimeout(function(){
            galleryThumbs.update();
            mainGalleryCopy.update();
            mainGalleryCopy.slideTo(mainGallery.clickedIndex,0);
        },1);
    });

    photoGallery.on('click',function () {
        setTimeout(function(){
            galleryThumbs.update();
            mainGalleryCopy.update();
            mainGalleryCopy.slideTo(photoGallery.clickedIndex,0);
        },1);
    });

    window.addEventListener("orientationchange", function() {
        setTimeout(function () {
            mainGalleryCopy.update();
            mainGalleryCopy.updateAutoHeight(0);
        },620)
    });

    /* ==================== [Add to Favorite] ===================== */

    let btn_favorite = document.getElementsByClassName('item__btn-favorite');

    Array.from(btn_favorite).forEach(function(element) {
        element.addEventListener('click', function () {
            Array.from(btn_favorite).forEach(function(element) {
                element.classList.toggle('item__btn-favorite--added');
                if (element.classList.contains('item__btn-favorite--added')) {
                    element.innerHTML = 'Added to Favorites';
                } else {
                    element.innerHTML = 'Add to Favorites';
                }
            });
        });
    });

    /* ==================== [Add to Favorite on Similar] ===================== */

    let btn_favorite_similar = document.getElementsByClassName('item__icon-favorite');

    Array.from(btn_favorite_similar).forEach(function(element) {
        element.addEventListener('click', function () {
            this.classList.toggle('item__icon-favorite--added');
        });
    });

    /* ==================== [Print Button] ===================== */

    let print_btns = document.getElementsByClassName('print_btn');

    Array.from(print_btns).forEach(function (element) {
        element.addEventListener('click', function () {
            window.print();
        }, false);
    });

    /* ==================== [Share Button / Copy to Clipboard] ===================== */

    let btn_share = document.getElementsByClassName('item__btn-share'),
        copyDone = document.getElementById('copyDone');

    Array.from(btn_share).forEach(function(element) {
        element.addEventListener('click', function () {

        });
    });

    let clipboard = new ClipboardJS('.item__btn-share', {
        text: function() {
            return window.location.href;
        }
    });

    clipboard.on('success', function(e) {
        copyDone.style.display = 'block';
        setTimeout(function () {
            copyDone.classList.add('copy__message--success');
        },10);
        setTimeout(function () {
            copyDone.classList.remove('copy__message--success');
        },1000);
        setTimeout(function () {
            copyDone.style.display = 'none';
            Array.from(btn_share).forEach(function(element) {
                element.blur();
            });
        },1500);
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        alert('Copy Error');
    });

});
