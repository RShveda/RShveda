document.addEventListener("DOMContentLoaded", function(event) {
    var inputChoises = document.getElementById("input_choises");
    var choices = new Choices(inputChoises, {
        items: [],
        choices: [],
        searchEnabled: true,
        searchChoices: false,
        searchFloor: 1,
        searchResultLimit: 5,
        searchFields: ['label', 'value'],
        addItems: true,
        delimiter: ',',
        removeItems: true,
        removeItemButton: true,
        itemSelectText: '',
        maxItemCount: 5,
        position: 'bottom'
    });

    // choices.ajax(function(callback) {
    //     fetch('https://www.green-acres.fr/fr/Geo/AutoCompleteWithCategoriesResponsive?term=mar&countryId=fr')
    //         .then(function(response) {
    //                 response.json().then(function(data) {
    //                     var data_ = JSON.parse(data);
    //                     callback([], 'id', 'label');
    //                     console.log("here");
    //                     console.log(data_);
    //                     choices.setChoices(addChoices(data_), 'value', 'label', true);
    //                     var inputText = document.getElementsByClassName('choices__input--cloned');
    //                     Array.from(inputText).forEach(function(element){
    //                         element.focus();
    //                     });
    //                 });
    //             }
    //         )
    // });

    function addChoices(data_) {
        var getCategories = [];

        Array.from(data_).forEach(function(element) {
            return getCategories.push(element.category);
        });

        var categories  = Array.from(new Set(getCategories));

        var setChoices = [],
            choiceGroup = {},
            itemChoice = {};

        Array.from(categories).forEach(function(category) {
            var filteredArray = data_.filter(function(item) {
                return item.category == category;
            });

            var arrayChoises = [];

            Array.from(filteredArray).forEach(function(element){
                itemChoice = {
                    value: element.id,
                    label: element.label
                };
                arrayChoises.push(itemChoice);
            });
            choiceGroup = {
                label: category,
                id: category,
                disabled: false,
                choices: arrayChoises
            };
            setChoices.push(choiceGroup);
        });
        return setChoices;
    }

    var timer = null;

    inputChoises.addEventListener('search', function(event) {
        if (event.detail.value.length >= 3) {
            if (null !== timer) {
                clearTimeout(timer)
            }

            var setUrl = "https://www.green-acres.fr/fr/Geo/AutoCompleteWithCategoriesResponsive?term=" + event.detail.value + "&countryId=fr";

            timer = setTimeout(function() {
                choices.ajax(function(callback) {
                    // fetch(`https://www.green-acres.fr/fr/Geo/AutoCompleteWithCategoriesResponsive?term=${event.detail.value}&countryId=fr`)
                    fetch(setUrl)
                        .then(function(response) {
                                response.json().then(function(data) {
                                    var data_ = JSON.parse(data);
                                    callback([], 'id', 'label');
                                    choices.setChoices(addChoices(data_), 'value', 'label', true);
                                    var inputText = document.getElementsByClassName('choices__input--cloned');
                                    setTimeout(function(){
                                        Array.from(inputText).forEach(function(element){
                                            element.focus();
                                        });
                                    },100);

                                });
                            }
                        )
                })
            }, 300)
        } else {
            choices.setChoices([], 'value', 'label', true);
        }
    }, false);

    inputChoises.addEventListener('addItem', function(event) {
        choices.hideDropdown();
        toggleDots();
        passValue();
//      choices.clearChoices(); // this feature will be available in next version of lib
    });

    inputChoises.addEventListener('removeItem', function () {
        // if(window.innerWidth > 767) {
        changeListPosition();
        // }
        toggleDots();
        passValue();
    });

    inputChoises.addEventListener('showDropdown', function () {
        // if(window.innerWidth > 767) {
        changeListPosition();
        // }
        toggleDots();
    });

    inputChoises.addEventListener('hideDropdown', function(){
        choices.clearInput();
    });

    var choicesInnerTap = document.getElementsByClassName('choices__inner');

    Array.from(choicesInnerTap).forEach(function(element) {
        element.addEventListener('click', function() {
            var inputText = document.getElementsByClassName('choices__input--cloned');
            Array.from(inputText).forEach(function(element){
                element.focus();
            });
        });
    });

    function changeListPosition() {
        var choicesInner = document.getElementsByClassName('choices__inner'),
            choicesInnerHeight,
            choicesList = document.getElementsByClassName('choices__list--dropdown'),
            choicesSelectedList = document.getElementsByClassName('choices__list--multiple'),
            choicesSelectedListWidth;
        Array.from(choicesInner).forEach(function(element){
            choicesInnerHeight = element.offsetHeight;
        });
        Array.from(choicesList).forEach(function(element){
            element.style.top = choicesInnerHeight + 'px';
        });
    }

    function toggleDots() {
        var choicesInner = document.getElementsByClassName('choices__inner'),
            choicesSelectedList = document.getElementsByClassName('choices__list--multiple'),
            choicesSelectedListWidth;

        Array.from(choicesSelectedList).forEach(function(element){
            choicesSelectedListWidth = element.offsetWidth;
        });

        if(choicesSelectedListWidth >= 210) {
            Array.from(choicesInner).forEach(function(element){
                element.classList.add('choices__overflow');
            });
        } else {
            Array.from(choicesInner).forEach(function(element){
                if(element.classList.contains('choices__overflow')) {
                    element.classList.remove('choices__overflow');
                }
            });
        }
    }

    function passValue() {
        if (document.getElementById('btn_locations')) {
            var btnLocations = document.getElementById('btn_locations');
            var labels = [];
            Array.from(choices.getValue()).forEach(function(element) {
                return labels.push(' ' + element.label);
            });
            btnLocations.innerHTML = labels;
        }
    }

});

