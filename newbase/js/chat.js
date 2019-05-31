document.addEventListener("DOMContentLoaded", function () {

    
    let search_icon = document.getElementById('search_icon'),
        search_block = document.getElementById('search_block'),
        close_search_icon = document.getElementById('close_search_icon');

    search_icon.addEventListener('click', function() {
        search_block.classList.add('active');
    });

    close_search_icon.addEventListener('click', function() {
        search_block.classList.remove('active');
    });

});