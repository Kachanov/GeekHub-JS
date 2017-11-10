(function () {
    var searchInput = jQuery("#search");
    var elements = jQuery("ul>li");

    searchInput.on("keyup", function () {
        var searchValue = searchInput.val();
        var regularSearch = new RegExp(escapeRegExp(searchValue));

        elements.each(function (index) {
            if (jQuery(elements[index]).text().match(regularSearch)) {
                jQuery(elements[index]).fadeIn(100);
            } else {
                jQuery(elements[index]).fadeOut(100);
            }
        })
    });

    function escapeRegExp(text){
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

})()