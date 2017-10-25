var form = jQuery("form");
var numbers = jQuery("#numbers");
var letters = jQuery("#letters");
var submit = jQuery("#submit");
var checkbox = jQuery('input[type="checkbox"]');


form.submit(function (event) {
    checkInputs();
    verifyCheckbox();
    checkRadiobutton();
});

function verifyCheckbox(){
    if(checkbox.prop("checked") === true){
        return;
    }else{
        alert("Checkbox must be selected!");
        event.preventDefault();
    }
}

function checkRadiobutton() {
    if ( jQuery('input[name=type]:checked').val() ) {
        return;
    } else {
        alert("Radiobutton must be selected");
        event.preventDefault();
    }
}

function checkInputs() {
    if( (numbers.prop("value") !== "") && (letters.prop("value")!== "") ){
        return;
    } else {
        alert("Error");
        event.preventDefault();
    }
}


numbers.keypress(function (event) {
    if(event.charCode < 48 || event.charCode > 57){
        event.preventDefault();
    }
});

letters.keypress(function (event) {
    if(event.charCode < 97 || event.charCode > 100){
        event.preventDefault();
    }
});
