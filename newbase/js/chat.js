document.addEventListener("DOMContentLoaded", function () {
 
    let search_icons = document.querySelectorAll('.icon--search'),
        close_search_icons = document.querySelectorAll('.icon--close'),
        chat_items = document.querySelectorAll('.chat-item'),
        chat_first = document.querySelector(".card-animated"),
        chat_item_first = document.querySelector(".chat-item"),
        chat_inputs = document.querySelectorAll('.card-footer .input');

    /**** Search Animation Start ****/
    Array.from(search_icons).forEach(item => {
        item.addEventListener('click', function(event) {
            let search_block = item.parentNode;
            search_block.classList.add('active');
        });
    });

    Array.from(close_search_icons).forEach(item => {
        item.addEventListener('click', function(event) {
            let search_block = item.parentNode;
            search_block.classList.remove('active');
        });
    });
    /**** Search Animation End ****/

    /**** Toggle ChatView (Mobile) Start ****/
    Array.from(chat_items).forEach(item => {
        item.addEventListener('click', function(event) {
            Array.from(chat_items).forEach(item => {
                item.classList.remove('active');
            });
            if (item.classList.contains('collapsed'))
                item.classList.add('active');
            else   
                item.classList.remove('active');
        });
    });

    toggleChatView(chat_first, chat_item_first);

    window.addEventListener('resize', () => { 
        toggleChatView(chat_first, chat_item_first);
    });
    /**** Toggle ChatView (Mobile) End ****/

    

    Array.from(chat_inputs).forEach(item => {
        let input_block = item.parentNode;
        item.addEventListener("focus", function() {
            input_block.classList.add('focused');
        }, true);

        item.addEventListener("blur", function() {
            input_block.classList.remove('focused');
        }, true);
    });
    

});

// Toggle ChatView (Mobile) Function:
function toggleChatView(chat_first, chat_item_first) {
    let chat_shown = document.querySelector(".show");
    
    if (window.innerWidth > 767) {
        if (chat_shown == null) {
            chat_first.classList.add("show");
            chat_item_first.classList.remove("collapsed");
            chat_item_first.classList.add("active");
        }     
    } else {
        // if (chat_shown !== null)
        //     chat_shown.classList.remove("show");
    }
}