var input = jQuery("#text");
var checkbox = jQuery("#checkbox");


$(input).on("input", function () {
    if( input.prop("value") === "JavaScript" ){
        checkbox.prop("checked", true);
    }else{
        checkbox.prop("checked", false);
    }
});