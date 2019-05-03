document.addEventListener("DOMContentLoaded", function () {

    /* ==================== [Property search form] ===================== */
    let searchForm = document.getElementById('property-search');
    searchForm.addEventListener("submit", function (event) {
        // Retrieves '#location-selector' and check weither this form contains it or not
        const locationSelector = document.getElementById('location-selector');
        if (!this.contains(locationSelector)) {
            event.preventDefault();
            return;
        }
        // If it does contain it ...
        // Refresh bound input and check it succeded
        if (locationSelector.choices.refreshBoundInput() === false) {
            event.preventDefault();
            return;
        }
    }, false)

});