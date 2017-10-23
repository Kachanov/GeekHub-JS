var form = jQuery("form");
var numbers = jQuery("#numbers");
var letters = jQuery("#letters");


numbers.keypress(function (event) {
    if(event.charCode < 48 || event.charCode > 57){
        return false;
    }
    console.log(numbers.prop("value"));
})

letters.keypress(function (event) {
    if(event.charCode < 97 || event.charCode > 100){
        return false;
    }
})

form.on("submit", function () {

})
