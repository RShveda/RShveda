
document.addEventListener('DOMContentLoaded', function () {

    /******** Material Outlined Inputs Floating Label ********/
    let mdnputs = document.getElementsByClassName('md-input');
    // Iterate throught all "outlinedInputs"
    for (var i = 0; i < mdnputs.length; i++) {
        // if input isn't empty:
        if (mdnputs.item(i).value) 
            mdnputs.item(i).classList.add("focused");
        
        // on focus event:
        mdnputs.item(i).addEventListener('focus', function (event) {
            event.target.classList.add("focused");
        });
        // on blur event:
        mdnputs.item(i).addEventListener('blur', function (event) {
            if (!event.target.value)
                event.target.classList.remove("focused");
        });
    }

    /**** Material Outlined Inputs Show/Hide Password ****/
    let passbtns = document.getElementsByClassName('btn--pass-visible');
    for (var i = 0; i < passbtns.length; i++) {
        let passinputTemp = passbtns.item(i).nextElementSibling;
        passbtns.item(i).addEventListener('click', function (event) {
            event.target.classList.toggle("active");
            passinputTemp.type = passinputTemp.type === "password" ? passinputTemp.type = "text" : passinputTemp.type = "password";
        })
    }

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
                    // event.target.previousElementSibling.click();
                    // event.target.previousElementSibling.select();
                }
            }
        })
        verifinputs.item(i).addEventListener('focus', function (event) {
            event.target.select();
        }, true)
    }

});

