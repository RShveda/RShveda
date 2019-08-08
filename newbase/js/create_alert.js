
document.addEventListener('DOMContentLoaded', function () {

    /**** Alerts Page: create alert by clicking btn-favorite ****/
    let btn_favorite = document.getElementsByClassName('icon--favorite-orange');

    Array.from(btn_favorite).forEach(function(element) {
        element.addEventListener('click', function () {
        this.classList.toggle('item__icon-favorite--added');
        });
    });

});

