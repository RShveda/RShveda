document.addEventListener("DOMContentLoaded", function () {

    /* ==================== [Add to Favorite] ===================== */

    let btn_favorite = document.getElementsByClassName('item__icon-favorite');

    Array.from(btn_favorite).forEach(function(element) {
        element.addEventListener('click', function () {
           this.classList.toggle('item__icon-favorite--added');
        });
    });
    
    /* ==================== [Swiper] ===================== */

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        }
    });
    
});

