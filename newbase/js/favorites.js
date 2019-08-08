document.addEventListener("DOMContentLoaded", function () {

    let btn_favorite = document.getElementsByClassName('item__icon-favorite');
    let btn_remove_favorite = document.getElementById('btn_remove_favorite');
    let btn_unremove_favorite = document.getElementById('btn_unremove_favorite');
    let title_favorite = document.getElementById('title_favorite');
    
    /* ==================== [Put Item Data to remove-modal] ===================== */

    Array.from(btn_favorite).forEach(function(element) {
        element.addEventListener('click', function () {
            title_favorite.innerHTML = element.dataset.item;
            btn_remove_favorite.dataset.itemId = element.dataset.itemId;
            btn_unremove_favorite.dataset.itemId = element.dataset.itemId;
        });
    });

    /* ==================== [Remove from Favorite] ===================== */

    btn_remove_favorite.addEventListener('click', function (event) {
        let item = document.querySelector(`[data-item-id='${event.target.dataset.itemId}']`);
        item.classList.remove('item__icon-favorite--added');
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

