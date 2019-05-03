document.addEventListener("DOMContentLoaded", function () {
    // Retrieve location selector
    const locationSelector = document.getElementById('location-selector');
    if (locationSelector === null)
        return;

    // for RTL:
    if (document.body.classList.contains("direction-rtl"))
        locationSelector.dir = "rtl";  
        
    // Create Choices input with needed options
    const locationSelectorChoices = new Choices(locationSelector, {
        searchChoices: false,
        searchResultLimit: 5,
        searchFields: ['label', 'value'],
        removeItemButton: true,
        itemSelectText: '',
        maxItemCount: 5,
        position: 'bottom',
        duplicateItemsAllowed: false
    });

    // Bind the choices object to the DOM locationSelector
    locationSelector.choices = locationSelectorChoices;

    // Bind the bound input (which is defined in the DOM location-selector dataset) to choices object as well
    if ('boundInputId' in locationSelector.dataset) {
        const boundInput = document.getElementById(locationSelector.dataset.boundInputId);
        if (boundInput !== null)
            locationSelector.choices.boundInput = boundInput;
    }

    // Create a bound function "getFormattedValues" for #location-selector
    // which returns a formatted list of location items values (separated by commas)
    // Returns formatted values string on success, null on failure
    locationSelectorChoices.getFormattedValues = function (delimiter = ',') {
        const values = this.getValue(true);
        let formattedValues = null;
        if (values.length > 0) {
            formattedValues = '';
            for (let i = 0; i < values.length; i++) {
                if (i > 0)
                    formattedValues += delimiter;
                formattedValues += values[i];
            }
        }
        return formattedValues;
    }.bind(locationSelectorChoices);

    // Refresh the bound input value using the formatted values string
    // Returns true on success, false on failure
    locationSelectorChoices.refreshBoundInput = function (delimiter = ',') {
        if (this.boundInput === null)
            return false;
        const formattedValues = this.getFormattedValues(delimiter);
        if (formattedValues === null)
            return false;
        this.boundInput.value = formattedValues;
        return true;
    }

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

            var arrayChoices = [];

            Array.from(filteredArray).forEach(function(element){
                itemChoice = {
                    value: element.id,
                    label: element.label
                };
                arrayChoices.push(itemChoice);
            });
            choiceGroup = {
                label: category,
                id: category,
                disabled: false,
                choices: arrayChoices
            };
            setChoices.push(choiceGroup);
        });
        return setChoices;
    }

    var timer = null;

    locationSelector.addEventListener('search', function(event) {
        if (event.detail.value.length >= 3) {
            if (null !== timer) {
                clearTimeout(timer)
            }

            var setUrl = "https://www.green-acres.fr/fr/Geo/AutoCompleteWithCategoriesResponsive?term=" + event.detail.value + "&countryId=fr";

            timer = setTimeout(function() {
                locationSelectorChoices.ajax(function(callback) {
                    fetch(setUrl)
                    .then(function(response) {
                        response.json().then(function(data) {
                            var data_ = JSON.parse(data);
                            callback([], 'id', 'label');
                            locationSelectorChoices.setChoices(addChoices(data_), 'value', 'label', true);
                            var inputText = document.getElementsByClassName('choices__input--cloned');
                            setTimeout(function(){
                                Array.from(inputText).forEach(function(element){
                                    element.focus();
                                });
                            },100);

                        });
                    })
                })
            }, 300)
        } else {
            locationSelectorChoices.setChoices([], 'value', 'label', true);
        }
    }, false);

    locationSelector.addEventListener('addItem', function(event) {
        changeListPosition();
        toggleCounter(event.currentTarget.closest(".choices"));
        passValue();
        //choices.clearChoices(); // clear list of choices after choosing an item
    });

    locationSelector.addEventListener('removeItem', function (event) {
        changeListPosition();
        toggleCounter(event.currentTarget.closest(".choices"));
        passValue();
    });

    locationSelector.addEventListener('showDropdown', function () {
        changeListPosition();
    });

    locationSelector.addEventListener('hideDropdown', function(){
        locationSelectorChoices.clearInput();
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
            choicesList = document.getElementsByClassName('choices__list--dropdown');
        Array.from(choicesInner).forEach(function(element){
            choicesInnerHeight = element.offsetHeight;
        });
        Array.from(choicesList).forEach(function(element){
            element.style.top = choicesInnerHeight + 'px';
        });
    }

    function toggleCounter(choicesInput) {
        var choicesSelectedList = document.getElementsByClassName('choices__list--multiple'),
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
            if (!document.getElementById('choicesCounter')) {
                choicesInput.appendChild(countElement);
                document.getElementById('choicesCounter').innerHTML = countValueString;
            } else {
                document.getElementById('choicesCounter').innerHTML = countValueString;
            }
        } else {
            if(document.getElementById('choicesCounter')) {
                document.getElementById('choicesCounter').remove();
            }
            if (choicesInput.classList.contains('choices__overflow')) {
                choicesInput.classList.remove('choices__overflow');
            }
        }
    }

    function passValue() {
        if (document.getElementById('btn_locations')) {
            var btnLocations = document.getElementById('btn_locations');
            var labels = [];
            Array.from(locationSelectorChoices.getValue()).forEach(function(element) {
                return labels.push(' ' + element.label);
            });
            btnLocations.innerHTML = labels;
        }
    }

});

