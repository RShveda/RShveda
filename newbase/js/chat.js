document.addEventListener("DOMContentLoaded", function () {
 
    let search_icons = document.querySelectorAll('.icon--search'),
        close_search_icons = document.querySelectorAll('.icon--close'),
        chat_items = document.querySelectorAll('.chat-item'),
        chat_first = document.querySelector(".card-animated"),
        chat_item_first = document.querySelector(".chat-item"),
        chat_inputs = document.querySelectorAll('.card-footer .input'),
        chat_back_btns = document.querySelectorAll('.icon--arrow');

    /**** Search Animation Start ****/
    Array.from(search_icons).forEach(function(item) {
        item.addEventListener('click', function(event) {
            let search_block = item.parentNode;
            search_block.classList.add('active');
        });
    });

    Array.from(close_search_icons).forEach(function(item) {
        item.addEventListener('click', function(event) {
            let search_block; 
            if (!event.target.classList.contains("icon--close-dropdown")) {
                search_block = item.parentNode;
                search_block.classList.remove('active');
            } else {
                search_block = item.parentNode.parentNode;
                search_block.classList.remove('active');
            }
        });
    });
    /**** Search Animation End ****/

    /**** Toggle ChatView (Mobile) Start ****/
    Array.from(chat_items).forEach(function(item) {
        item.addEventListener('click', function(event) {
            Array.from(chat_items).forEach(function(item) {
                item.classList.remove('active');
            });
            if (item.classList.contains('collapsed')) {
                item.classList.add('active');
                fixChatView(true);
            } else {
                item.classList.remove('active');
                fixChatView(false);
            } 
        });
    });

    Array.from(chat_back_btns).forEach(function(item) {
        item.addEventListener('click', function(event) {
            fixChatView(false);
        });
    });

    toggleChatView(chat_first, chat_item_first);

    window.addEventListener('resize', function() { 
        toggleChatView(chat_first, chat_item_first);
    });

    /**** Toggle ChatView (Mobile) End ****/

    

    // Array.from(chat_inputs).forEach(function(item) {
    //     let input_block = item.parentNode;
    //     item.addEventListener("focus", function() {
    //         input_block.classList.add('focused');
    //     }, true);

    //     item.addEventListener("blur", function() {
    //         input_block.classList.remove('focused');
    //     }, true);
    // });


    /**** Customer Account Chat Search (in conversation) Start ****/
    let search_items = document.querySelectorAll('.search-item');
    Array.from(search_items).forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.stopImmediatePropagation();
            event.target.parentNode.classList.add("active");
        });
    });
    /**** Customer Account Chat Search (in conversation) End ****/

});

// Toggle ChatView (Mobile) Function:
function toggleChatView(chat_first, chat_item_first) {
    let chat_shown = document.querySelector(".show");
    
    if (window.innerWidth > 767) {
        fixChatView(false);
        if (chat_shown == null) {
            chat_first.classList.add("show");
            chat_item_first.classList.remove("collapsed");
            chat_item_first.classList.add("active");
        }     
    } else {
        if (chat_shown !== null) {
            fixChatView(true);
        }
    }
}

// Fix Window if Chat Item is open (for mobile):
function fixChatView(status) {
    let chat_wrapper = document.querySelector(".wrapper--chat");
    if (window.innerWidth < 768) {
        if (status) {
            chat_wrapper.classList.add("window-fixed");
        }  else {
            chat_wrapper.classList.remove("window-fixed");  
        }   
    } else {
        chat_wrapper.classList.remove("window-fixed");
    }
}
