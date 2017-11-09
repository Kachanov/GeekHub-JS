(function () {
    var searchInput = jQuery("#search");
    var elements = jQuery("ul>li");

    searchInput.on("keyup", function () {
        var searchValue = searchInput.val();

        elements.each(function (index) {
            if (!jQuery(elements[index]).text().match(searchValue)) {
                jQuery(elements[index]).fadeOut(100);
            } else {
                jQuery(elements[index]).fadeIn(100);
            }
        })
    });

})()