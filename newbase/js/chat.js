document.addEventListener("DOMContentLoaded", function () {

    
    let search_icon = document.getElementById('search_icon'),
        search_block = document.getElementById('search_block');

    search_icon.addEventListener('click', function() {
        search_block.classList.add('active');
    });

    // btn_nav__close.addEventListener('click', function() {
    //     nav_panel.classList.remove('header__nav--shown');
    // });


});