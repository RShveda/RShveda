
document.addEventListener("DOMContentLoaded", function(event) {

    /* ==================== [Navigation Panel Mobile] ===================== */

    let btn_nav = document.getElementById('btn_nav'),
        btn_nav__close = document.getElementById('btn_nav__close'),
        nav_panel = document.getElementById('nav_panel');

    btn_nav.addEventListener('click', () => {
        nav_panel.classList.add('header__nav--shown');
    });

    btn_nav__close.addEventListener('click', () => {
        nav_panel.classList.remove('header__nav--shown');
    });

    /* ==================== [Location Input] ===================== */

    let input_location = document.getElementById('input_location'),
        input_location_item =  document.getElementsByClassName('locations__list__item'),
        input_location_results = document.getElementById('location_results');

    input_location.addEventListener('focus', function() {
        if(this.value.length >= 2) {
            input_location_results.style.display = 'block';
        }
    });

    input_location.addEventListener('keyup', function() {
        if(this.value.length >= 2) {
            input_location_results.style.display = 'block';
        } else {
            input_location_results.style.display = 'none';
        }
    });

    Array.from(input_location_item).forEach(function(element) {
        element.addEventListener('click', function() {
            input_location.value = this.innerHTML;
            input_location_results.style.display = 'none';
            /********* Additional Check for Listing Page ********/
            if (document.getElementById('locations_panel')) {
                let locations_panel = document.getElementById('locations_panel');
                if(locations_panel.style.display == 'block') {
                    setTimeout(function () {
                        locations_panel.style.display = 'none';
                        locations_panel.classList.remove('locations--shown');
                    },300);
                }
            }
        });
    });

    input_location.addEventListener('blur', function() {
        setTimeout(function () {
            input_location_results.style.display = 'none';
        },100);
    });

});

