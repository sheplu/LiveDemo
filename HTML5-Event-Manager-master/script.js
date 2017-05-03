
"use strict";

var eventManagerForm  = document.querySelector('form#event-form');
var dialog            = document.querySelector('[role=alertdialog]');
var confirmDialogForm = document.querySelector('form#confirm');
var confirmButton     = document.querySelector('form#confirm [type=submit]');

var eventName         = document.querySelector('[name=name]');
var startDate         = document.querySelector('[name=startDate]');
var endDate           = document.querySelector('[name=endDate]');
var city              = document.querySelector('[name=city]');
var postalCode        = document.querySelector('[name=postalCode]');
var boxNumber         = document.querySelector('[name=boxNumber]');
var street            = document.querySelector('[name=street]');

var fillDialog = function() {
    document.querySelector('[itemprop=name]').innerText                = eventName.value;
    document.querySelector('[itemprop=startDate]').innerText           = startDate.value;
    document.querySelector('[itemprop=endDate]').innerText             = endDate.value;
    document.querySelector('[itemprop=addressLocality]').innerText     = city.value;
    document.querySelector('[itemprop=postalCode]').innerText          = postalCode.value;
    document.querySelector('[itemprop=postOfficeBoxNumber]').innerText = boxNumber.value;
    document.querySelector('[itemprop=streetAddress]').innerText       = street.value;
};

var showDialog = function(event) {
    event.preventDefault();

    fillDialog();

    dialog.style.display = "block";

    confirmButton.focus();
};

var hideDialog = function(event) {
    event.preventDefault();

    dialog.style.display = "none";
};

eventManagerForm.addEventListener('submit', showDialog);

confirmDialogForm.addEventListener('submit', hideDialog);