document.addEventListener("DOMContentLoaded", function() {
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
        // choices.hideDropdown();
        changeListPosition();
        toggleDots();
        passValue();
        //choices.clearChoices(); // clear list of choices after choosing an item
    });

    inputChoises.addEventListener('removeItem', function () {
        changeListPosition();
        toggleDots();
        passValue();
    });

    inputChoises.addEventListener('showDropdown', function () {
        changeListPosition();
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
        var choicesMain = document.getElementsByClassName('choices'),
            choicesInner = document.getElementsByClassName('choices__inner'),
            choicesSelectedList = document.getElementsByClassName('choices__list--multiple'),
            countValue = 0;


        Array.from(choicesSelectedList).forEach(function(element){
            countValue = element.childElementCount;
        });

        var countElement = document.createElement('div');
        var countValueText = document.createTextNode(countValue);
        countElement.setAttribute('class', 'choices__counter');
        countElement.setAttribute('id', 'choicesCounter');
        countElement.appendChild(countValueText);

        if(countValue > 1) {
            countValue = countValue - 1;
            var countValueString = '+' + countValue;
            Array.from(choicesMain).forEach(function(element){
                if(!document.getElementById('choicesCounter')) {
                    //element.classList.add('choices__overflow');
                    element.appendChild(countElement);
                    document.getElementById('choicesCounter').innerHTML = countValueString;
                } else {
                    document.getElementById('choicesCounter').innerHTML = countValueString;
                }
            });
        } else {
            Array.from(choicesMain).forEach(function(element){
                if(document.getElementById('choicesCounter')) {
                    document.getElementById('choicesCounter').remove();
                }
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

