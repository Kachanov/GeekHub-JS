var form = jQuery("form");
var numbers = jQuery("#numbers");
var letters = jQuery("#letters");
var submit = jQuery("#submit");
var checkbox = jQuery('input[type="checkbox"]');


form.submit(function (event) {
    checkEmptyInputs();
    verifyCheckbox();
    checkRadiobutton();
});


function checkEmptyInputs() {
    if((numbers.prop("value") === "") && (letters.prop("value") === "")){
        alert("Please enter information");
        event.preventDefault();
    }else {
        checkNumbers();
        checkLetters();
    }
}

function checkNumbers() {
    var rule = /^\d+$/;

    if(!numbers.prop("value").match(rule)){
        alert("Numbers must contain only numbers");
        event.preventDefault();
    }
}

function checkLetters() {
    var rule = /^[a-dA-D]+$/;

    if(!letters.prop("value").match(rule)){
        alert("Letters must contain only symbols from A to D");
        event.preventDefault();
    }
}

function verifyCheckbox(){
    if(checkbox.prop("checked") === true){
        return;
    }else{
        alert("Checkbox must be selected");
        event.preventDefault();
    }
}

function checkRadiobutton() {
    if (jQuery('input[name=type]:checked').val()) {
        return;
    } else {
        alert("Radiobutton must be selected");
        event.preventDefault();
    }
}