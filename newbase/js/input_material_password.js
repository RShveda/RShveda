
document.addEventListener('DOMContentLoaded', function () {

    /**** Material Outlined Inputs Show/Hide Password ****/
    let passbtns = document.getElementsByClassName('btn--pass-visible');
    for (var i = 0; i < passbtns.length; i++) {
        let passinputTemp = passbtns.item(i).nextElementSibling;
        passbtns.item(i).addEventListener('click', function (event) {
            event.target.classList.toggle("active");
            passinputTemp.type = passinputTemp.type === "password" ? passinputTemp.type = "text" : passinputTemp.type = "password";
        })
    }

});

