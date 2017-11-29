(function () {

    var body = jQuery(document.body);

    jQuery("#products > * [data-drag-helper]").on("mousedown", function (event) {
        var helper = jQuery(event.currentTarget);
        var clone = helper.clone();
        clone.css("width", helper.width());
        clone.appendTo(document.body);


        var helperOffset = helper.offset();
        var offset = {
            top: event.pageY - helperOffset.top,
            left: event.pageX - helperOffset.left
        };

        clone.css({
            top: event.pageY - offset.top,
            left: event.pageX - offset.left
        });


        var product = helper.closest("[data-product]");
        product.addClass("dragging");

        var carts = jQuery("[data-cart]").toArray().map(function (cart) {
           var rect = cart.getBoundingClientRect();
           return {
               node: jQuery(cart),
               rect: rect
           }
        });



        body.on("mousemove", function (event) {
            clone.css({
                top: event.pageY - offset.top,
                left: event.pageX - offset.left
            });

            var cloneRect = clone.get(0).getBoundingClientRect();

            var cart = carts.find(function (cart) {
                return overlaps(cart.rect, cloneRect);
            });

            if(cart){
                jQuery("[data-cart]").addClass("overlaps");
            }else{
                jQuery("[data-cart]").removeClass("overlaps");
            }
        });


        body.on("mouseup", function (event) {
            clone.appendTo(jQuery("[data-cart]"));
            helper.closest("[data-product]").removeClass("dragging");
        });
    });




    function overlaps(rect1, rect2) {
        return !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
    }

})();