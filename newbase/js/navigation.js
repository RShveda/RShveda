
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

});

