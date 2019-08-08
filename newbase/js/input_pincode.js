
document.addEventListener('DOMContentLoaded', function () {

    /**** Verification Code Inputs Focus/Select ****/
    let verifinputs = document.getElementsByClassName('input--verif');
    for (var i = 0; i < verifinputs.length; i++) {
        verifinputs.item(i).addEventListener('input', function (event) {
            if (event.target.value.length){
                if (event.target.nextElementSibling !== null)
                    event.target.nextElementSibling.focus();
            }
                
            else {
                if (event.target.previousElementSibling !== null) {
                    event.target.previousElementSibling.focus();
                }
            }
        })
        verifinputs.item(i).addEventListener('focus', function (event) {
            event.preventDefault();
            event.target.select();
        }, true)
    }

});

