
document.addEventListener('DOMContentLoaded', function () {

    /******** Dropdown links (redirect on change value) ********/
    let linkDropdowns = document.getElementsByClassName('dropdown--link');
    // Iterate throught all "dropdown--link"
    for (var i = 0; i < linkDropdowns.length; i++) {
        // On change event ...
        linkDropdowns.item(i).addEventListener('change', function (event) {
            let select = event.currentTarget;
            // Redirect to option link which is set as data attribute
            window.location = select.item(select.selectedIndex).dataset.link;
        }, false);
    }
});

function showLoadingScreen() {
    document.getElementById('loading-screen-overlay').add('d-none');
}

function hideLoadingScreen() {
    document.getElementById('loading-screen-overlay').remove('d-none');
}