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

        var item = jQuery(event.currentTarget).parent();
        var itemPrice = jQuery(item).find(".price").text();
        var itemName = jQuery(item).find(".name").text();



        body.on("mousemove.dragProduct", function (event) {
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


        body.on("mouseup.dragProduct", function (event) {
            var newElement = jQuery("" +
                "<tr data-cart-product class=\"table-header\">\n" +
                "   <td class=\"table-column-number\"></td>\n" +
                "   <td class=\"table-column-name\"></td>\n" +
                "   <td class=\"table-column-price\"></td>\n" +
                "   <td data-counts=\"\" class=\"table-column-quantity\"></td>\n" +
                "</tr>");

            newElement.find(".table-column-name").text(itemName);
            newElement.find(".table-column-price").text(itemPrice);


            jQuery("[data-cart]").append(newElement);
            newElement = null;
            helper.closest("[data-product]").removeClass("dragging");
            clone.remove();

            body.off("mousemove.dragProduct");
            body.off("mouseup.dragProduct");
        });

    });


    function overlaps(rect1, rect2) {
        return !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
    }

})();